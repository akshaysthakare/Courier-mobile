import { LOAD_BOOKINGS } from "../actions/bookings";

const initialState = {
    bookings: null, // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
      };
    default:
      return state;
  }
};