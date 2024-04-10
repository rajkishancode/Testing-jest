const initialState = {
  events: [],
};

export const eventReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      return { ...state, events: [...state.events, action.payload.event] };
    case "CANCEL_EVENT":
      return {
        ...state,
        events: [
          ...state.events.filter(
            (event) => event.name !== action.payload.event.eventName
          ),
        ],
      };
    case "ADD_ATTENDEE":
      const eventToUpdate = state.events.find(
        (event) => event.id === action.payload.id
      );
      if (eventToUpdate)
        return {
          ...state,
          events: [
            ...state.events,
            { ...eventToUpdate, attendee: eventToUpdate.attendee + 1 },
          ],
        };
      break;
    case "REMOVE_ATTENDEE":
      return {
        ...state,
        events: [
          ...state.events.filter((event) => event.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

// {id:1,eventName:"live-concert",attendee :1}
