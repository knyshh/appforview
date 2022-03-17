import { put, takeEvery } from "redux-saga/effects";
import { SET_MODAL_STATUS } from "./modals.action";
import { LOCATION_CHANGE } from "connected-react-router";

function* closeModalsOnLocationChange() {
  try {
    yield put({ type: SET_MODAL_STATUS, payload: null });
  } catch (error) {
    console.log(error);
  }
}

export default function* modalsSaga() {
  yield takeEvery(LOCATION_CHANGE, closeModalsOnLocationChange);
}
