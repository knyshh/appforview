import { all } from "redux-saga/effects";

import fileUploadSaga from "./file/file.saga";
import specialitiesSaga from "./specialities/specialities.saga";
import destinationsSaga from "./destinations/destinations.saga";
import registrationSaga from "./registration/registration.saga";
import loginSaga from "./login/login.saga";
import newslettersSaga from "./newsletters/newsletters.saga";
import userSaga from "./user/user.saga";
import logoutSaga from "./logout/logout.saga";
import doctorsSaga from "./doctors/doctors.saga";
import servantsSaga from "./servants/servants.saga";
import documentsUploadSaga from "./documents/documents.saga";
import patientsSaga from "./patients/patients.saga";
import visitSaga from "./visit/visit.saga";
import loaderSaga from "./loader/loader.saga";
import diagnosesSaga from "./diagnoses/diagnoses.saga";
import medicationsSaga from "./medications/medications.saga";
import testResultsSaga from "./testResults/testResults.saga";
import doctorAvailabilitySaga from "./doctorAvailabilities/doctorAvailabilities.saga";
import modalsSaga from "./modals/modals.saga";
import missionsSaga from "./missions/missions.saga";
import passwordSaga from "./password/password.saga";
import filtersSaga from "./filters/filters.saga";
import resendEmailSaga from "services/resendEmail/resendEmail.saga";

export default function* rootSaga() {
  yield all([
    fileUploadSaga(),
    resendEmailSaga(),
    filtersSaga(),
    specialitiesSaga(),
    destinationsSaga(),
    registrationSaga(),
    loginSaga(),
    newslettersSaga(),
    userSaga(),
    logoutSaga(),
    doctorsSaga(),
    servantsSaga(),
    documentsUploadSaga(),
    patientsSaga(),
    visitSaga(),
    loaderSaga(),
    diagnosesSaga(),
    medicationsSaga(),
    testResultsSaga(),
    doctorAvailabilitySaga(),
    modalsSaga(),
    missionsSaga(),
    passwordSaga()
  ]);
}
