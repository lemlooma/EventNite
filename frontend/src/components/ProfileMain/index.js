import ProfileWelcome from '../ProfileWelcome';
import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { csrfFetch } from "../../store/csrf";
import { Link } from "react-router-dom";

function ProfileMain(){
  const dispatch = useDispatch();
const sessionUser = useSelector(state => state.session.user)
const userEvents = sessionUser?.Bookmarks?.map(b => b.eventId)
console.log(userEvents)

const [events, setEvents] = useState([]);
useEffect(() => {
  (async function () {
    const res = await csrfFetch("/api/events");
    if (res.ok) {
      const newEvents = await res.json();
      const bookmarked = newEvents.filter(e => userEvents.includes(e.id))
      setEvents(bookmarked);
    }
  })();
}, []);

  // useEffect(()=> {
  //   dispatch()

  // }, [dispatch])

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
            {events?.map((event) => (
              <Link key={event.id} to={`/event/${event.id}`}>
                <b className="eventName">{event.name}</b>
                <img className="fitImg" src={event.pic} alt={event.name}></img>
    
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