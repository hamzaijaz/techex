import React from "react";

function Event({ title, description }) {
  return (
    <a href="#">
      <div className="event">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
}
export default Event;
