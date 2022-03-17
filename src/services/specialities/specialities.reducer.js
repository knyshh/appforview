import { GET_SPECIALITIES_SUCCESS } from "./specialities.action";
import initialState from "store/initialState";

export default (state = initialState.specialities, action) => {
  switch (action.type) {
    case GET_SPECIALITIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
