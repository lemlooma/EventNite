
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import {  useParams} from "react-router";
import { editEvent } from "../../store/events";

function EditEvents({setShowForm}) {
   const [name, setName] = useState("");
   const [pic, setPic] = useState("");
   const [time, setTime] = useState("");
   const [location, setLocation] = useState("");
   const [ticketCost, setTicketCost] = useState("");
   const [detail, setDetail] = useState("");

   const { id } = useParams();
   const dispatch = useDispatch();

   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
   }, [dispatch]);
   const handleSubmit = async (e) => {
     e.preventDefault();
     const payload = {
      id,
       name,
       pic,
       time,
       location,
       detail,
       ticketCost: +ticketCost,
       categoryId: 1,
     };
    
     let editedEvent = await dispatch(editEvent(payload));
     if (editedEvent) {
      setShowForm(false)
     }
   };
 


return (
    isLoaded && (
      <>
     
        <div className="photoContainer">
        </div>
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
                  className="input"
                  placeholder="Event Details"
                  type="text"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </label>
            
            </label>
            <button  type="submit">Edit Event</button>
          </div>
        </form>
      </>
    )
  );
}
export default EditEvents;
