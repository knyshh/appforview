import { put, takeEvery, select, call } from "redux-saga/effects";

import { documentUploadRequest } from "./documents.api";
import {
  DOCUMENTS_UPLOAD,
  REMOVE_DOCUMENT,
  REMOVE_DOCUMENT_FAILURE,
  REMOVE_DOCUMENT_SUCCESS,
  UPLOAD_DOCUMENT,
  UPLOAD_DOCUMENT_FAILURE,
  UPLOAD_DOCUMENT_SUCCESS
} from "./documents.action";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import { openNotification, prepareErrorMessages } from "utils/notifications";

function* documentUpload({ payload }) {
  try {
    yield put({
      type: START_LOADER
    });
    const { response } = yield documentUploadRequest(payload.file);
    if (response.status === 200) {
      yield put({
        type: UPLOAD_DOCUMENT_SUCCESS,
        payload: {
          file: response.data
        }
      });
    } else {
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(response?.data) || "Error",
        type: "error"
      });
      yield put({
        type: UPLOAD_DOCUMENT_FAILURE
      });
    }
  } catch ({ response }) {
    yield put({ type: UPLOAD_DOCUMENT_FAILURE });
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

function* removeDocument({ payload: id }) {
  const documents = yield select(state => state.documents);
  const newDocuments = documents.filter(document => document.id !== id);
  try {
    yield put({ type: REMOVE_DOCUMENT_SUCCESS });
    yield put({
      type: DOCUMENTS_UPLOAD,
      payload: newDocuments
    });
  } catch (error) {
    yield put({ type: REMOVE_DOCUMENT_FAILURE });

    console.log(error);
  }
}

export default function* documentsUploadSaga() {
  yield takeEvery(UPLOAD_DOCUMENT, documentUpload);
  yield takeEvery(REMOVE_DOCUMENT, removeDocument);
}
