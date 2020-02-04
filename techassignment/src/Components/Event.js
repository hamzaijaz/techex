import React, { useState } from "react";
import EventModal from "./EventModal";

export const Event = ({
  title,
  description,
  eventIdentity,
  rsvp,
  eventType,
  eventDate,
  eventCost
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    //window.location.reload(false);
  };
  const handleShow = () => setShow(true);

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
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};
export default Event;
