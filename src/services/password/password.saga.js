import { put, takeEvery, call } from "redux-saga/effects";

import {
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    RESET_PASSWORD,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_SUCCESS
} from "./password.action";
import { updatePasswordRequest, forgotPasswordRequest, resetPasswordRequest } from "./password.api";
import { SET_MODAL_STATUS } from "services/modals/modals.action";
import { FINISH_LOADER, START_LOADER } from "services/loader/loader.action";
import {urlLocations, history} from "routes/urlLocations";
import {openNotification, prepareErrorMessages} from "utils/notifications";

function* updatePassword({ payload }) {
    try {
        yield put({
            type: START_LOADER
        });
        const { status } = yield updatePasswordRequest(payload);
        if (status === 200) {
            yield put({
                type: UPDATE_PASSWORD_SUCCESS,
            });
            yield put({
                type: SET_MODAL_STATUS,
                payload: null
            });
        } else {
            yield put({ type: UPDATE_PASSWORD_FAILURE });

        }
    } catch (error) {
        yield put({ type: UPDATE_PASSWORD_FAILURE });
        console.log(error);
    } finally {
        yield put({
            type: FINISH_LOADER
        });
    }
};

function* forgotPassword({ payload }) {
    try {
        yield put({
            type: START_LOADER
        });
        const { status, data } = yield forgotPasswordRequest(payload);
        if (status === 200) {
            yield put({
                type: FORGOT_PASSWORD_SUCCESS,
            });
            yield call(openNotification, {
                message: "Success",
                description: "Email was send",
                type: "success"
            });
            yield put({
                type: SET_MODAL_STATUS,
                payload: null
            });
        } else {
            yield put({ type: FORGOT_PASSWORD_FAILURE });
            yield call(openNotification, {
                message: "Error",
                description: prepareErrorMessages(data) || "Error",
                type: "error"
            });

        }
    } catch (response) {
        yield put({ type: FORGOT_PASSWORD_FAILURE });
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

function* resetPassword({ payload }) {
    try {
        yield put({
            type: START_LOADER
        });
        const { data, status } = yield resetPasswordRequest(payload);
        if (status === 200) {
            yield put({
                type: RESET_PASSWORD_SUCCESS,
            });
            yield call(openNotification, {
                message: "Success",
                description: "Password was successfully saved",
                type: "success"
            });
            history.push(urlLocations.login);
        } else {
            yield put({ type: RESET_PASSWORD_FAILURE });
            yield call(openNotification, {
                message: "Error",
                description: prepareErrorMessages(data) || "Error",
                type: "error"
            });
        }
    } catch (response) {
        yield put({ type: RESET_PASSWORD_FAILURE });
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

export default function* passwordSaga() {
    yield takeEvery(UPDATE_PASSWORD, updatePassword);
    yield takeEvery(FORGOT_PASSWORD, forgotPassword);
    yield takeEvery(RESET_PASSWORD, resetPassword);


}
