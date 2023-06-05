import React from "react";
import "./ProjectsCards.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";




function ProjectCard({ item }) {
  const { data: userdata } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="projectCard">
      <LazyLoadImage src={item.cover} alt="" />
      <div className="info">
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{userdata?.username ?? "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
