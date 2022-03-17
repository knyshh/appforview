import { put, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { urlLocations } from "routes/urlLocations";
import { isUrlMatch } from "services/router/router.utils";
import {
  GET_DIAGNOSES_SUCCESS,
  GET_DIAGNOSES,
  GET_DIAGNOSES_FAILURE
} from "./diagnoses.action";

import { START_LOADER, FINISH_LOADER } from "services/loader/loader.action";
import { getDiagnosesRequest } from "./diagnoses.api";

function* getDiagnosesOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.visitInfo)) {
      yield put({ type: GET_DIAGNOSES });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchDiagnoses() {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield getDiagnosesRequest();
    if (status === 200) {
      yield put({
        type: GET_DIAGNOSES_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_DIAGNOSES_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* diagnosesSaga() {
  yield takeEvery(LOCATION_CHANGE, getDiagnosesOnLocationChange);
  yield takeEvery(GET_DIAGNOSES, fetchDiagnoses);
}
