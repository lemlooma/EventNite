import { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { Events } from '../../../../backend/db/models/event'
import { csrfFetch } from "../../store/csrf";
import css from "./EventDetails.css";

function EventDetails() {
  const sessionUserId = useSelector((state) => state.session.user?.id);
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async function () {
      const res = await csrfFetch(`/api/events/${id}`);
      if (res.ok) {
        const newEvent = await res.json();
        setEvent(newEvent);
      }
    })();
  }, []);
  let bookmark = event?.Bookmarks?.find(
    (fav) => +fav.userId === +sessionUserId
  );

  const test = async () => {
    const response = await csrfFetch("/api/bookmark", {
      method: "POST",
      body: JSON.stringify({
        userId: sessionUserId,
        eventId: id,
      }),
    });
    const data = await response.json();
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
    const data = await response.json();
    console.log(data);
  };
  console.log({ sessionUserId, event, x: event?.Bookmarks, bookmark });
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   useEffect(() => {
  //     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  //   }, [dispatch]);

  return (
    <div>
      Hello{" "}
      <div>
        {bookmark ? (
          <button onClick={() => testDelete()}>DELETE</button>
        ) : (
          <button onClick={() => test()}>Bookmark</button>
        )}
      </div>
    </div>
  );
}
export default EventDetails;
