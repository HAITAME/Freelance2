import React, { useEffect, useState } from 'react'
import './Navbar.scss'
// import navbar from './Navbar.scss'
// import logo from './Navbar.scss'
// import links from './Navbar.scss'
// import text from './Navbar.scss'
// import dot from './Navbar.scss'
// import container from './Navbar.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import newRequest from "../../utils/newRequest";
import { LazyLoadImage } from "react-lazy-load-image-component";


// import { navigate } from "react-router-dom";

const Navbar = () => {
  const [active,setActive] = useState(false)
  const [open,setOpen] = useState(false)
  
  const {pathname} =  useLocation()
  const isActive = (()=>{
      window.scrollY >0 ? setActive(true) :setActive(false)
  })
  useEffect(()=>{
    window.addEventListener('scroll',isActive)
    return () => {
      window.removeEventListener('scroll', isActive )
    }
  },[]);
  // const currentUser={
  //   id:1,
  //   username:"Haitame",
  //   isSeller:true
  // }
  const currentUser=JSON.parse(localStorage.getItem("currentUser"));
 
  const navigate=useNavigate();

  const handleLogout=async ()=>{
    try{

      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      console.log("logout")
      navigate("/");

        }catch(err){
         console.log(err);
    }
  }


  return (
    // Si path != home page => active sinon not active
    <div className= {active || pathname !=="/" ? "navbar active" :"navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>               
                   <span className='text'>FreeLance</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <Link className='link' to="/gigs?cat"> <span>Explore</span>   </Link>
                {!currentUser && ( <Link className='link' to="/login"><span>Sign in</span> </Link>)}
                {/* {!currentUser?.isSeller &&<span>Become a Seller</span>} */}
                {!currentUser && ( <Link className='link' to="/register"> <button>Sign up</button> </Link>)}
                {currentUser &&(
                   <div className="user" onClick={()=>setOpen(!open)}>
                       <LazyLoadImage 
                       src={ currentUser.img   || "/img/ICON.jpg"} 
                       alt="" 
                       />
                       <span>{currentUser?.username }</span>
                       {open &&<div className="options">
                        { currentUser?.isSeller &&(
                            <>
                            <Link className='link' to="/mygigs"> Gigs</Link>
                            <Link className='link' to="/add">Add New Gig</Link>
                            </>
                          )}
                        <Link className='link' to="/orders">Orders</Link>
                        <Link className='link' to="/messages">Messages</Link>
                        <Link className='link' onClick={handleLogout} to="/">LogOut</Link>

                      </div>}
                   </div>
                )}



            </div>
        </div>
        {/* si la page n'est pas la page d'aceuil afficher le menu est  afficher d'une manier permanante*/}
        {active || pathname !=="/" && (
          <>
          <hr/>
          <div className="menu">
          <Link className='link' to="/gigs?cat=design"> <span>Design</span> </Link>
          <Link className='link' to="/gigs?cat=web">     <span>Web development</span></Link>
          <Link className='link' to="/gigs?cat=animation">     <span>Animation</span></Link>
          <Link className='link' to="/gigs?cat=music">     <span>Music</span></Link>

          </div>
          </>
        )}  
    </div>
  )
}

export default Navbar