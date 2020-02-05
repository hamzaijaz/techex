import React from "react";
import ".././bootstrap.min.css";
import authorisedClient from "../common/authorised-axios";

function AddEvent() {
  const onAddEventSubmit = async values => {
    async function submitt(values) {
      await authorisedClient.post("createevent", {
        EventTitle: values.target.elements.eventName.value,
        EventDescription: values.target.elements.eventName.value,
        EventType: values.target.elements.events.value,
        EventDate: "2020-05-01 00:00:00.000Z", //values.target.elements.eventDate.value,
        EventCost: values.target.elements.cost.value
      });
    }
    submitt(values);
  };

  return (
    <div className="container-fluid myheader">
      <div className="row">
        <div className="jumbotron col-10 offset-1 digitalcentre">
          <h1>Add Event</h1>
          <p>You can add events on this page</p>
        </div>
      </div>

      <div className="mydiv">
        <form onSubmit={onAddEventSubmit}>
          <div className="form-group">
            <label>Event Name</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              placeholder="e.g. Footy Lunch"
            />
          </div>

          <div className="form-group">
            <label>Event Date:</label>{" "}
            <input
              type="datetime-local"
              id="eventDate"
              name="eventDate"
              min="2018-01-01"
              max="2025-12-31"
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              id="eventLocation"
              placeholder="e.g. Town Hall"
            />
          </div>

          <div className="form-group">
            <label>Event Type: </label>{" "}
            <select name="events" id="events">
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
            <label className="form-check-label">Confirm event</label>
          </div>

          <div className="form-group">
            <label>Cost (if any):</label>{" "}
            <input id="cost" type="number" min="0.00" step="5" max="2500" />
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
