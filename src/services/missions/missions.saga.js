import { put, takeEvery, takeLatest, select, call } from "redux-saga/effects";
import { createMatchSelector, LOCATION_CHANGE } from "connected-react-router";
import pickBy from "lodash/pickBy";
import get from "lodash/get";
import moment from "moment";

import {
  ADD_MISSION,
  ADD_MISSION_SUCCESS,
  GET_MISSIONS,
  GET_MISSIONS_FAILURE,
  GET_MISSIONS_SUCCESS,
  NOTIFY_DOCTORS,
  NOTIFY_DOCTORS_FAILURE,
  NOTIFY_DOCTORS_SUCCESS,
  UPDATE_MISSION,
  UPDATE_MISSION_FAILURE,
  UPDATE_MISSION_SUCCESS,
  ADD_MISSION_FAILURE,
  REGISTER_DOCTOR_SUCCESS,
  REGISTER_DOCTOR_FAILURE,
  REGISTER_DOCTOR,
  GET_MISSION_SCHEDULE_SUCCESS,
  GET_MISSION_SCHEDULE_FAILURE,
  GET_MISSION_SCHEDULE,
  ADD_MISSION_VISIT_SUCCESS,
  ADD_MISSION_VISIT_FAILURE,
  ADD_MISSION_VISIT,
  UPDATE_MISSION_VISIT_SUCCESS,
  UPDATE_MISSION_VISIT,
  UPDATE_MISSION_VISIT_FAILURE
} from "./missions.actions";
import { urlLocations } from "../../routes/urlLocations";
import { isUrlMatch } from "../router/router.utils";
import {
  addMissionVisitRequest,
  getMissionScheduleRequest,
  getMissionsRequest
} from "./missions.api";
import { SET_FILTERS } from "../filters/filters.action";
import { FINISH_LOADER, START_LOADER } from "../loader/loader.action";

import { openNotification, prepareErrorMessages } from "utils/notifications";
import { SET_MODAL_STATUS } from "services/modals/modals.action";
import { prepareSpecialities } from "./missions.utils";
import {
  updateMissionRequest,
  notifyDoctorsRequest,
  addMissionRequest,
  registerDoctorRequest,
  updateMissionVisitRequest
} from "./missions.api";

function* getMissionsOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.missions)) {
      yield put({ type: GET_MISSIONS });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getMissionScheduleOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.missionsScheduleInfo)) {
      const getMatch = createMatchSelector(urlLocations.missionsScheduleInfo);
      const state = yield select(state => state);
      const id = get(getMatch(state), "params.id");
      yield !!id && put({ type: GET_MISSION_SCHEDULE, payload: id });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getMissions({ payload }) {
  const params = payload
    ? payload
    : yield select(state => state.filters.missions);
  const filteredParams = pickBy(params);

  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield getMissionsRequest({
      ...filteredParams
    });
    if (status === 200) {
      yield put({
        type: SET_FILTERS,
        payload: {
          filters: {
            ...filteredParams
          },
          name: "missions"
        }
      });
      yield put({
        type: GET_MISSIONS_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_MISSIONS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* addMission({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { items, ...res } = payload;

    const { status, data } = yield addMissionRequest({
      ...(!!items.length && { items: prepareSpecialities(items) }),
      ...res
    });
    if (status === 200) {
      yield put({
        type: ADD_MISSION_SUCCESS
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield put({
        type: GET_MISSIONS
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({ type: ADD_MISSION_FAILURE });
    }
  } catch ({ response }) {
    yield put({ type: ADD_MISSION_FAILURE });
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

function* getMissionSchedule({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield getMissionScheduleRequest(payload);
    if (status === 200) {
      yield put({
        type: GET_MISSION_SCHEDULE_SUCCESS,
        payload: data
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({ type: GET_MISSION_SCHEDULE_FAILURE });
    }
  } catch ({ response }) {
    yield put({ type: GET_MISSION_SCHEDULE_FAILURE });
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

function* updateMission({ payload: mission }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { startDate, endDate, ...res } = mission;
    const { status, data } = yield updateMissionRequest({
      data: {
        startDate: moment(startDate, "DD MMMM YYYY").format("YYYY-MM-DD"),
        endDate: moment(endDate, "DD MMMM YYYY").format("YYYY-MM-DD"),
        ...res
      },
      id: mission.id
    });
    if (status === 200) {
      yield put({
        type: UPDATE_MISSION_SUCCESS
      });
      yield put({
        type: GET_MISSIONS
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield call(openNotification, {
        type: "success",
        message: "Success",
        description: "Mission successfully updated"
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({ type: UPDATE_MISSION_FAILURE });
    }
  } catch ({ response }) {
    yield put({ type: UPDATE_MISSION_FAILURE });
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

function* notifyDoctors({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield notifyDoctorsRequest(payload);
    if (status === 200) {
      yield put({
        type: NOTIFY_DOCTORS_SUCCESS
      });
      yield call(openNotification, {
        type: "success",
        message: "Success",
        description: "Doctors successfully notified"
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({ type: NOTIFY_DOCTORS_FAILURE });
    }
  } catch ({ response }) {
    yield put({ type: NOTIFY_DOCTORS_FAILURE });
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

function* registerDoctor({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield registerDoctorRequest(payload);
    if (status === 200) {
      yield put({
        type: REGISTER_DOCTOR_SUCCESS
      });
      yield put({
        type: GET_MISSIONS
      });
      yield call(openNotification, {
        type: "success",
        message: "Success",
        description: "Doctors successfully registered"
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({ type: REGISTER_DOCTOR_FAILURE });
    }
  } catch ({ response }) {
    yield put({ type: REGISTER_DOCTOR_FAILURE });
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

function* addMissionVisit({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield addMissionVisitRequest(payload);
    if (status === 200) {
      yield put({
        type: ADD_MISSION_VISIT_SUCCESS
      });
      yield put({
        type: GET_MISSION_SCHEDULE,
        payload: payload.missionId
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield call(openNotification, {
        type: "success",
        message: "Success",
        description: "Visit successfully add"
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({ type: ADD_MISSION_VISIT_FAILURE });
    }
  } catch ({ response }) {
    yield put({ type: ADD_MISSION_VISIT_FAILURE });
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

function* updateMissionVisit({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield updateMissionVisitRequest(payload);
    if (status === 200) {
      yield put({
        type: UPDATE_MISSION_VISIT_SUCCESS
      });
      yield put({
        type: GET_MISSION_SCHEDULE,
        payload: payload.missionId
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield call(openNotification, {
        type: "success",
        message: "Success",
        description: "Visit successfully update"
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({ type: UPDATE_MISSION_VISIT_FAILURE });
    }
  } catch ({ response }) {
    yield put({ type: UPDATE_MISSION_VISIT_FAILURE });
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

export default function* missionsSaga() {
  yield takeEvery(LOCATION_CHANGE, getMissionsOnLocationChange);
  yield takeEvery(LOCATION_CHANGE, getMissionScheduleOnLocationChange);
  yield takeLatest(GET_MISSIONS, getMissions);
  yield takeLatest(GET_MISSION_SCHEDULE, getMissionSchedule);
  yield takeLatest(ADD_MISSION, addMission);
  yield takeLatest(UPDATE_MISSION, updateMission);
  yield takeLatest(NOTIFY_DOCTORS, notifyDoctors);
  yield takeLatest(REGISTER_DOCTOR, registerDoctor);
  yield takeLatest(ADD_MISSION_VISIT, addMissionVisit);
  yield takeLatest(UPDATE_MISSION_VISIT, updateMissionVisit);
}
