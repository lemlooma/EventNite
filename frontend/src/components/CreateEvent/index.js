import Navigation from "../Navigation/index";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router";
import { addEvent } from "../../store/events";
import css from "./CreateEvent.css";
function AddEvent() {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [ticketCost, setTicketCost] = useState("");
  const [detail, setDetail] = useState("");
  const [categoryId, setCategoryId] = useState("");


  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      pic,
      time,
      location,
      detail,
      ticketCost:+ticketCost,
      categoryId:1,
    };
    console.log(payload)
    let createdEvent = dispatch(addEvent(payload));
    if (createdEvent) {
      history.push("/");
    }
  };
  return (
    isLoaded && (
      <>
        {/* <Navigation isLoaded={isLoaded} />
        {isLoaded} */}
        <div className="photoContainer">
          {/* <img
            className="".photo}
            src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-national-sports-minimalist-silhouette-blue-sky-banner-image_176796.jpg"
            alt="photo"
          ></img> */}
        </div>
        <form onSubmit={handleSubmit} className="inputContainer">
          <div className="inputContainer">
            <label>
              Event Name
              <input
                placeholder = "Event Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Image
              <input
                placeholder= "URL Address"
                type="text"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
              />
            </label>
            <label>
              Date
              <input
               placeholder= "Date"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <label>
              Location
              <input
                placeholder= "Location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <label>
              Ticket Price
              <input
              placeholder= "Price"
                type="number"
                value={ticketCost}
                onChange={(e) => setTicketCost(e.target.value)}
              />
            </label>
            <label>
              <label>
                Event Details
                <input
                  placeholder="Event Details"
                  type="text"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </label>
              {/* Category Type
              <input
                type="text"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              /> */}
            </label>
            <button type="submit">Create Event!</button>
          </div>
        </form>
      </>
    )
  );
}
export default AddEvent;
