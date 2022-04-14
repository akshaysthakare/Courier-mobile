import { LOAD_JOB_TYPES } from "../actions/job_types";

const initialState = {
  job_types: null, // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOB_TYPES:
      return {
        ...state,
        job_types: action.payload,
      };
    default:
      return state;
  }
};