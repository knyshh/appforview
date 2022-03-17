import {
  GET_SERVANTS_COUNT_SUCCESS,
  GET_SERVANTS_SUCCESS,
  GET_SERVANT_SUCCESS
} from "./servants.action";
import initialState from "store/initialState";

export default (state = initialState.servants, action) => {
  switch (action.type) {
    case GET_SERVANTS_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case GET_SERVANT_SUCCESS:
      return {
        ...state,
        servant: action.payload
      };
    case GET_SERVANTS_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};
