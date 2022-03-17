import { SET_MODAL_STATUS } from "./modals.action";
import initialState from "store/initialState";

export default (state = initialState.modals, action) => {
  switch (action.type) {
    case SET_MODAL_STATUS:
      return action.payload;
    default:
      return state;
  }
};
