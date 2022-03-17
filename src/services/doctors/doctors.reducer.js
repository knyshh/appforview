import {
  GET_DOCTORS_SUCCESS,
  GET_DOCTORS_COUNT_SUCCESS,
  GET_DOCTOR_SUCCESS,
  SEARCH_DOCTOR_SUCCESS,
  CLEAR_DOCTORS
} from "./doctors.action";
import initialState from "store/initialState";

export default (state = initialState.doctors, action) => {
  switch (action.type) {
    case GET_DOCTORS_SUCCESS:
    case SEARCH_DOCTOR_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case GET_DOCTOR_SUCCESS:
      return {
        ...state,
        doctor: action.payload
      };
    case GET_DOCTORS_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload
      };
    case CLEAR_DOCTORS:
      return {
        ...state,
        list: {},
        count: null
      };
    default:
      return state;
  }
};
