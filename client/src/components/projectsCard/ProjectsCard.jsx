import React from "react";
import "./ProjectsCard.scss";

function ProjectCard({ item }) {
  return (
    <div className="projectCard">
      <img src={item.img} alt="" />
      <div className="info">
        <img src={item.pp} alt="" />
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;