// import { csrfFetch } from '../store/csrf';


// const LOAD_EVENTS = 'events/LOAD_EVENTS';
// const LOAD_REGISTERED = 'events/LOAD_REGISTERED';
// const REGISTER = 'events/REGISTER';
// const UNREGISTER = 'events/UNREGISTER';


// /* ACTION CREATORS */

// const loadEvents = events => ({
//   type: LOAD_EVENTS,
//   events,
// });

// const loadRegistered = registered => ({
//   type: LOAD_REGISTERED,
//   registered,
// });


// const register = event => ({
//   type: REGISTER,
//   event,
// });

// const unregister = eventId => ({
//   type: UNREGISTER,
//   eventId,
// });


// /* GET THUNKS */

// //GET all events
// export const getEvents = () => async dispatch => {
//   const response = await fetch(`/api/events/`);

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(loadEvents(data.events));
//   }
// };

// // GET registered events
// export const getRegistered = () => async dispatch => {
//   const response = await fetch(`/api/events/registrations`);

//   if (response.ok) {
//     const registered = await response.json();
//     dispatch(loadRegistered(registered));
//   }
// };



// /* POST THUNKS */
// // POST add new registration to Registration table
// export const registerEvent = (payload) => async dispatch => {
//   const eventId = payload.id;
//   const ticketNum = parseInt(payload.ticketNum, 10);

//   const response = await csrfFetch(`/api/events/${eventId}/registration`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify({ ticketNum }),
//   });

//   if (response.ok) {
//     const event = await response.json();
//     dispatch(register(event));
//   }
// };




// /* DELETE THUNKS */

// // DELETE registered events
// export const unregisterEvent = (eventId) => async dispatch => {
//   const response = await csrfFetch(`/api/events/${eventId}/registration`, {
//     method: 'DELETE'
//   });

//   if (response.ok) {
//     const unregisteredId = await response.json();
//     dispatch(unregister(unregisteredId));
//   }
// };




// /* EVENT REDUCER */

// const initialState = {
//   eventsList: [],
//   registered: [],
 
// };

// const eventsReducer = (state = initialState, action) => {
//   let newState;

//   switch (action.type) {
//     case LOAD_EVENTS: {
//       const allEvents = {};
//       action.events.forEach(event => {
//         allEvents[event.id] = event;
//       });
//       return {
//         ...allEvents,
//         ...state,
//         eventsList: action.events,
//       };
//     }
//     case LOAD_REGISTERED: {
//       return {
//         ...state,
//         registered: action.registered
//       };
//     }
//     case REGISTER: {
//       newState = {...state}
//       const newRegistered = [...newState.registered, action.event]
//       newState.registered = newRegistered;
//       return newState;
//     }
    
//     case UNREGISTER: {
//       newState = {...state}; // copy state into new obj

//       // update registered list by filtering for all BUT the unregistered event id
//       const newRegistered = newState.registered.filter(event => event.id.toString() !== action.eventId.toString());

//       newState.registered = newRegistered;
//       return newState;
    
//     }
//     default:
//       return state;
//   }
// }

// export default eventsReducer;