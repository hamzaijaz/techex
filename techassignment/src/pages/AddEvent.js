import React from "react";
import ".././bootstrap.min.css";

function AddEvent() {
  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
          <h1>Add Event</h1>
          <p>You can add events on this page</p>
        </div>
      </div>

      <div className="mydiv">
        <form>
          <div className="form-group">
            <label for="eventName">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              placeholder="e.g. Footy Lunch"
            />
          </div>

          <div className="form-group">
            <label for="date">Event Date:</label>{" "}
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              min="2018-01-01"
              max="2025-12-31"
            />
          </div>

          <div className="form-group">
            <label for="eventLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="eventLocation"
              placeholder="e.g. Town Hall"
            />
          </div>

          <div className="form-group">
            <label for="eventType">Event Type: </label>{" "}
            <select name="events">
              <option value="choose">Choose</option>
              <option value="lunch">Lunch</option>
              <option value="training">Training</option>
              <option value="comedy">Comedy</option>
              <option value="welcomeparty">Welcome Party</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Confirm event
            </label>
          </div>

          <div className="form-group">
            <label for="cost">Cost (if any):</label>{" "}
            <input type="number" min="0.00" step="5" max="2500" />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddEvent;
