import initialState from "store/initialState";
import { GET_DIAGNOSES_SUCCESS } from "./diagnoses.action";

export default (state = initialState.diagnoses, { type, payload }) => {
  switch (type) {
    case GET_DIAGNOSES_SUCCESS:
      return payload;
    default:
      return state;
  }
};
