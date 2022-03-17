import { put, takeEvery, select } from "redux-saga/effects";

import {
  testResultUploadRequest,
  saveTestResultsRequest
} from "./testResults.api";
import {
  UPLOAD_TEST_RESULT,
  UPLOAD_TEST_RESULT_FAILURE,
  UPLOAD_TEST_RESULT_SUCCESS,
  REMOVE_TEST_RESULT,
  REMOVE_TEST_RESULT_FAILURE,
  REMOVE_TEST_RESULT_SUCCESS,
  SAVE_TEST_RESULTS_SUCCESS,
  SAVE_TEST_RESULTS_FAILURE,
  SAVE_TEST_RESULTS
} from "./testResults.action";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { SET_MODAL_STATUS } from "services/modals/modals.action";
import { GET_VISIT } from "services/visit/visit.action";

function* saveTestResult({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { status } = yield saveTestResultsRequest(payload);
    if (status === 200) {
      yield put({
        type: SAVE_TEST_RESULTS_SUCCESS
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
      yield put({
        type: REMOVE_TEST_RESULT_SUCCESS,
        payload: []
      });
      yield put({ type: GET_VISIT, payload: { id: payload.visit } });
    } else {
      yield put({
        type: SAVE_TEST_RESULTS_FAILURE
      });
    }
  } catch (error) {
    yield put({ type: SAVE_TEST_RESULTS_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* uploadTestResult({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { response } = yield testResultUploadRequest(payload.file);
    if (response.status === 200) {
      yield put({
        type: UPLOAD_TEST_RESULT_SUCCESS,
        payload: {
          file: response.data
        }
      });
    } else {
      yield put({
        type: UPLOAD_TEST_RESULT_FAILURE
      });
    }
  } catch (error) {
    yield put({ type: UPLOAD_TEST_RESULT_FAILURE });
    console.log(error);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* removeTestResult({ payload: id }) {
  const testResults = yield select(state => state.testResults);
  const filteredTestResults = testResults.filter(
    testResult => testResult.id !== id
  );
  try {
    yield put({
      type: REMOVE_TEST_RESULT_SUCCESS,
      payload: filteredTestResults
    });
  } catch (error) {
    yield put({ type: REMOVE_TEST_RESULT_FAILURE });

    console.log(error);
  }
}

export default function* testResultsSaga() {
  yield takeEvery(UPLOAD_TEST_RESULT, uploadTestResult);
  yield takeEvery(REMOVE_TEST_RESULT, removeTestResult);
  yield takeEvery(SAVE_TEST_RESULTS, saveTestResult);
}
