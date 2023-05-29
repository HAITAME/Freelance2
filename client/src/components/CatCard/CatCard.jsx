import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";
import LazyLoadImage from "react-lazy-load-image-component";

function CatCard({ card }) {
  return (
    <Link to="/gig?cat=design">
    <div className="catCard">
        <LazyLoadImage src={item.img} alt="" />
        <h3>{item.title}</h3>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
        
    </div>
    </Link>
  );
}
export default CatCard;