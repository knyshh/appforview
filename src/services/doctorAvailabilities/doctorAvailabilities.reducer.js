import { GET_DOCTOR_AVAILABILITIES_SUCCESS } from "./doctorAvailabilities.action";
import initialState from "store/initialState";

export default (state = initialState.availabilities, action) => {
  switch (action.type) {
    case GET_DOCTOR_AVAILABILITIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
