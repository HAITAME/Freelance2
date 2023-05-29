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
            <Link className='link' to="/gigs?cat=design"> <span>Design</span> </Link>
            <Link className='link' to="/gigs?cat=web">     <span>Web development</span></Link>
            <Link className='link' to="/gigs?cat=animation">     <span>Animation</span></Link>
            <Link className='link' to="/gigs?cat=music">     <span>Music</span></Link>


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
            </div>

        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <br />
            <h2>Freelance.</h2>
            <span>© 2023 Freelance .</span>
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