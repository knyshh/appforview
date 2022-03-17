import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const urlLocations = {
  login: "/",
  registration: "/registration",
  dashboard: "/dashboard",
  newsletters: "/newsletters",
  settings: "/settings/:userType?",
  settingsDoctors: "/settings/doctors",
  settingsServants: "/settings/servants",
  servant: "/servant",
  doctor: "/doctor",
  patient: "/patient",
  patients: "/patients",
  servantInfo: "/servant/:id?",
  doctorInfo: "/doctor/:id?",
  patientInfo: "/patient/:id?",
  profile: "/profile",
  visit: "/visit",
  visitInfo: "/visit/:id?",
  missionsSchedule: "/missions-schedule",
  missionsScheduleInfo: "/missions-schedule/:id?",
  onlineClinic: "/online-clinic",
  missions: "/missions",
  schedule: "/schedule",
  scheduleInfo: "/schedule:id?",
  resetPassword: "/reset-password"

};

export const userRoleMainPath = {
  doctor: urlLocations.dashboard,
  servant: urlLocations.dashboard,
  patient: urlLocations.profile,
  admin: urlLocations.dashboard
};
