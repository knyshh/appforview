import { takeEvery } from "redux-saga/effects";
import { LOGOUT } from "./logout.action";

import { history, urlLocations } from "routes/urlLocations";
import instance from "services/root.api";

function* logout() {
  try {
    const storage = localStorage.getItem("storageTyp");
    yield window[storage].clear();
    yield (instance.defaults.headers.common["Authorization"] = "");
    yield history.push(urlLocations.login);
  } catch (error) {
    console.log(error);
  }
}

export default function* logoutSaga() {
  yield takeEvery(LOGOUT, logout);
}
