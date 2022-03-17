import { call, put, select, takeEvery } from "redux-saga/effects";
import { createMatchSelector, LOCATION_CHANGE } from "connected-react-router";
import pickBy from "lodash/pickBy";
import get from "lodash/get";

import {
  GET_SERVANTS,
  GET_SERVANTS_SUCCESS,
  GET_SERVANTS_FAILURE,
  VERIFY_SERVANT,
  VERIFY_SERVANT_SUCCESS,
  VERIFY_SERVANT_FAILURE,
  SAVE_SERVANT_FAILURE,
  SAVE_SERVANT_SUCCESS,
  CREATE_SERVANT,
  CREATE_SERVANT_SUCCESS,
  CREATE_SERVANT_FAILURE,
  SAVE_SERVANT,
  GET_SERVANTS_COUNT_SUCCESS,
  GET_SERVANTS_COUNT_FAILURE,
  GET_SERVANTS_COUNT,
  GET_SERVANT,
  GET_SERVANT_SUCCESS,
  GET_SERVANT_FAILURE
} from "./servants.action";
import { history, urlLocations } from "routes/urlLocations";
import { isUrlMatch } from "services/router/router.utils";
import {
  createServantRequest,
  saveServantRequest,
  servantsCountRequest,
  servantsRequest,
  verifyServantRequest,
  servantRequest
} from "./servants.api";
import { SET_FILTERS } from "services/filters/filters.action";
import { GET_USER_DATA } from "services/user/user.action";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* getServantsOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.settings)) {
      yield put({ type: GET_SERVANTS });
    }
  } catch (error) {
    console.log(error);
  }
}
function* clearServantOnLocationChange({ payload }) {
  try {
    yield put({
      type: GET_SERVANT_SUCCESS,
      payload: {}
    });
  } catch (error) {
    console.log(error);
  }
}

function* getServantOnLocationChange({ payload }) {
  try {
    if (isUrlMatch(payload, urlLocations.servantInfo)) {
      const getMatch = createMatchSelector(urlLocations.servantInfo);
      const state = yield select(state => state);
      const id = get(getMatch(state), "params.id");
      yield !!id && put({ type: GET_SERVANT, payload: id });
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchServant({ payload: id }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { data, status } = yield servantRequest(id);
    if (status === 200) {
      yield put({
        type: GET_SERVANT_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_SERVANT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* fetchServants({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const params = payload
      ? payload
      : yield select(state => state.filters.servants);
    const filteredParams = pickBy(params);
    const { data, status } = yield servantsRequest({
      ...filteredParams,
      ...(!filteredParams._limit && { _limit: 50 }),
      ...(!filteredParams._start && { _start: 0 })
    });
    if (status === 200) {
      yield put({
        type: SET_FILTERS,
        payload: {
          filters: {
            ...filteredParams,
            ...(!filteredParams._limit && { _limit: 50 }),
            ...(!filteredParams._start && { _start: 0 })
          },
          name: "servants"
        }
      });
      yield put({
        type: GET_SERVANTS_COUNT,
        payload: filteredParams
      });
      yield put({
        type: GET_SERVANTS_SUCCESS,
        payload: { ...data }
      });
    }
  } catch (error) {
    yield put({ type: GET_SERVANTS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* verifyServant({ payload: id }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status, data } = yield verifyServantRequest(id);
    if (status === 200) {
      yield put({
        type: VERIFY_SERVANT_SUCCESS
      });
      yield put({
        type: GET_SERVANTS
      });
      history.push(urlLocations.settingsServants);
      yield put({ type: GET_SERVANT, payload: id });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: VERIFY_SERVANT_FAILURE });
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response.data) || "Error",
      type: "error"
    });
    console.log(response);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* saveServant({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const uploadedPic = yield select(state => state.files.servant?.[0]?.id);
    const profilePic = uploadedPic ? uploadedPic : payload.profilePic;
    const { status, data } = yield saveServantRequest({
      data: { ...payload, profilePic },
      id: payload.id
    });
    if (status === 200) {
      yield put({
        type: SAVE_SERVANT_SUCCESS
      });
      yield call(openNotification, {
        message: "Success",
        description: "Profile successfully saved",
        type: "success"
      });
      yield put({
        type: GET_SERVANTS
      });
      yield put({
        type: GET_USER_DATA
      });
      const path = yield select(store => store.router.location.pathname);
      path !== urlLocations.profile
        ? history.push(urlLocations.settingsServants)
        : history.goBack();
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: SAVE_SERVANT_FAILURE });
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response?.data) || "Error",
      type: "error"
    });
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* createServant({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const profilePic = yield select(state => state.files.servant?.[0]?.id) ||
      null;
    const { status, data } = yield createServantRequest({
      data: { ...payload, profilePic }
    });
    if (status === 200) {
      yield put({
        type: CREATE_SERVANT_SUCCESS
      });
      history.goBack();
      // history.push(`${urlLocations.servant}/${data?.servantProfile?.id}`);
      yield put({
        type: GET_SERVANTS
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: CREATE_SERVANT_FAILURE });
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response.data) || "Error",
      type: "error"
    });
    console.log(response);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* getServantsCount({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const params = payload
      ? payload
      : yield select(state => state.filters.servants);
    const { _limit, _start, ...filteredParams } = pickBy(params);
    const { status, data } = yield servantsCountRequest({
      ...filteredParams
    });
    if (status === 200) {
      yield put({
        type: GET_SERVANTS_COUNT_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    yield put({ type: GET_SERVANTS_COUNT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

export default function* servantsSaga() {
  yield takeEvery(LOCATION_CHANGE, getServantsOnLocationChange);
  yield takeEvery(LOCATION_CHANGE, clearServantOnLocationChange);
  yield takeEvery(LOCATION_CHANGE, getServantOnLocationChange);
  yield takeEvery(GET_SERVANTS, fetchServants);
  yield takeEvery(GET_SERVANT, fetchServant);
  yield takeEvery(VERIFY_SERVANT, verifyServant);
  yield takeEvery(SAVE_SERVANT, saveServant);
  yield takeEvery(CREATE_SERVANT, createServant);
  yield takeEvery(GET_SERVANTS_COUNT, getServantsCount);
}
