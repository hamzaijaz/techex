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
      await authorisedClient.post(`deleteevent/${eventIdentity}`);
    }
    // <Dialog>Are you sure?</Dialog>;
    const r = window.confirm("Do you really want to delete this event?");
    if (r === true) {
      deleteEvent();
      window.location.reload(false);
    }
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

      <div className="event">
        <div onClick={handleShow}>
          <h1>{title}</h1>
          <div className="row">
            <span className="col-7">{description}</span>
            <span className="col-7 offset-9">People Coming: {rsvp}</span>
          </div>
        </div>
        <div>
          {isAdmin && (
            <Button className="mt-2" onClick={deleteClicked}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default Event;
