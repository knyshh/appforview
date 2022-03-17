import { GET_DESTINATIONS_SUCCESS } from "./destinations.action";
import initialState from "store/initialState";

export default (state = initialState.destinations, action) => {
  switch (action.type) {
    case GET_DESTINATIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
