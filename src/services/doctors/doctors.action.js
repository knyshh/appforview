import { createAction } from "redux-actions";

export const GET_DOCTORS = "GET_DOCTORS";
export const GET_DOCTORS_SUCCESS = "GET_DOCTORS_SUCCESS";
export const GET_DOCTORS_FAILURE = "GET_DOCTORS_FAILURE";

export const CLEAR_DOCTORS = "CLEAR_DOCTORS";
export const CLEAR_DOCTORS_SUCCESS = "CLEAR_DOCTORS_SUCCESS";
export const CLEAR_DOCTORS_FAILURE = "CLEAR_DOCTORS_FAILURE";

export const GET_DOCTOR = "GET_DOCTOR";
export const GET_DOCTOR_SUCCESS = "GET_DOCTOR_SUCCESS";
export const GET_DOCTOR_FAILURE = "GET_DOCTOR_FAILURE";

export const SEARCH_DOCTOR = "SEARCH_DOCTOR";
export const SEARCH_DOCTOR_SUCCESS = "SEARCH_DOCTOR_SUCCESS";
export const SEARCH_DOCTOR_FAILURE = "SEARCH_DOCTOR_FAILURE";

export const VERIFY_DOCTOR = "VERIFY_DOCTOR";
export const VERIFY_DOCTOR_SUCCESS = "VERIFY_DOCTOR_SUCCESS";
export const VERIFY_DOCTOR_FAILURE = "VERIFY_DOCTOR_FAILURE";

export const SAVE_DOCTOR = "SAVE_DOCTOR";
export const SAVE_DOCTOR_SUCCESS = "SAVE_DOCTOR_SUCCESS";
export const SAVE_DOCTOR_FAILURE = "SAVE_DOCTOR_FAILURE";

export const CREATE_DOCTOR = "CREATE_DOCTOR";
export const CREATE_DOCTOR_SUCCESS = "CREATE_DOCTOR_SUCCESS";
export const CREATE_DOCTOR_FAILURE = "CREATE_DOCTOR_FAILURE";

export const GET_DOCTORS_COUNT = "GET_DOCTORS_COUNT";
export const GET_DOCTORS_COUNT_SUCCESS = "GET_DOCTORS_COUNT_SUCCESS";
export const GET_DOCTORS_COUNT_FAILURE = "GET_DOCTORS_COUNT_FAILURE";

export const getDoctorsAction = createAction(GET_DOCTORS);
export const verifyDoctorAction = createAction(VERIFY_DOCTOR);
export const saveDoctorAction = createAction(SAVE_DOCTOR);
export const createDoctorAction = createAction(CREATE_DOCTOR);
export const searchDoctorAction = createAction(SEARCH_DOCTOR);
export const clearDoctorsAction = createAction(CLEAR_DOCTORS);
