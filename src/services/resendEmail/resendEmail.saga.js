import { put, takeEvery, call } from "redux-saga/effects";

import { openNotification, prepareErrorMessages } from "utils/notifications";
import { resendEmailRequest } from "./resendEmail.api";
import {
  RESEND_CONFIRMATION_EMAIL,
  RESEND_CONFIRMATION_EMAIL_FAILURE,
  RESEND_CONFIRMATION_EMAIL_SUCCESS
} from "./resendEmail.action";
import { SET_MODAL_STATUS } from "../modals/modals.action";

function* resendEmail({ payload: { email } }) {
  try {
    const lowerCaseEmail = email.trim().toLowerCase();
    const { status, data } = yield call(resendEmailRequest, {
      email: lowerCaseEmail
    });

    if (status === 200) {
      yield put({
        type: RESEND_CONFIRMATION_EMAIL_SUCCESS
      });
      yield openNotification({
        type: "success",
        message: "Email successfully resend",
        description: "Email successfully resend"
      });
      yield put({
        type: SET_MODAL_STATUS,
        payload: null
      });
    } else {
      yield put({
        type: RESEND_CONFIRMATION_EMAIL_FAILURE
      });
      yield call(openNotification, {
        message: "Error",
        description: prepareErrorMessages(data) || "Error",
        type: "error"
      });
    }
  } catch ({ response }) {
    yield put({ type: RESEND_CONFIRMATION_EMAIL_FAILURE });
    console.log(response);
    yield call(openNotification, {
      message: "Error",
      description: prepareErrorMessages(response) || "Error",
      type: "error"
    });
  }
}

export default function* resendEmailSaga() {
  yield takeEvery(RESEND_CONFIRMATION_EMAIL, resendEmail);
}
