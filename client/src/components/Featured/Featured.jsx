
import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                        <LazyLoadImage src="/img/search.png" alt="" onClick={handleSubmit}/>
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
                <a href="http://localhost:5173/gigs?cat=web"><button>Web Development</button></a>
                <a href="http://localhost:5173/gigs?cat=design"><button>Design</button> </a>
                <a href="http://localhost:5173/gigs?cat=animation"><button>Animation</button></a>
                <a href="http://localhost:5173/gigs?cat=music"><button>Music</button> </a>
            </div>
        </div>
        <div className="right">
          <LazyLoadImage src="./img/main3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;