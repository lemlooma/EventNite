import { useState, useEffect } from 'react'
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/index'

// import { Events } from '../../../../backend/db/models/event'
import { csrfFetch } from '../../store/csrf';
import css from'./HomePage.css'
function HomePage() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([])
  useEffect(() => {
    (async function(){
      const res = await csrfFetch('/api/events')
      if (res.ok) {
        const newEvents = await res.json()
        setEvents(newEvents)
      }
    })()
  }, [])
  console.log('events!!', events)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  
  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded}
        {/* <h1>Browse Events</h1> */}
        <div className="eventsContainer">
          {events?.map((event) => (
            <Link to={`/event/${event.id}`}>
              <b className="eventName">{event.name}</b>
              <img className="fitImg" src={event.pic} alt={event.name}></img>
            </Link>
          ))}
        </div>
      </>
    )
  );
}
export default HomePage;