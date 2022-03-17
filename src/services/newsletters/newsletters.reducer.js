import { GET_NEWSLETTERS_SUCCESS } from "./newsletters.action";
import initialState from "store/initialState";

export default (state = initialState.newsletters, action) => {
  switch (action.type) {
    case GET_NEWSLETTERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
