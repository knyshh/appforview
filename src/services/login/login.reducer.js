import initialState from "store/initialState";
import { LOGIN_SUCCESS } from "./login.action";

export default (state = initialState.user, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
