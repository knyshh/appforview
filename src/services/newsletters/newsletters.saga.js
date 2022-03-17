import { call, put, takeEvery } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";

import {
  GET_NEWSLETTERS,
  GET_NEWSLETTERS_SUCCESS,
  GET_NEWSLETTERS_FAILURE,
  SHARE_NEWSLETTER_SUCCESS,
  SHARE_NEWSLETTER_FAILURE,
  SHARE_NEWSLETTER
} from "./newsletters.action";
import { urlLocations } from "routes/urlLocations";
import { newslettersRequest, newslettersShareRequest } from "./newsletters.api";
import { isUrlMatch } from "services/router/router.utils";
import { SET_MODAL_STATUS } from "services/modals/modals.action";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* getNewslettersOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.newsletters)) {
      yield put({ type: GET_NEWSLETTERS });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchNewsletters() {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield newslettersRequest();
    if (status === 200) {
      yield put({
        type: GET_NEWSLETTERS_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_NEWSLETTERS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* shareNewsletter({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield newslettersShareRequest({
      ...payload
    });
    if (status === 200) {
      yield put({
        type: SHARE_NEWSLETTER_SUCCESS,
        payload: { ...data }
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch (error) {
    yield put({ type: SHARE_NEWSLETTER_FAILURE });
    console.log(error);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(error.response.data) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* newslettersSaga() {
  yield takeEvery(LOCATION_CHANGE, getNewslettersOnLocationChange);
  yield takeEvery(GET_NEWSLETTERS, fetchNewsletters);
  yield takeEvery(SHARE_NEWSLETTER, shareNewsletter);
}
