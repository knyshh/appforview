import initialState from "../../store/initialState";
import { GET_MEDICATIONS_SUCCESS } from "./medications.action";

export default (state = initialState.medications, { type, payload }) => {
  switch (type) {
    case GET_MEDICATIONS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
