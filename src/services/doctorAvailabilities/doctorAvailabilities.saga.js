import { put, select, takeEvery, call } from "redux-saga/effects";
import moment from "moment";

import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import {
  ADD_DOCTOR_AVAILABILITIES,
  ADD_DOCTOR_AVAILABILITIES_FAILURE,
  ADD_DOCTOR_AVAILABILITIES_SUCCESS,
  ADD_DOCTOR_AVAILABILITIES_VISIT,
  ADD_DOCTOR_AVAILABILITIES_VISIT_FAILURE,
  ADD_DOCTOR_AVAILABILITIES_VISIT_SUCCESS,
  EDIT_DOCTOR_AVAILABILITIES_VISIT_FAILURE,
  EDIT_DOCTOR_AVAILABILITIES_VISIT_SUCCESS,
  EDIT_DOCTOR_AVAILABILITIES_VISIT,
  GET_DOCTOR_AVAILABILITIES,
  GET_DOCTOR_AVAILABILITIES_FAILURE,
  GET_DOCTOR_AVAILABILITIES_SUCCESS,
  REMOVE_DOCTOR_AVAILABILITIES_VISIT,
  REMOVE_DOCTOR_AVAILABILITIES_VISIT_FAILURE,
  REMOVE_DOCTOR_AVAILABILITIES_VISIT_SUCCESS,
  EDIT_DOCTOR_AVAILABILITY,
  EDIT_DOCTOR_AVAILABILITY_FAILURE,
  EDIT_DOCTOR_AVAILABILITY_SUCCESS
} from "./doctorAvailabilities.action";
import {
  addDoctorAvailabilitiesRequest,
  addDoctorAvailabilitiesVisitRequest,
  editDoctorAvailabilitiesVisitRequest,
  getDoctorAvailabilitiesRequest,
  removeDoctorAvailabilitiesVisitRequest,
  updateDoctorAvailabilityRequest
} from "./doctorAvailabilities.api";
import { SET_MODAL_STATUS } from "services/modals/modals.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* getDoctorAvailabilities({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const params = payload
      ? payload
      : yield select(state => state.filters.availability);
    const { status, data } = yield getDoctorAvailabilitiesRequest(params);
    if (status === 200) {
      yield put({
        type: GET_DOCTOR_AVAILABILITIES_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    yield put({ type: GET_DOCTOR_AVAILABILITIES_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* addDoctorAvailabilities({ payload }) {
  const { date, from, to, repeatUntil, repeat, ...res } = payload;
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield addDoctorAvailabilitiesRequest({
      from: moment(`${date}T${from}`, "YYYY-MM-DD HH:mm:ss", "UTC").format(),
      to: moment(`${date}T${to}`, "YYYY-MM-DD HH:mm:ss", "UTC").format(),
      ...(repeatUntil && {
        repeatUntil: moment(repeatUntil, "YYYY-MM-DD", "UTC").format()
      }),
      repeat,
      ...res
    });
    if (status === 200) {
      yield put({
        type: ADD_DOCTOR_AVAILABILITIES_SUCCESS,
        payload: data
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield put({
        type: GET_DOCTOR_AVAILABILITIES
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: ADD_DOCTOR_AVAILABILITIES_FAILURE });
    console.log(response);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response?.data) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* addDoctorAvailabilityVisit({ payload: { id, ...res } }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield addDoctorAvailabilitiesVisitRequest({
      id,
      data: res
    });
    if (status === 200) {
      yield put({
        type: ADD_DOCTOR_AVAILABILITIES_VISIT_SUCCESS,
        payload: data
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield put({
        type: GET_DOCTOR_AVAILABILITIES
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: ADD_DOCTOR_AVAILABILITIES_VISIT_FAILURE });
    console.log(response);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response?.data) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* editDoctorAvailabilityVisit({ payload: { id, ...res } }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield editDoctorAvailabilitiesVisitRequest({
      id,
      data: {
        res,
        from: moment(res.from, "DD-MM-YYYY HH:mm:ss", "UTC").format(),
        to: moment(res.to, "DD-MM-YYYY HH:mm:ss", "UTC").format()
      }
    });
    if (status === 200) {
      yield put({
        type: EDIT_DOCTOR_AVAILABILITIES_VISIT_SUCCESS,
        payload: data
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield put({
        type: GET_DOCTOR_AVAILABILITIES
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch (error) {
    yield put({ type: EDIT_DOCTOR_AVAILABILITIES_VISIT_FAILURE });
    console.log(error);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(error.response?.data) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* editDoctorAvailability({ payload: { id, ...res } }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield updateDoctorAvailabilityRequest({
      id,
      data: res
    });
    if (status === 200) {
      yield put({
        type: EDIT_DOCTOR_AVAILABILITY_SUCCESS
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield put({
        type: GET_DOCTOR_AVAILABILITIES
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: EDIT_DOCTOR_AVAILABILITY_FAILURE });
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response?.data) || "Error",
      type: "error"
    });
    console.log(response);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* removeDoctorAvailabilityVisit({ payload: id }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield removeDoctorAvailabilitiesVisitRequest(id);
    if (status === 200) {
      yield put({
        type: REMOVE_DOCTOR_AVAILABILITIES_VISIT_SUCCESS
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield put({
        type: GET_DOCTOR_AVAILABILITIES
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch (error) {
    yield put({ type: REMOVE_DOCTOR_AVAILABILITIES_VISIT_FAILURE });
    console.log(error);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(error.response?.data) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* doctorAvailabilitySaga() {
  yield takeEvery(GET_DOCTOR_AVAILABILITIES, getDoctorAvailabilities);
  yield takeEvery(EDIT_DOCTOR_AVAILABILITY, editDoctorAvailability);
  yield takeEvery(ADD_DOCTOR_AVAILABILITIES, addDoctorAvailabilities);
  yield takeEvery(ADD_DOCTOR_AVAILABILITIES_VISIT, addDoctorAvailabilityVisit);
  yield takeEvery(
    EDIT_DOCTOR_AVAILABILITIES_VISIT,
    editDoctorAvailabilityVisit
  );
  yield takeEvery(
    REMOVE_DOCTOR_AVAILABILITIES_VISIT,
    removeDoctorAvailabilityVisit
  );
}
