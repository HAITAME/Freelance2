/* eslint-disable no-unused-vars */
import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
      <hr />

        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            {/* <Link className='link' to="/gigs?cat=design"> <span>Design</span> </Link>
            <Link className='link' to="/gigs?cat=web">     <span>Web development</span></Link>
            <Link className='link' to="/gigs?cat=animation">     <span>Animation</span></Link>
            <Link className='link' to="/gigs?cat=music">     <span>Music</span></Link> */}

          <a href="http://localhost:5173/gigs?cat=design" className='link'> <span>Design</span> </a>    
          <a href="http://localhost:5173/gigs?cat=web" className='link'>  <span>Web development</span></a>
          <a href="http://localhost:5173/gigs?cat=animation" className='link'> <span>Animation</span></a> 
          <a href="http://localhost:5173/gigs?cat=music" className='link'> <span>Music</span></a>

          </div>
          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Privacy Policy</span>

          </div>
          <div className="item">
            <h2>Support</h2>
            </div>
            <div className="item">
            <h2>Community</h2>
            {/* <span>Become a Seller</span> */}
              <a className='link' href="https://github.com/HAITAME"><span>GitHub</span></a>
              <a className='link' href="https://github.com/BILALck4"><span>GitHub</span></a>
              
            </div>

        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <br />
            <h2>Freelance ✩</h2>
            <span>© 2023 Freelance ✩</span>
          </div>
          <div className="right">
            <div className="social">
            <div className="link">
              <a href="https://github.com/HAITAME"><LazyLoadImage src="/img/github.png" alt="Haitame" /></a>
              <a href="https://github.com/BILALck4"><LazyLoadImage src="/img/github.png" alt="Bilal" /></a>
              </div>
            </div>
            <div className="link"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer