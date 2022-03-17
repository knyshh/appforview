import { put, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { RESET_FILTERS } from "./filters.action";

function* clearFiltersOnLocationChange() {
  try {
    yield put({
      type: RESET_FILTERS
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* filtersSaga() {
  yield takeEvery(LOCATION_CHANGE, clearFiltersOnLocationChange);
}
