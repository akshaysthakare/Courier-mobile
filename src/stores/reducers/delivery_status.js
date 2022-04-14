import { LOAD_DELIVERY_STATUS } from "../actions/delivery_status";

const initialState = {
    delivery_status: null, // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DELIVERY_STATUS:
      return {
        ...state,
        delivery_status: action.payload,
      };
    default:
      return state;
  }
};