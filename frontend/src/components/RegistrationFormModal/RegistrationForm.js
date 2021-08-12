import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { registerEvent } from "../../store/events";

function RegistrationForm({ event, setEvent }) {
  const dispatch = useDispatch();
  const [ticketNum, setTicketNum] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [registered, setRegistered] = useState(false);
  const sessionUserId = useSelector((state) => state.session.user?.id);
  const [errors, setErrors] = useState([]);

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = { id: event.id, ticketNum };
    return dispatch(registerEvent(payload))
      .then(async (res) => {
        setEvent({
          ...event,
          Registrations: [
            ...event.Registrations,
            { userId: +sessionUserId, eventId: +event.id, ticketNum },
          ],
        });
        setRegistered(true);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };


  useEffect(() => {
    let price = +event.ticketCost;
    let tickets = ticketNum;
    let cost = Number(price * tickets).toFixed(2);
    setTotalCost(cost);
  }, [ticketNum, event.ticketCost]);

  let orderSummary = `Order Total: (${ticketNum}) x ${+event.ticketCost} = $${totalCost}`;
  const successMessage = `Sweet! You're signed up!`;
  const closeWindow = `You may now click outside this window to close.`;
  const registerMessage = "Register";

  return (
    <>
      <div>
        {registered && (
          <>
            <h3 style={{ color: "green" }}>{successMessage}</h3>
            <p>{closeWindow}</p>
          </>
        )}
        {!registered && <h3>{orderSummary}</h3>}
      </div>
      <div className={`flex-container`}>
        <form className="modal-form" onSubmit={handleSubmit}>
          <ul>
            {errors &&
              errors.map((error, idx) => (
                <li key={idx} style={{ color: "red" }}>
                  {error}
                </li>
              ))}
          </ul>
          <label>How many tickets would you like to purchase ?</label>
          <input
            type="number"
            value={ticketNum}
            onChange={(e) => setTicketNum(e.target.value)}
            required
          />
          <button type="submit">{registerMessage}</button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
