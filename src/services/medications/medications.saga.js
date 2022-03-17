import { put, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { urlLocations } from "routes/urlLocations";
import { isUrlMatch } from "services/router/router.utils";
import {
  GET_MEDICATIONS_SUCCESS,
  GET_MEDICATIONS,
  GET_MEDICATIONS_FAILURE
} from "./medications.action";

import { START_LOADER, FINISH_LOADER } from "services/loader/loader.action";
import { getMedicationsRequest } from "./medications.api";

function* getMedicationsOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.visitInfo)) {
      yield put({ type: GET_MEDICATIONS });
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
    const { data, status } = yield getMedicationsRequest();
    if (status === 200) {
      yield put({
        type: GET_MEDICATIONS_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_MEDICATIONS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* medicationsSaga() {
  yield takeEvery(LOCATION_CHANGE, getMedicationsOnLocationChange);
  yield takeEvery(GET_MEDICATIONS, fetchDiagnoses);
}
