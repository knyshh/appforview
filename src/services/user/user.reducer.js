import initialState from "store/initialState";
import { GET_USER_DATA_SUCCESS, UPDATE_PROFILE_SUCCESS } from "./user.action";

export default (state = initialState.user, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
    case GET_USER_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
