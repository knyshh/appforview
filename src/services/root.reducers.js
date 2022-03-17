import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

import { history } from "routes/urlLocations";
import { LOGOUT } from "./logout/logout.action";
import initialState from "store/initialState";
import fileReducer from "./file/file.reducer";
import specialitiesReducer from "./specialities/specialities.reducer";
import destinationsReducer from "./destinations/destinations.reducer";
import newsLettersReducer from "./newsletters/newsletters.reducer";
import modalsReducer from "./modals/modals.reducer";
import userReducer from "./user/user.reducer";
import doctorsReducer from "./doctors/doctors.reducer";
import servantsReducer from "./servants/servants.reducer";
import filtersReducer from "./filters/filters.reducer";
import documentsReducer from "./documents/documents.reducer";
import patientsReducer from "./patients/patients.reducer";
import visitReducer from "./visit/visit.reducer";
import loaderReducer from "./loader/loader.reducer";
import diagnosesReducer from "./diagnoses/diagnoses.reducer";
import medicationsReducer from "./medications/medications.reducer";
import testResultsReducer from "./testResults/testResults.reducer";
import doctorAvailabilityReducer from "./doctorAvailabilities/doctorAvailabilities.reducer";
import missionsReducer from "./missions/missions.reducer";

const appReducer = combineReducers({
  specialities: specialitiesReducer,
  destinations: destinationsReducer,
  files: fileReducer,
  modals: modalsReducer,
  user: userReducer,
  newsletters: newsLettersReducer,
  doctors: doctorsReducer,
  patients: patientsReducer,
  servants: servantsReducer,
  filters: filtersReducer,
  documents: documentsReducer,
  visit: visitReducer,
  loader: loaderReducer,
  diagnoses: diagnosesReducer,
  medications: medicationsReducer,
  testResults: testResultsReducer,
  availabilities: doctorAvailabilityReducer,
  missions: missionsReducer,
  form: formReducer,
  router: connectRouter(history)
});

const rootReducers = (state, action) => {
  if (action.type === LOGOUT) {
    state = initialState;
  }
  return appReducer(state, action);
};

export default rootReducers;
