import React from "react";
import FontAwesome from "react-fontawesome";
import moment from "moment";

import "./CardInfo.css";

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => {
      return item.teamId === team;
    });
    if (data) {
      return data.name;
    }
  };

  const formatDate = date => {
    return moment(date).format(" DD.MM.YYYY");
  };
  return (
    <div className="cardNfo">
      <span className="teamName"> {teamName(props.teams, props.team)}</span>
      <span className="date">
        {" "}
        <FontAwesome name="clock-o" />
        {formatDate(props.date)}
      </span>
    </div>
  );
};

export default CardInfo;
