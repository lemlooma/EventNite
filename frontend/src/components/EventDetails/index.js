import { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";

import Navigation from "../Navigation/index";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import EditEvents from "../CreateEvent/editEvent";
import { useHistory } from "react-router";

import EventPageHeader from "../EventPageHeader";

// import { Events } from '../../../../backend/db/models/event'
import { csrfFetch } from "../../store/csrf";
import css from "./EventDetails.css";

function EventDetails() {
  const sessionUserId = useSelector((state) => state.session.user?.id);

  const [event, setEvent] = useState([]);
  const [bookmark, setBookmark] = useState({});
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const res = await csrfFetch(`/api/events/${id}`);
      if (res.ok) {
        const newEvent = await res.json();
        setEvent(newEvent);
        setBookmark(
          newEvent?.Bookmarks?.find((fav) => +fav.userId === +sessionUserId)
        );
      }
    })();
  }, []);

  const addToBookmark = async () => {
    const response = await csrfFetch("/api/bookmark", {
      method: "POST",
      body: JSON.stringify({
        userId: sessionUserId,
        eventId: id,
      }),
    });
    const data = await response.json();
    setBookmark(data);
    console.log(data);
  };

  const unbookmark = async () => {
    const response = await csrfFetch("/api/bookmark", {
      method: "DELETE",
      body: JSON.stringify({
        userId: sessionUserId,
        eventId: id,
      }),
    });
    setBookmark(null);
  };

  const deleteEvent = async () => {
    const response = await csrfFetch(`/api/events/${id}`, {
      method: "DELETE",
    });
    history.push("/");
  };
  function click() {
    setShowForm(true);
  }

  return (
    <div>

      <Navigation />
      <EventPageHeader event={event} />
      <h2 className="bodytitle"> Event Details </h2>
      <div className="event-body-container">
        <p
          style={{
            textAlign: "justify",
            display: "flex",
            alignItems: "center",
            width: "60%",
            margin: "auto",
            lineHeight: "2",
            border: "3px dotted",
            paddingTop: "15px",
            paddingBottom: "20px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          {event.detail}
        </p>
        <div className="butts">
          <div></div>
          {bookmark && bookmark.eventId ? (
            <button onClick={() => unbookmark()}>Unbookmark</button>
          ) : (
            <button onClick={() => addToBookmark()}>Bookmark</button>
          )}
          {+sessionUserId === +event.userId && (
            <button onClick={() => deleteEvent()}>Delete Event</button>
          )}
          {+sessionUserId === +event.userId ? (
            <button onClick={click}> Edit Event</button>
          ) : (
            ""
          )}
        </div>
        {showForm ? <EditEvents setShowForm={setShowForm} /> : ""}
      </div>
    </div>
  );
}
export default EventDetails;
