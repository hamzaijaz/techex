import React from "react";
import Event from "../Components/Event";

function ViewEvents() {
  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
          <h1>Current Events</h1>
          <p>Following is the list of current events</p>
        </div>
      </div>

      {/* <div className="row jumbotron col-10 offset-1">
        <div className="w-100">
          <h2>100</h2>
          <p>this is event 1</p>
        </div>
      </div> */}

      <ul className="nobullets">
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
        <li>
          <Event />
        </li>
      </ul>
    </div>
  );
}
export default ViewEvents;
