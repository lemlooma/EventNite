import { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditEvents from "../CreateEvent/editEvent";
import { useHistory } from "react-router";

import EventPageHeader from "../EventPageHeader";

// import { Events } from '../../../../backend/db/models/event'
import { csrfFetch } from "../../store/csrf";
import css from "./EventDetails.css";

function EventDetails() {
  const sessionUserId = useSelector((state) => state.session.user?.id);
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);
  const [bookmark, setBookmark] = useState({});
  const history = useHistory();
  const[showForm, setShowForm] = useState(false)
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
  setShowForm(true)
  }

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
            <button onClick={() => unbookmark()}>UNBOOKMARK</button>
          ) : (
            <button onClick={() => addToBookmark()}>BOOKMARK</button>
          )}
         

        
          {+sessionUserId === +event.userId && (
            <button onClick={() => deleteEvent()}>Delete</button>
          )}
           {+sessionUserId === +event.userId? <button onClick={click} > Edit Event</button>:"" }

           {showForm? <EditEvents setShowForm={setShowForm}/> : "" }
          
        </div>
      </div>
    </div>
  );
}
export default EventDetails;
