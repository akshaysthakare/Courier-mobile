import { LOAD_PACKAGERS } from "../actions/packagers";

const initialState = {
  packagers: null, 
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PACKAGERS:
      return {
        ...state,
        packagers: action.payload,
      };
    default:
      return state;
  }
};