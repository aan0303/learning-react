import React from "react";

export default function EventsList({ events, handleClick }) {
  return (
    <>
      {events.map((event) => (
        <React.Fragment key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))}
    </>
  );
}
