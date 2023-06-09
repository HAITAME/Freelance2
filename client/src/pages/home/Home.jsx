import React from 'react';
import "./Home.scss"
import Featured from '../../components/Featured/Featured';
import { LazyLoadImage } from "react-lazy-load-image-component";

import Slide from '../../components/Slide/Slide';
import CatCard from '../../components/CatCard/CatCard';
import {cards, projects} from "../../data"

import ProjectCard from '../../components/projectsCard/ProjectsCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map(card=>(
        <CatCard key={card.id} item={card} />
      ))}
      </Slide> 
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>Unlock Success: Why Clients Trust Us for Exceptional Freelance Solutions</h1> 
              <div className="title">
                <LazyLoadImage  src="../public/img/check.png" alt="check" />
                Transparent Pricing, No Surprises
              </div>  
              <p>Enjoy transparent pricing and clear breakdowns, ensuring you have full control over your budget.</p>

                 <div className="title">
                      <img src="../public/img/check.png" alt="check"  loading="lazy"/>
                      Secure Platform, Peace of Mind
                 </div>  
                 <p>Rest assured knowing your transactions and data are secure with our robust platform and privacy measures.

                 </p>

              <div className="title">
                <img src="../public/img/check.png" alt="check" loading="lazy"/>
                Prompt and Reliable Support
              </div>  
              <p>Benefit from responsive and reliable support from our team, available to assist you every step of the way. </p>
              
              
              <div className="title">
                <img src="../public/img/check.png" alt="check" loading="lazy"  />
                Expert Freelancers at Your Fingertips
              </div>  
              <p>Access a pool of expert freelancers with diverse skill sets, ready to bring your projects to life. </p>
              
            </div>
            <div className="item">
                <div className="why">
                    <img src="../public/img/Why2.jpg" alt="why us"  loading="lazy" />
                </div>
            </div>
          </div>
        </div>
      {/* need to add something else  */}


      <Slide slidesToShow={4} arrowsScroll={4}>
      {projects.map((card)=>(
        <ProjectCard key={card.id} item={card} />
      ))}
      </Slide>
    </div>
  )
}

export default Home