// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import  { registerEvent } from '../../store/events';

// function RegistrationForm({event}) {
//   const dispatch = useDispatch();

//   const registeredList = useSelector(state => state.events.registered);
//   const registeredEventIds = registeredList.map(event => event.id)

//   // console.log(registeredEventIds);

//   // form input states
//   const [ticketNum, setTicketNum] = useState(0);
//   const [totalCost, setTotalCost] = useState(0);
//   const [errors, setErrors] = useState([]);

//   // form submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     const payload = { id: event.id, ticketNum }
//     return dispatch(registerEvent(payload))
//       .catch(async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       });
//   }
//   // dynamically show ticket count and order total
//   useEffect(() => {
//     let price = event.ticketPrice;
//     let tickets = ticketNum;
//     let cost = Number(price * tickets).toFixed(2);
//     setTotalCost(cost);
//   }, [ticketNum, event.ticketPrice])
//   let orderSummary = `Order Total: (${ticketNum}) x ${event.ticketPrice} = $${totalCost}`

//   const registered = (registeredEventIds.find(id => id === event.id) !== undefined )
//   const successMessage = `Alright! You're signed up!`
//   const closeWindow = `You may now click outside this window to close.`
//   const registerMessage = registered ? `I NEEDS more tickets!` : 'Register';

//   return (
//     <>
//       <div>
//        { registered && (
//           <>
//             <h3 style={{color:'green'}}>{successMessage}</h3>
//             <p>{closeWindow}</p>
//           </>
//         )}
//        { !registered && (
//             <h3>{orderSummary}</h3>
//         )}
//       </div>
//       <div className={`flex-container`}>
//         <form className='modal-form' onSubmit={handleSubmit}>
//           <ul>
//             { errors && errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)}
//           </ul>
//           <label>
//             How many tickets would you like to purchase?
//           </label>
//             <input
//               type="number"
//               value={ticketNum}
//               onChange={(e) => setTicketNum(e.target.value)}
//               required
//             />
//           <button type="submit">{registerMessage}</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default RegistrationForm;
