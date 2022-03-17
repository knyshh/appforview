import initialState from "store/initialState";
import { SET_FILTERS, RESET_FILTERS } from "./filters.action";

export default (state = initialState.filters, { type, payload }) => {
  switch (type) {
    case SET_FILTERS:
      return {
        ...state,
        [payload.name]: payload.filters
      };
    case RESET_FILTERS:
      return {};
    default:
      return state;
  }
};
