import { LOAD_JOBS } from "../actions/jobs";


const initialState = {
  jobs: null, 
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};
