import { put, takeEvery, takeLatest, select, call } from "redux-saga/effects";
import { LOCATION_CHANGE, createMatchSelector } from "connected-react-router";
import pickBy from "lodash/pickBy";
import get from "lodash/get";

import {
  GET_PATIENTS,
  GET_PATIENTS_SUCCESS,
  GET_PATIENTS_FAILURE,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAILURE,
  SAVE_PATIENT_SUCCESS,
  SAVE_PATIENT_FAILURE,
  CREATE_PATIENT,
  SAVE_PATIENT,
  GET_PATIENTS_COUNT,
  GET_PATIENTS_COUNT_SUCCESS,
  GET_PATIENTS_COUNT_FAILURE,
  GET_PATIENT,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_FAILURE,
  SEARCH_PATIENTS_SUCCESS,
  SEARCH_PATIENTS_FAILURE,
  SEARCH_PATIENTS
} from "./patients.action";
import { urlLocations, history } from "routes/urlLocations";
import { isUrlMatch } from "services/router/router.utils";
import { SET_FILTERS } from "services/filters/filters.action";
import {
  createPatientRequest,
  patientsCountRequest,
  patientsRequest,
  savePatientRequest,
  patientRequest
} from "./patients.api";
import { GET_USER_DATA } from "services/user/user.action";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";
import moment from "moment";

function* getPatientsOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.patients)) {
      yield put({ type: GET_PATIENTS });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getPatientOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.patientInfo)) {
      const getMatch = createMatchSelector(urlLocations.patientInfo);
      const state = yield select(state => state);
      const id = get(getMatch(state), "params.id");
      if (!!id) {
        yield put({ type: GET_PATIENT, payload: id });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* clearPatientOnLocationChange({ payload }) {
  try {
    yield put({
      type: GET_PATIENT_SUCCESS,
      payload: {}
    });
  } catch (error) {
    console.log(error);
  }
}

function* fetchPatient({ payload: id }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield patientRequest(id);
    if (status === 200) {
      yield put({
        type: GET_PATIENT_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    yield put({ type: GET_PATIENT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* fetchPatients({ payload }) {
  const params = payload
    ? payload
    : yield select(state => state.filters.patients);

  const filteredParams = pickBy(params);

  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield patientsRequest({
      ...filteredParams,
      ...(!filteredParams._limit && { _limit: 50 }),
      ...(!filteredParams._start && { _start: 0 })
    });
    if (status === 200) {
      yield put({
        type: SET_FILTERS,
        payload: {
          filters: {
            ...filteredParams,
            ...(!filteredParams._limit && { _limit: 50 }),
            ...(!filteredParams._start && { _start: 0 })
          },
          name: "patients"
        }
      });
      yield put({
        type: GET_PATIENTS_COUNT,
        payload: filteredParams
      });
      yield put({
        type: GET_PATIENTS_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_PATIENTS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* savePatient({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const uploadedPic = yield select(state => state.files.patient?.[0]?.id);
    const profilePic = uploadedPic ? uploadedPic : payload.profilePic;

    const { status, data } = yield savePatientRequest({
      data: {
        ...payload,
        profilePic,
        genderPreferredNotToSay: !!payload.genderPreferredNotToSay,
        dateOfBirth: payload.dateOfBirth
          ? moment(payload.dateOfBirth, "DD MMMM YYYY").format("YYYY-MM-DD")
          : null,
        spouseDateOfBirth: payload.spouseDateOfBirth
          ? moment(payload.spouseDateOfBirth, "DD MMMM YYYY").format(
              "YYYY-MM-DD"
            )
          : null
      },
      id: payload.id
    });
    if (status === 200) {
      yield put({
        type: SAVE_PATIENT_SUCCESS
      });
      yield put({
        type: GET_PATIENTS
      });
      yield put({
        type: GET_USER_DATA
      });
      const path = yield select(store => store.router.location.pathname);
      path !== urlLocations.profile && history.push(urlLocations.patients);
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: SAVE_PATIENT_FAILURE });
    console.log(response);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* createPatient({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const profilePic = yield select(state => state.files.patient?.[0]?.id) ||
      null;
    const { status, data } = yield createPatientRequest({
      data: {
        ...payload,
        dateOfBirth: payload.dateOfBirth
          ? moment(payload.dateOfBirth, "DD MMMM YYYY").format("YYYY-MM-DD")
          : null,
        spouseDateOfBirth: payload.spouseDateOfBirth
          ? moment(payload.spouseDateOfBirth, "DD MMMM YYYY").format(
              "YYYY-MM-DD"
            )
          : null,
        profilePic
      }
    });
    if (status === 200) {
      yield put({
        type: CREATE_PATIENT_SUCCESS
      });
      history.push(`${urlLocations.patient}/${data.id}`);
      yield put({
        type: GET_PATIENTS
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: CREATE_PATIENT_FAILURE });
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response.data) || "Error",
      type: "error"
    });
    console.log(response);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* getPatientsCount({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const params = payload
      ? payload
      : yield select(state => state.filters.patients);
    const { _limit, _start, ...filteredParams } = pickBy(params);
    const { status, data } = yield patientsCountRequest({
      ...filteredParams
    });
    if (status === 200) {
      yield put({
        type: GET_PATIENTS_COUNT_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    yield put({ type: GET_PATIENTS_COUNT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* searchPatient({ payload: params }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield patientsRequest(params);
    if (status === 200) {
      yield put({
        type: SEARCH_PATIENTS_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    yield put({ type: SEARCH_PATIENTS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* patientsSaga() {
  yield takeEvery(LOCATION_CHANGE, getPatientsOnLocationChange);
  yield takeEvery(LOCATION_CHANGE, getPatientOnLocationChange);
  yield takeEvery(LOCATION_CHANGE, clearPatientOnLocationChange);
  yield takeLatest(GET_PATIENTS, fetchPatients);
  yield takeLatest(GET_PATIENT, fetchPatient);
  yield takeLatest(CREATE_PATIENT, createPatient);
  yield takeLatest(SAVE_PATIENT, savePatient);
  yield takeLatest(GET_PATIENTS_COUNT, getPatientsCount);
  yield takeLatest(SEARCH_PATIENTS, searchPatient);
}
