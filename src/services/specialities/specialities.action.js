import { createAction } from "redux-actions";

export const GET_SPECIALITIES = "GET_SPECIALITIES";
export const GET_SPECIALITIES_SUCCESS = "GET_SPECIALITIES_SUCCESS";
export const GET_SPECIALITIES_FAILURE = "GET_SPECIALITIES_FAILURE";

export const getSpecialitiesAction = createAction(GET_SPECIALITIES);
