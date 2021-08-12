import ProfileWelcome from "../ProfileWelcome";
import React, { useState, useEffect } from "react";
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import { Link, useParams } from "react-router-dom";

function ProfileMain() {
  const [bookmarks, setBookmarks] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionUserId = useSelector((state) => state.session.user?.id);

  const userBookmarkEvents = sessionUser?.Bookmarks?.map((b) => b.eventId);
  const userRegisteredEvents = sessionUser?.Registrations?.map(
    (b) => b.eventId
  );


  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const res = await csrfFetch("/api/users/events");

      if (res.ok) {
        const events = await res.json();

        const bookmarked = events?.bookmarkedEvents;
        setBookmarks(bookmarked);

        const registered = events?.registeredEvents;
        setRegistrations(registered);
      }
    })();
  }, []);

 

  return (
    <div className="body">
      {sessionUser && (
        <div className="profile-grid-container">
          <div className="profile-settings-container">
            <ProfileWelcome
              username={sessionUser.username}
              email={sessionUser.email}
            />
          </div>
          <div className="eventsContainer">
            <h2
              style={{
                textDecoration: "underline",
                marginTop: "40px",
                paddingLeft: "450px",
              }}
            >
              Bookmarked Events
            </h2>
            {bookmarks?.map((event) => (
              <Link key={event.id} to={`/event/${event.id}`}>
                <b className="eventName">{event.name}</b>
                <img className="eventImg" src={event.pic} alt={event.name}></img>
                <div></div>
              </Link>
            ))}

            <h2
              style={{
                textDecoration: "underline",
                marginTop: "40px",
                paddingLeft: "450px",
              }}
            >
              Registered Events
            </h2>
            {registrations?.map((event) => (
              <Link key={event.id} to={`/event/${event.id}`}>
                <b className="eventName">{event.name}</b>
                <img className="eventImg" src={event.pic} alt={event.name}></img>
                <div></div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {!sessionUser && <Redirect to="/" />}
    </div>
  );
}

export default ProfileMain;
