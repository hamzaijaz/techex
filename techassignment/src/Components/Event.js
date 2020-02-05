import React, { useState } from "react";
import EventModal from "./EventModal";
import Button from "react-bootstrap/Button";
import authorisedClient from "../common/authorised-axios";

export const Event = ({
  title,
  description,
  eventIdentity,
  rsvp,
  eventType,
  eventDate,
  eventCost,
  isAdmin
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    //window.location.reload(false);
  };
  const handleShow = () => setShow(true);

  const deleteClicked = () => {
    async function deleteEvent() {
      let response = await authorisedClient.post(
        `deleteevent/${eventIdentity}`
      );
    }
    deleteEvent();
    window.location.reload(false);
  };

  return (
    <>
      <EventModal
        show={show}
        handleClose={handleClose}
        title={title}
        description={description}
        eventIdentity={eventIdentity}
        rsvp={rsvp}
        eventType={eventType}
        eventDate={eventDate}
        eventCost={eventCost}
      />

      <div className="event" onClick={handleShow}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>{isAdmin && <Button onClick={deleteClicked}>Delete</Button>}</div>
      </div>
    </>
  );
};
export default Event;
