import { put, takeEvery, takeLatest, select, call } from "redux-saga/effects";
import { createMatchSelector, LOCATION_CHANGE } from "connected-react-router";
import pickBy from "lodash/pickBy";
import get from "lodash/get";

import {
  GET_DOCTORS,
  GET_DOCTORS_FAILURE,
  GET_DOCTORS_SUCCESS,
  SAVE_DOCTOR,
  SAVE_DOCTOR_SUCCESS,
  SAVE_DOCTOR_FAILURE,
  VERIFY_DOCTOR,
  VERIFY_DOCTOR_FAILURE,
  VERIFY_DOCTOR_SUCCESS,
  CREATE_DOCTOR,
  CREATE_DOCTOR_FAILURE,
  CREATE_DOCTOR_SUCCESS,
  GET_DOCTORS_COUNT_SUCCESS,
  GET_DOCTORS_COUNT_FAILURE,
  GET_DOCTORS_COUNT,
  GET_DOCTOR,
  GET_DOCTOR_SUCCESS,
  GET_DOCTOR_FAILURE,
  SEARCH_DOCTOR_SUCCESS,
  SEARCH_DOCTOR_FAILURE,
  SEARCH_DOCTOR
} from "./doctors.action";
import { urlLocations, history } from "routes/urlLocations";
import { isUrlMatch } from "services/router/router.utils";
import {
  doctorsRequest,
  verifyDoctorRequest,
  saveDoctorRequest,
  createDoctorRequest,
  doctorsCountRequest,
  doctorRequest
} from "./doctors.api";
import { SET_FILTERS } from "services/filters/filters.action";
import { GET_USER_DATA } from "services/user/user.action";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* getDoctorsOnLocationChange({ payload }) {
  try {
    if (
      isUrlMatch(payload, urlLocations.settings)
      /*||
      isUrlMatch(payload, urlLocations.patientInfo)*/
    ) {
      yield put({ type: GET_DOCTORS });
    }
  } catch (error) {
    console.log(error);
  }
}

function* clearDoctorOnLocationChange({ payload }) {
  try {
    yield put({
      type: GET_DOCTOR_SUCCESS,
      payload: {}
    });
  } catch (error) {
    console.log(error);
  }
}

function* getDoctorOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.doctorInfo)) {
      const getMatch = createMatchSelector(urlLocations.doctorInfo);
      const state = yield select(state => state);
      const id = get(getMatch(state), "params.id");
      yield !!id && put({ type: GET_DOCTOR, payload: id });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchDoctor({ payload: id }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield doctorRequest(id);
    if (status === 200) {
      yield put({
        type: GET_DOCTOR_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_DOCTOR_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* fetchDoctors({ payload }) {
  const params = payload
    ? payload
    : yield select(state => state.filters.doctors);
  const filteredParams = pickBy(params);

  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield doctorsRequest({
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
          name: "doctors"
        }
      });
      yield put({
        type: GET_DOCTORS_COUNT,
        payload: filteredParams
      });
      yield put({
        type: GET_DOCTORS_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_DOCTORS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* verifyDoctor({ payload: id }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield verifyDoctorRequest(id);
    if (status === 200) {
      yield put({
        type: VERIFY_DOCTOR_SUCCESS
      });
      yield put({
        type: GET_DOCTORS
      });
      yield put({
        type: GET_DOCTOR,
        payload: id
      });
      history.push(urlLocations.settingsDoctors);
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: VERIFY_DOCTOR_FAILURE });
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

function* saveDoctor({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const uploadedPic = yield select(state => state.files.doctor?.[0]?.id);
    const profilePic = uploadedPic ? uploadedPic : payload.profilePic;
    const documents = yield select(state => state.documents);
    const { status, data } = yield saveDoctorRequest({
      data: { ...payload, profilePic, documents },
      id: payload.id
    });

    if (status === 200) {
      yield put({
        type: SAVE_DOCTOR_SUCCESS
      });
      yield call(openNotification, {
        message: "Success",
        description: "Profile successfully saved",
        type: "success"
      });
      yield put({
        type: GET_DOCTORS
      });
      yield put({
        type: GET_USER_DATA
      });
      const path = yield select(store => store.router.location.pathname);
      path !== urlLocations.profile
        ? history.push(urlLocations.settingsDoctors)
        : history.goBack();
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: SAVE_DOCTOR_FAILURE });
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

function* createDoctor({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const profilePic = yield select(state => state.files.doctor?.[0]?.id) ||
      null;
    const documents = yield select(state => state.documents);
    const { status, data } = yield createDoctorRequest({
      data: { ...payload, documents, profilePic }
    });
    if (status === 200) {
      yield put({
        type: CREATE_DOCTOR_SUCCESS
      });
      yield history.goBack();
      // history.push(`${urlLocations.doctor}/${data.doctorProfile.id}`);
      yield put({
        type: GET_DOCTORS
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: CREATE_DOCTOR_FAILURE });
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

function* getDoctorsCount({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const params = payload
      ? payload
      : yield select(state => state.filters.doctors);
    const { _limit, _start, ...filteredParams } = pickBy(params);
    const { status, data } = yield doctorsCountRequest({
      ...filteredParams
    });
    if (status === 200) {
      yield put({
        type: GET_DOCTORS_COUNT_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    yield put({ type: GET_DOCTORS_COUNT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* searchDoctor({ payload: params }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield doctorsRequest(params);
    if (status === 200) {
      yield put({
        type: SEARCH_DOCTOR_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    yield put({ type: SEARCH_DOCTOR_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* doctorsSaga() {
  yield takeEvery(LOCATION_CHANGE, getDoctorsOnLocationChange);
  yield takeEvery(LOCATION_CHANGE, getDoctorOnLocationChange);
  yield takeEvery(LOCATION_CHANGE, clearDoctorOnLocationChange);
  yield takeLatest(GET_DOCTORS, fetchDoctors);
  yield takeLatest(GET_DOCTOR, fetchDoctor);
  yield takeEvery(VERIFY_DOCTOR, verifyDoctor);
  yield takeEvery(SAVE_DOCTOR, saveDoctor);
  yield takeEvery(CREATE_DOCTOR, createDoctor);
  yield takeEvery(SEARCH_DOCTOR, searchDoctor);
  yield takeEvery(GET_DOCTORS_COUNT, getDoctorsCount);
}
