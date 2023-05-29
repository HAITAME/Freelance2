
import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className='featured'>
      <div className="container">
      <div className="left">
                <h1>Experienced and reliable freelancer ready to tackle your project.</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="/img/search.png" alt="" />
              <input
                type="text"
                placeholder="Search for a service"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/main3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;