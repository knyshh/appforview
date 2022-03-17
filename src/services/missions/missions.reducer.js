import {
  GET_MISSIONS_SUCCESS,
  GET_MISSION_SCHEDULE_SUCCESS
} from "./missions.actions";
import initialState from "store/initialState";

export default (state = initialState.missions, action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case GET_MISSION_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: action.payload
      };
    default:
      return state;
  }
};
