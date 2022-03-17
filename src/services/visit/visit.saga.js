import { call, put, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { matchPath } from "react-router";

import {
  GET_VISIT,
  GET_VISIT_FAILURE,
  GET_VISIT_SUCCESS,
  UPDATE_VISIT,
  UPDATE_VISIT_FAILURE,
  UPDATE_VISIT_SUCCESS
} from "./visit.action";
import { getVisitRequest, updateVisitRequest } from "./visit.api";
import { isUrlMatch } from "services/router/router.utils";
import { urlLocations } from "routes/urlLocations";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { preparePrescriptions } from "./visit.utils";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* getVisitsOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.visitInfo)) {
      const id = matchPath(payload.location.pathname, {
        path: urlLocations.visitInfo,
        exact: true
      }).params?.id;
      yield put({ type: GET_VISIT, payload: { id } });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchVisitData({ payload: { id } }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield getVisitRequest(id);
    if (status === 200) {
      yield put({
        type: GET_VISIT_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_VISIT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* updateVisit({ payload }) {
  const { prescription, ...res } = payload;
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield updateVisitRequest({
      ...res,
      prescription: preparePrescriptions(prescription)
    });
    if (status === 200) {
      yield put({
        type: UPDATE_VISIT_SUCCESS
      });
      yield put({
        type: GET_VISIT,
        payload: { id: data.id }
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch (error) {
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(error.response?.data) || "Error",
      type: "error"
    });
    yield put({ type: UPDATE_VISIT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* visitSaga() {
  yield takeEvery(LOCATION_CHANGE, getVisitsOnLocationChange);
  yield takeEvery(GET_VISIT, fetchVisitData);
  yield takeEvery(UPDATE_VISIT, updateVisit);
}
