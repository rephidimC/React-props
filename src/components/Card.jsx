import React from "react";
import Avatar from "./Avatar";
import Info from "./Info.jsx";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar source={props.src} />
        </div>
        <div className="bottom">
          <Info tel={props.tel} />
          <Info email={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
