// export const API_PATH = "http://34.243.248.144:1339";
const { REACT_APP_API_ENV } = process.env;

export const API_PATH = {
  staging: "https://api-staging.healingambassadors.net",
  prod: "https://api.healingambassadors.net"
}[REACT_APP_API_ENV || "staging"];

export const STORAGE_TYPE = {
  LOCAL_STORAGE: "localStorage",
  SESSION_STORAGE: "sessionStorage"
};

export const USER_ROLES = {
  DOCTOR: "doctor",
  SERVANT: "servant",
  PATIENT: "patient",
  ADMIN: "admin"
};

export const PROFILE_NAME = {
  doctor: "doctorProfile",
  servant: "servantProfile",
  patient: "patientProfile"
};

export const MODALS_IDS = {
  NEWSLETTERS_MODAL: "NEWSLETTERS_MODAL",
  TEST_RESULTS_MODAL: "TEST_RESULTS_MODAL",
  ADD_AVAILABILITY_MODAL: "ADD_AVAILABILITY_MODAL",
  ADD_VISIT_MODAL: "ADD_VISIT_MODAL",
  EDIT_VISIT_MODAL: "EDIT_VISIT_MODAL",
  VIEW_VISIT_MODAL: "VIEW_VISIT_MODAL",
  ADD_NEW_MISSION: "ADD_NEW_MISSION",
  ADMIN_MISSION_DETAILS: "ADMIN_MISSION_DETAILS",
  DOCTOR_MISSION_DETAILS: "DOCTOR_MISSION_DETAILS",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  MISSION_SCHEDULE_VISIT: "MISSION_SCHEDULE_VISIT",
  DOCTOR_AVAILABILITY_EDIT: "DOCTOR_AVAILABILITY_EDIT",
  RESEND_EMAIL: "RESEND_EMAIL"
};

export const COLUMN_ORDER = {
  ascend: "ASC",
  descend: "DESC"
};
