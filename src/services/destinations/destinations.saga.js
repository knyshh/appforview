import { put, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";

import {
  GET_DESTINATIONS_SUCCESS,
  GET_DESTINATIONS,
  GET_DESTINATIONS_FAILURE
} from "./destinations.action";
import { urlLocations } from "routes/urlLocations";
import { isUrlMatch } from "services/router/router.utils";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { destinationsRequest } from "./destinations.api";

function* getDestinationsOnLocationChange({ payload }) {
  try {
    if (
      isUrlMatch(payload, urlLocations.registration) ||
      isUrlMatch(payload, urlLocations.newsletters) ||
      isUrlMatch(payload, urlLocations.settings) ||
      isUrlMatch(payload, urlLocations.patientInfo) ||
      isUrlMatch(payload, urlLocations.patients) ||
      isUrlMatch(payload, urlLocations.patient) ||
      isUrlMatch(payload, urlLocations.servantInfo) ||
      isUrlMatch(payload, urlLocations.servant) ||
      isUrlMatch(payload, urlLocations.profile) ||
      isUrlMatch(payload, urlLocations.missions)
    ) {
      yield put({ type: GET_DESTINATIONS });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchDestinations() {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield destinationsRequest();
    if (status === 200) {
      yield put({
        type: GET_DESTINATIONS_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_DESTINATIONS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* destinationsSaga() {
  yield takeEvery(LOCATION_CHANGE, getDestinationsOnLocationChange);
  yield takeEvery(GET_DESTINATIONS, fetchDestinations);
}
