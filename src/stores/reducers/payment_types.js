import { LOAD_PAYMENT_TYPES } from "../actions/payment_types";

const initialState = {
  payment_types: null, 
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAYMENT_TYPES:
      return {
        ...state,
        payment_types: action.payload,
      };
    default:
      return state;
  }
};