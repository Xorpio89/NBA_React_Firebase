import React from "react";
import "../VideosList.css";
import VideosListTemplate from "../VideosListTemplate";

const VideosRelated = props => (
  <div className="relatedWrapper">
    <VideosListTemplate data={props.data} teams={props.teams} />
  </div>
);

export default VideosRelated;
