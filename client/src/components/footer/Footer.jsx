import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>


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
            <span>Become a Seller</span>
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
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
            </div>
            <div className="link"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer