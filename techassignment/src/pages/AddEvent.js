import React, { useState } from "react";
import ".././bootstrap.min.css";
import authorisedClient from "../common/authorised-axios";

function AddEvent() {
  const [submitted, setSubmitted] = useState(false);

  const onAddEventSubmit = async values => {
    async function submitt(values) {
      var response = await authorisedClient.post(
        "createevent?code=hnChhxjHX89V4OvaTvJLzwlZ9z58dWJpZjBjvUUQ1ucUFhjXcoTkQQ==",
        {
          EventTitle: values.target.elements.eventName.value,
          EventDescription: values.target.elements.eventDescription.value,
          EventType: values.target.elements.events.value,
          EventDate: values.target.elements.eventDate.value,
          EventCost: values.target.elements.cost.value
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(true);
        }, 5000);
      }
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
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="eventDescription"
              placeholder="e.g. Describe the event"
              required
            />
          </div>

          <div className="form-group">
            <label>Event Date </label>{" "}
            <input
              className="form-control"
              type="datetime-local"
              id="eventDate"
              name="eventDate"
              min="1753-06-01T08:30"
              max="9999-06-30T16:30"
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              id="eventLocation"
              placeholder="e.g. Town Hall"
              required
            />
          </div>

          <div className="form-group">
            <label>Event Type: </label>{" "}
            <select name="events" id="events" required>
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
            <input id="cost" type="number" min="0.00" max="2500" required />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Event
          </button>
          {submitted && <span className="ml-2">submitted!</span>}
        </form>
      </div>
    </div>
  );
}
export default AddEvent;
