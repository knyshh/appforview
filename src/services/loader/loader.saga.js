import { put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import {
  SET_LOADER_STATUS,
  FINISH_LOADER,
  START_LOADER
} from "./loader.action";

function* startLoader() {
  yield put({ type: SET_LOADER_STATUS, payload: true });
}
function* finishLoader() {
  yield delay(300);
  yield put({ type: SET_LOADER_STATUS, payload: false });
}

export default function* loaderSaga() {
  yield takeEvery(START_LOADER, startLoader);
  yield takeLatest(FINISH_LOADER, finishLoader);
}
