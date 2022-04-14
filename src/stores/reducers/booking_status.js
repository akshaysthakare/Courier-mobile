import { LOAD_BOOKING_STATUS } from "../actions/booking_status";

const initialState = {
    booking_status: null, // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKING_STATUS:
      return {
        ...state,
        booking_status: action.payload,
      };
    default:
      return state;
  }
};