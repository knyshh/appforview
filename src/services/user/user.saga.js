import { call, put, select, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import isEmpty from "lodash/isEmpty";

import {
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS
} from "./user.action";

import { userRequest, userUpdateRequest } from "./user.api";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* getUserOnLocationChangeData() {
  try {
    const user = yield select(state => state.user);
    const storage = localStorage.getItem("storageTyp");

    if (isEmpty(user) && window[storage].getItem("jwt")) {
      yield put({ type: GET_USER_DATA });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchUserData() {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield userRequest();
    if (status === 200) {
      yield put({
        type: GET_USER_DATA_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_USER_DATA_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* updateUser({ payload }) {
  const { cmePoints, email, country, ...rest } = payload;
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield userUpdateRequest({ ...rest });
    if (status === 200) {
      yield put({
        type: UPDATE_PROFILE_SUCCESS,
        payload: { ...data }
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch (error) {
    yield put({ type: UPDATE_PROFILE_FAILURE });
    console.log(error);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(error.response?.data) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* userSaga() {
  yield takeEvery(LOCATION_CHANGE, getUserOnLocationChangeData);
  yield takeEvery(GET_USER_DATA, fetchUserData);
  yield takeEvery(UPDATE_PROFILE, updateUser);
}
