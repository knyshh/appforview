import { createAction } from "redux-actions";

export const GET_DOCTOR_AVAILABILITIES = "GET_DOCTOR_AVAILABILITIES";
export const GET_DOCTOR_AVAILABILITIES_SUCCESS =
  "GET_DOCTOR_AVAILABILITIES_SUCCESS";
export const GET_DOCTOR_AVAILABILITIES_FAILURE =
  "GET_DOCTOR_AVAILABILITIES_FAILURE";

export const ADD_DOCTOR_AVAILABILITIES = "ADD_DOCTOR_AVAILABILITIES";
export const ADD_DOCTOR_AVAILABILITIES_SUCCESS =
  "ADD_DOCTOR_AVAILABILITIES_SUCCESS";
export const ADD_DOCTOR_AVAILABILITIES_FAILURE =
  "ADD_DOCTOR_AVAILABILITIES_FAILURE";

export const EDIT_DOCTOR_AVAILABILITY = "EDIT_DOCTOR_AVAILABILITY";
export const EDIT_DOCTOR_AVAILABILITY_SUCCESS =
  "EDIT_DOCTOR_AVAILABILITY_SUCCESS";
export const EDIT_DOCTOR_AVAILABILITY_FAILURE =
  "EDIT_DOCTOR_AVAILABILITY_FAILURE";

export const ADD_DOCTOR_AVAILABILITIES_VISIT =
  "ADD_DOCTOR_AVAILABILITIES_VISIT";
export const ADD_DOCTOR_AVAILABILITIES_VISIT_SUCCESS =
  "ADD_DOCTOR_AVAILABILITIES_VISIT_SUCCESS";
export const ADD_DOCTOR_AVAILABILITIES_VISIT_FAILURE =
  "ADD_DOCTOR_AVAILABILITIES_VISIT_FAILURE";

export const EDIT_DOCTOR_AVAILABILITIES_VISIT =
  "EDIT_DOCTOR_AVAILABILITIES_VISIT";
export const EDIT_DOCTOR_AVAILABILITIES_VISIT_SUCCESS =
  "EDIT_DOCTOR_AVAILABILITIES_VISIT_SUCCESS";
export const EDIT_DOCTOR_AVAILABILITIES_VISIT_FAILURE =
  "EDIT_DOCTOR_AVAILABILITIES_VISIT_FAILURE";

export const REMOVE_DOCTOR_AVAILABILITIES_VISIT =
  "REMOVE_DOCTOR_AVAILABILITIES_VISIT";
export const REMOVE_DOCTOR_AVAILABILITIES_VISIT_SUCCESS =
  "REMOVE_DOCTOR_AVAILABILITIES_VISIT_SUCCESS";
export const REMOVE_DOCTOR_AVAILABILITIES_VISIT_FAILURE =
  "REMOVE_DOCTOR_AVAILABILITIES_VISIT_FAILURE";

export const getDoctorAvailabilitiesAction = createAction(
  GET_DOCTOR_AVAILABILITIES
);

export const addDoctorAvailabilitiesAction = createAction(
  ADD_DOCTOR_AVAILABILITIES
);

export const editDoctorAvailabilitiesVisitAction = createAction(
  EDIT_DOCTOR_AVAILABILITIES_VISIT
);

export const addDoctorAvailabilitiesVisitAction = createAction(
  ADD_DOCTOR_AVAILABILITIES_VISIT
);

export const removeDoctorAvailabilitiesVisitAction = createAction(
  REMOVE_DOCTOR_AVAILABILITIES_VISIT
);

export const editDoctorAvailability = createAction(EDIT_DOCTOR_AVAILABILITY);
