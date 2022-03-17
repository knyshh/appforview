import { put, takeEvery, call, select } from "redux-saga/effects";

import {
  REGISTRATION,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS
} from "./registration.action";
import { registrationRequest } from "./registration.api";
import { urlLocations, history } from "routes/urlLocations";
import { START_LOADER, FINISH_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* registration({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const lowerCaseEmail = payload.email?.trim()?.toLowerCase() || "";
    const profilePic = yield select(
      state => state.files[payload.userType]?.[0]?.id
    );
    if (!profilePic) {
      yield call(openNotification, {
        message: "Error",
        description: "Please upload your photo",
        type: "error"
      });
    } else {
      const { response: { data } = {}, response } = yield call(
        registrationRequest,
        {
          ...payload,
          profilePic,
          username: lowerCaseEmail,
          email: lowerCaseEmail
        }
      );

      if (response.status === 200) {
        yield put({
          type: REGISTRATION_SUCCESS
        });
        history.push(urlLocations.login);
      } else {
        yield put({
          type: REGISTRATION_FAILURE
        });
        yield call(openNotification, {
          message: "Error",
          description: prepareErrorMessages(data) || "Error",
          type: "error"
        });
      }
    }
  } catch (error) {
    yield put({ type: REGISTRATION_FAILURE });
    console.log("error", error);
    yield call(openNotification, {
      message: "Error",
      description: error || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* registrationSaga() {
  yield takeEvery(REGISTRATION, registration);
}
