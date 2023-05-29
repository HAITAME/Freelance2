import React from "react";
import "./ProjectsCard.scss";
import LazyLoadImage from "react-lazy-load-image-component";

function ProjectCard({ item }) {
  return (
    <div className="projectCard">
      <LazyLoadImage src={item.img} alt="" />
      <div className="info">
        <LazyLoadImage src={item.pp} alt="" />
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;