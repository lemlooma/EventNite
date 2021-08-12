
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router";
import { addEvent } from "../../store/events";

function AddEvent() {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [ticketCost, setTicketCost] = useState("");
  const [detail, setDetail] = useState("");
 
  const sessionUserId = useSelector((state) => state.session.user?.id);
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
      ticketCost: +ticketCost,
      categoryId: 1,
      userId: +sessionUserId,
    };
  
    let createdEvent = await dispatch(addEvent(payload));
    if (createdEvent) {
      history.push("/");
    }
  };
  return (
    isLoaded && (
      <>
        <div className="photoContainer"></div>
        <form onSubmit={handleSubmit} className="inputForm">
          <div className="inputContainer">
            <label>
              <input
                className="input"
                placeholder="Event Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <input
                className="input"
                placeholder="URL Address"
                type="text"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
              />
            </label>
            <label>
              <input
                className="input"
                placeholder="Date"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <label>
              <input
                className="input"
                placeholder="Location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <label>
              <input
                className="input"
                placeholder="Price"
                type="number"
                value={ticketCost}
                onChange={(e) => setTicketCost(e.target.value)}
              />
            </label>
            <label>
              <label>
                <input
                  className="details-input"
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
            {sessionUserId && <button type="submit">Create Event!</button>}
          </div>
        </form>
      </>
    )
  );
}
export default AddEvent;
