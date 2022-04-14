import { LOAD_PACKAGER_STATUS } from "../actions/packager_status";

const initialState = {
    packager_status: null, 
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PACKAGER_STATUS:
      return {
        ...state,
        packager_status: action.payload,
      };
    default:
      return state;
  }
};