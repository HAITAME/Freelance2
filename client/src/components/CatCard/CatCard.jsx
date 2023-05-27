import React from 'react'
import "./CatCard.scss"
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to="/gig?cat=design">
    <div className="catCard">
        <img src={item.img} alt="" />
        <h3>{item.title}</h3>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
        
    </div>
    </Link>
  )
}

export default CatCard