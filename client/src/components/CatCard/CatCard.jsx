import React from 'react';
import "./CatCard.scss";
import { Link } from 'react-router-dom';

const CatCard = ({item}) => {
  return (

    <div className="catCard">
       <Link className='link' to={`/gigs?cat=${item.cat}`}> 
        <img src={item.img} alt="" />
        <h3>{item.title}</h3>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
       </Link> 
    </div>
  )
}

export default CatCard;
