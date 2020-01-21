import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="navbar">
      <Link to="/">Home</Link>
      <Link to="./AddEvent">Add Event</Link>
      <Link to="./ViewEvents">View Events</Link>
      <Link to="./Contact">Contact</Link>
    </div>
  );
}
export default NavBar;
