import React from 'react';
import './Profil.scss';
import { Link } from 'react-router-dom';
import newRequest from "../../utils/newRequest";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Profil = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      console.log("logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <div className="CONT">
      <br/>
      <h1>Profil</h1>
      <br/>
      <div className="profil">
        <LazyLoadImage
          src={currentUser.img || "/img/ICON.jpg"}
          alt=""
          className="profil-image"
        />
        <hr/>

        <br></br>
        <div className="profil-info">
          <div className="profil-info-item">
            <span>Username: </span>
            <span> {currentUser.username}</span>
          </div>
          <div className="profil-info-item">
            <span>Email: </span>
            <span>{currentUser.email}</span>
          </div>
          <div className="profil-info-item">
            <span>Country:</span>
            <span>{currentUser.country}</span>
          </div>
          <div className="profil-info-item">
            <span>Description:</span>
            <span>{currentUser.desc}</span>
          </div>
          <div className="profil-info-item">
            <span>Number:</span>
            <span>{currentUser.phone}</span>
          </div>
        </div>
        <br></br>

        
      </div>
      <div className="options">
          {currentUser?.isSeller && (
            <>
              <Link className="LINKK" to="/mygigs">
                My Gigs
              </Link>
              <br />
              <Link className="LINKK" to="/add">
                Add New Gig
              </Link>
              <br />
            </>
          )}
          <Link className="LINKK" to="/orders">
            My Orders
          </Link>
          <br />
          <Link className="LINKK" to="/messages">
            Messages
          </Link>
          <br />
          <Link className="LINKK" onClick={handleLogout} to="/">
            LogOut
          </Link>
        </div>
    </div>
  );
}

export default Profil;
