import { csrfFetch } from "./csrf";
const ADD_ONE = "events/newevent";
const REMOVE_EVENT = "events/removeEvent";
const LOAD_REGISTERED = "events/LOAD_REGISTERED";
const REGISTER = "events/REGISTER";
const UNREGISTER = 'events/UNREGISTER';

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
const unregister = (eventId) => ({
  type: UNREGISTER,
  eventId,
});

const loadRegistered = (registered) => ({
  type: LOAD_REGISTERED,
  registered,
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
  console.log(payload);
  const res = await csrfFetch(`/api/events/${payload.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    const editedEvent = await res.json();
    dispatch(addOne(editedEvent));
    return editedEvent;
  }
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
  console.log("Hellllo worlddddddddd")

  const response = await csrfFetch(`/api/events/registration/${eventId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ticketNum }),
  });

  if (response.ok) {
    const event = await response.json();
    console.log({event})
    // dispatch(register(event));
  }
};

export const getRegistered = () => async (dispatch) => {
  const response = await fetch(`/api/events/registrations`);

  if (response.ok) {
    const registered = await response.json();
    dispatch(loadRegistered(registered));
  }
};

// delete reg event
export const unregisterEvent = (eventId) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/registration/${eventId}`, {
    method: "DELETE",
  });
  // if (response.ok) {
  //   const unregisteredId = await response.json();
  //   dispatch(unregister(unregisteredId));
  // }
};





const initialState = { list: [], registered: [] };
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
    case LOAD_REGISTERED: {
      return {
        ...state,
        registered: action.registered,
      };
    }

    case REGISTER: {
      newState = { ...state };
      const newRegistered = [...newState.registered, action.event];
      newState.registered = newRegistered;
      return newState;
    }
  };
}
  

export default eventReducer;





