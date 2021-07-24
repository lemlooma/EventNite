import { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditEvents from "../CreateEvent/editEvent";

import EventPageHeader from "../EventPageHeader";

// import { Events } from '../../../../backend/db/models/event'
import { csrfFetch } from "../../store/csrf";
import css from "./EventDetails.css";

function EventDetails() {
  const sessionUserId = useSelector((state) => state.session.user?.id);
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);
  const [bookmark, setBookmark] = useState({});

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

  const testDelete = async () => {
    const response = await csrfFetch("/api/bookmark", {
      method: "DELETE",
      body: JSON.stringify({
        userId: sessionUserId,
        eventId: id,
      }),
    });
    setBookmark(null);
  };




  // console.log({ sessionUserId, event, x: event?.Bookmarks, bookmark });
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   useEffect(() => {
  //     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  //   }, [dispatch]);

  return (
    <div>
      <Navigation />
      <div className="everything">
        <EventPageHeader event={event} />
        <h2
          className="min-margin"
          style={{ textDecoration: "none", color: "orange" }}
        ></h2>
        <div className="event-body-container">
          <p style={{ textAlign: "justify" }}>{event.detail}</p>
          <div></div>
          {bookmark && bookmark.eventId ? (
            <button onClick={() => testDelete()}>UNBOOKMARK</button>
          ) : (
            <button onClick={() => addToBookmark()}>BOOKMARK</button>
          )}
          {/* const sessionUser = useSelector(state => state.session.user); const
          userId = sessionUser?.id */}
          {/* <button>Edit Event</button> */}
          <EditEvents />
        </div>
      </div>
    </div>
  );
}
export default EventDetails;
