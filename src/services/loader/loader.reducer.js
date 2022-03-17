import { SET_LOADER_STATUS } from "./loader.action";
import initialState from "store/initialState";

export default (state = initialState.loader, { type, payload }) => {
  switch (type) {
    case SET_LOADER_STATUS:
      return payload;
    default:
      return state;
  }
};
