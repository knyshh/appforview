import { put, takeEvery, call, select } from "redux-saga/effects";

import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./login.action";
import { STORAGE_TYPE } from "constants/common";
import instance from "services/root.api";
import { loginRequest } from "./login.api";
import { history, urlLocations, userRoleMainPath } from "routes/urlLocations";
import { START_LOADER, FINISH_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";
import { SET_MODAL_STATUS } from "services/modals/modals.action";
import { MODALS_IDS } from "constants/common";

function* login({ payload: { identifier, password, rememberMe = false } }) {
  const lowerCaseIdentifier = identifier.trim().toLowerCase();
  try {
    yield put({
      type: START_LOADER
    });
    const { response: { data } = {}, response } = yield call(loginRequest, {
      identifier: lowerCaseIdentifier,
      password
    });

    if (response.status === 200) {
      localStorage.setItem(
        "storageTyp",
        rememberMe ? STORAGE_TYPE.LOCAL_STORAGE : STORAGE_TYPE.SESSION_STORAGE
      );
      const storage = localStorage.getItem("storageTyp");
      window[storage].setItem("jwt", response.data.jwt);
      instance.defaults.headers.common["Authorization"] = `Bearer ${
        response.data.jwt
      }`;

      const hash = yield select(state => state.router.location.hash);

      if (hash === "#back") {
        history.goBack();
      } else {
        history.push(userRoleMainPath[data.user.userType]);
      }

      yield put({
        type: LOGIN_SUCCESS
      });
    } else {
      const errorCode = data?.data?.[0]?.messages?.[0]?.id;

      if (errorCode === "Auth.form.error.confirmed") {
        yield put({
          type: SET_MODAL_STATUS,
          payload: MODALS_IDS.RESEND_EMAIL
        });
      }
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
      yield put({
        type: LOGIN_FAILURE
      });
    }
  } catch (error) {
    yield call(openNotification, {
      message: "Error",
      description: error || "Error",
      type: "error"
    });
    yield put({ type: LOGIN_FAILURE });

    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN, login);
}
