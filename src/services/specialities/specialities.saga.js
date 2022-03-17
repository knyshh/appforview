import { put, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";

import {
  GET_SPECIALITIES,
  GET_SPECIALITIES_SUCCESS,
  GET_SPECIALITIES_FAILURE
} from "./specialities.action";
import { urlLocations } from "routes/urlLocations";
import { isUrlMatch } from "services/router/router.utils";
import { specialitiesRequest } from "./specialities.api";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";

function* getSpecialitiesOnLocationChange({ payload }) {
  try {
    if (
      isUrlMatch(payload, urlLocations.registration) ||
      isUrlMatch(payload, urlLocations.newsletters) ||
      isUrlMatch(payload, urlLocations.settings) ||
      isUrlMatch(payload, urlLocations.doctorInfo) ||
      isUrlMatch(payload, urlLocations.doctor) ||
      // isUrlMatch(payload, urlLocations.patient) ||
      isUrlMatch(payload, urlLocations.onlineClinic) ||
      isUrlMatch(payload, urlLocations.profile) ||
      isUrlMatch(payload, urlLocations.missions)
    ) {
      yield put({ type: GET_SPECIALITIES });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchSpecialities() {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield specialitiesRequest();
    if (status === 200) {
      yield put({
        type: GET_SPECIALITIES_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_SPECIALITIES_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* specialitiesSaga() {
  yield takeEvery(LOCATION_CHANGE, getSpecialitiesOnLocationChange);
  yield takeEvery(GET_SPECIALITIES, fetchSpecialities);
}
