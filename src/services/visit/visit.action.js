import { createAction } from "redux-actions";

export const GET_VISIT = "GET_VISIT";
export const GET_VISIT_SUCCESS = "GET_VISIT_SUCCESS";
export const GET_VISIT_FAILURE = "GET_VISIT_FAILURE";

export const UPDATE_VISIT = "UPDATE_VISIT";
export const UPDATE_VISIT_SUCCESS = "UPDATE_VISIT_SUCCESS";
export const UPDATE_VISIT_FAILURE = "UPDATE_VISIT_FAILURE";

export const updateVisitAction = createAction(UPDATE_VISIT);
