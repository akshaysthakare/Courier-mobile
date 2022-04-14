import { LOGIN } from "../actions/auth";

const initialState = {
  token: null, 
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
