import { put, takeEvery, select, call } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";

import { fileUploadRequest } from "./file.api";
import {
  CLEAR_FILES,
  FILE_REMOVE,
  FILE_REMOVE_FAILURE,
  FILE_REMOVE_SUCCESS,
  FILE_UPLOAD,
  FILE_UPLOAD_FAILURE,
  FILE_UPLOAD_SUCCESS,
  FILES_UPLOAD
} from "./file.action";
import { getFilteredFiles } from "./file.utils";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* fileUpload({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { response } = yield fileUploadRequest(payload.file);
    if (response.status === 200) {
      yield put({
        type: FILE_UPLOAD_SUCCESS,
        payload: {
          formName: payload.formName,
          file: response.data
        }
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(response?.data) || "Error",
        type: "error"
      });
      console.log(response);
      yield put({
        type: FILE_UPLOAD_FAILURE
      });
    }
  } catch ({ response }) {
    yield put({ type: FILE_UPLOAD_FAILURE });
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response?.data) || "Error",
      type: "error"
    });
    console.log(response);
  } finally {
    yield put({
      type: FINISH_LOADER
    });
  }
}

function* removeFile({ payload: { id, name, formName } }) {
  const files = yield select(state => state.files);
  const newFiles = getFilteredFiles(id, name, formName, files);
  try {
    yield put({ type: FILE_REMOVE_SUCCESS });
    yield put({
      type: FILES_UPLOAD,
      payload: { formName, files: newFiles[formName] }
    });
  } catch (error) {
    yield put({ type: FILE_REMOVE_FAILURE });

    console.log(error);
  }
}

function* clearFilesOnLocationChange() {
  yield put({ type: CLEAR_FILES });
}

export default function* fileUploadSaga() {
  yield takeEvery(FILE_UPLOAD, fileUpload);
  yield takeEvery(FILE_REMOVE, removeFile);
  yield takeEvery(LOCATION_CHANGE, clearFilesOnLocationChange);
}
