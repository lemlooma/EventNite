import { csrfFetch } from "./csrf";
const ADD_ONE = "events/newevent";
const REMOVE_EVENT = "events/removeEvent";
const REGISTER = "events/REGISTER";

const addOne = (payload) => {
  return {
    type: ADD_ONE,
    payload,
  };
};
const removeEvent = () => {
  return {
    type: REMOVE_EVENT,
  };
};

const register = (event) => ({
  type: REGISTER,
  event,
});

export const addEvent = (payload) => async (dispatch) => {
  console.log(payload);
  const response = await csrfFetch("/api/events", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const newEvent = await response.json();
    dispatch(addOne(newEvent));
    return newEvent;
  }
};
export const editEvent = (payload) => async (dispatch) => {
  const res = await fetch(`/api/events/${payload.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const editedEvent = await res.json();
  if (res.ok) {
    dispatch(addOne(editedEvent));
  }
  return editedEvent;
};
export const deleteEvent = () => async (dispatch) => {
  const response = await csrfFetch("/api/events", {
    method: "DELETE",
  });
  dispatch(removeEvent());
  return response;
};


export const registerEvent = (payload) => async (dispatch) => {
  const eventId = payload.id;
  const ticketNum = parseInt(payload.ticketNum, 10);

  const response = await csrfFetch(`/api/events/${eventId}/registration`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ticketNum }),
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(register(event));
  }
};




const initialState = { list: [], registered: [],};
const eventReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case ADD_ONE: {
      if (!state[action.payload.id]) {
        const newState = { ...state, [action.payload.id]: action.payload };
        // takes care of adding
        const eventList = newState.list.map((id) => newState[id]);
        eventList.push(action.payload);
        newState.list = eventList;
        return newState;
      } // takes care of updating
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload },
      };
    }
  //   case REMOVE_EVENT:
  //     newState = Object.assign({}, state);
  //     newState.event = null;
  //     return newState;
  //   default:
  //     return state;
  // }

   case REGISTER: {
      newState = {...state}
      const newRegistered = [...newState.registered, action.event]
      newState.registered = newRegistered;
      return newState;
    }

};
}
  

export default eventReducer;











// import { csrfFetch } from "../store/csrf";

// /* ACTION VERBS */

// const LOAD_EVENTS = "events/LOAD_EVENTS";
// const LOAD_REGISTERED = "events/LOAD_REGISTERED";
// const LOAD_FAVORITES = "events/LOAD_FAVORITES";
// const LOAD_SEARCH_RESULTS = "events/LOAD_SEARCH_RESULTS";
// const REGISTER = "events/REGISTER";
// const FAVORITE = "events/FAVORITE";
// const UNREGISTER = "events/UNREGISTER";
// const UNFAVORITE = "events/UNFAVORITE";

// // /* ACTION CREATORS */

// const loadEvents = (events) => ({
//   type: LOAD_EVENTS,
//   events,
// });

// const loadRegistered = (registered) => ({
//   type: LOAD_REGISTERED,
//   registered,
// });

// const loadFavorites = (favorites) => ({
//   type: LOAD_FAVORITES,
//   favorites,
// });

// const register = (event) => ({
//   type: REGISTER,
//   event,
// });

// const favorite = (event) => ({
//   type: FAVORITE,
//   event,
// });

// const unregister = (eventId) => ({
//   type: UNREGISTER,
//   eventId,
// });

// const unfavorite = (eventId) => ({
//   type: UNFAVORITE,
//   eventId,
// });

// const loadSearchResults = (results) => ({
//   type: LOAD_SEARCH_RESULTS,
//   results,
// });

// /* GET THUNKS */

// //GET all events
// export const getEvents = () => async (dispatch) => {
//   const response = await fetch(`/api/events/`);

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(loadEvents(data.events));
//   }
// };

// // GET registered events
// export const getRegistered = () => async (dispatch) => {
//   const response = await fetch(`/api/events/registrations`);

//   if (response.ok) {
//     const registered = await response.json();
//     dispatch(loadRegistered(registered));
//   }
// };

// // GET favorite events
// export const getFavorites = () => async (dispatch) => {
//   const response = await fetch(`/api/events/favorites`);

//   if (response.ok) {
//     const favorites = await response.json();
//     dispatch(loadFavorites(favorites));
//   }
// };

// /* POST THUNKS */
// // POST add new registration to Registration table
// export const registerEvent = (payload) => async (dispatch) => {
//   const eventId = payload.id;
//   const ticketCount = parseInt(payload.ticketCount, 10);

//   const response = await csrfFetch(`/api/events/${eventId}/registration`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ ticketCount }),
//   });

//   if (response.ok) {
//     const event = await response.json();
//     dispatch(register(event));
//   }
// };

// // POST add new favorite to users favorites
// export const favoriteEvent = (payload) => async (dispatch) => {
//   const eventId = payload.id;

//   const response = await csrfFetch(`/api/events/${eventId}/favorite`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ eventId }),
//   });

//   if (response.ok) {
//     const event = await response.json();
//     dispatch(favorite(event));
//   }
// };

// // POST search for events
// export const searchEvents = (query) => async (dispatch) => {
//   const response = await csrfFetch(`/api/events/search`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query }),
//   });

//   if (response.ok) {
//     const results = await response.json();
//     dispatch(loadSearchResults(results));
//   }
// };

// /* DELETE THUNKS */

// // DELETE registered events
// export const unregisterEvent = (eventId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/events/${eventId}/registration`, {
//     method: "DELETE",
//   });

//   if (response.ok) {
//     const unregisteredId = await response.json();
//     dispatch(unregister(unregisteredId));
//   }
// };

// // DELETE favorite events
// export const unfavoriteEvent = (eventId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/events/${eventId}/favorites`, {
//     method: "DELETE",
//   });

//   if (response.ok) {
//     const unfavoriteId = await response.json();
//     dispatch(unfavorite(unfavoriteId));
//   }
// };

// /* EVENT REDUCER */

// const initialState = {
//   eventsList: [],
//   registered: [],
//   favorites: [],
//   searchResults: [],
// };

// const eventsReducer = (state = initialState, action) => {
//   let newState;

//   switch (action.type) {
//     case LOAD_EVENTS: {
//       const allEvents = {};
//       action.events.forEach((event) => {
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
//         registered: action.registered,
//       };
//     }
//     case LOAD_FAVORITES: {
//       return {
//         ...state,
//         favorites: action.favorites,
//       };
//     }
//     case LOAD_SEARCH_RESULTS: {
//       return {
//         ...state,
//         searchResults: action.results,
//       };
//     }
//     case REGISTER: {
//       newState = { ...state };
//       const newRegistered = [...newState.registered, action.event];
//       newState.registered = newRegistered;
//       return newState;
//     }
//     case FAVORITE: {
//       newState = { ...state };
//       const newFavorites = [...newState.favorites, action.event];
//       newState.favorites = newFavorites;
//       return newState;
//     }
//     case UNREGISTER: {
//       newState = { ...state }; // copy state into new obj

//       // update registered list by filtering for all BUT the unregistered event id
//       const newRegistered = newState.registered.filter(
//         (event) => event.id.toString() !== action.eventId.toString()
//       );

//       newState.registered = newRegistered;
//       return newState;
//     }
//     case UNFAVORITE: {
//       newState = { ...state }; // copy state into new obj

//       // update registered list by filtering for all BUT the unregistered event id
//       const newFavorites = newState.favorites.filter(
//         (event) => event.id.toString() !== action.eventId.toString()
//       );

//       newState.favorites = newFavorites;
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// export default eventsReducer;
