import {
  GET_PATIENTS_COUNT_SUCCESS,
  GET_PATIENTS_SUCCESS,
  GET_PATIENT_SUCCESS,
  SEARCH_PATIENTS_SUCCESS
} from "./patients.action";
import initialState from "store/initialState";

export default (state = initialState.patients, action) => {
  switch (action.type) {
    case GET_PATIENTS_SUCCESS:
    case SEARCH_PATIENTS_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case GET_PATIENT_SUCCESS:
      return {
        ...state,
        patient: action.payload
      };
    case GET_PATIENTS_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};
