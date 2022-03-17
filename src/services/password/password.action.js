import { createAction } from 'redux-actions';

export const UPDATE_PASSWORD  = "UPDATE_PASSWORD";
export const UPDATE_PASSWORD_SUCCESS  = "UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_FAILURE  = "UPDATE_PASSWORD_FAILURE";

export const FORGOT_PASSWORD  = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS  = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE  = "FORGOT_PASSWORD_FAILURE";

export const RESET_PASSWORD  = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS  = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE  = "RESET_PASSWORD_FAILURE";

export const updatePasswordAction = createAction(UPDATE_PASSWORD);
export const forgotPasswordAction = createAction(FORGOT_PASSWORD);
export const resetPasswordAction = createAction(RESET_PASSWORD);