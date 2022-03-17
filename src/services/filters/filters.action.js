import { createAction } from "redux-actions";

export const SET_FILTERS = "SET_FILTERS";
export const RESET_FILTERS = "RESET_FILTERS";

export const setFiltersAction = createAction(SET_FILTERS);
export const resetFiltersAction = createAction(RESET_FILTERS);
