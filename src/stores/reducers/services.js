import { LOAD_SERVICES } from "../actions/services";


const initialState = {
  serviceArray:[], 
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SERVICES:
      return {
        ...state,
        serviceArray: action.payload,
      };
    default:
      return state;
  }
};
