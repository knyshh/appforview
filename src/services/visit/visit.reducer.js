import initialState from "store/initialState";
import { GET_VISIT_SUCCESS } from "./visit.action";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case GET_VISIT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
