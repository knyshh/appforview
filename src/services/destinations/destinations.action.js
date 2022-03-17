import { createAction } from "redux-actions";

export const GET_DESTINATIONS = "GET_DESTINATIONS";
export const GET_DESTINATIONS_SUCCESS = "GET_DESTINATIONS_SUCCESS";
export const GET_DESTINATIONS_FAILURE = "GET_DESTINATIONS_FAILURE";

export const getDestinationsAction = createAction(GET_DESTINATIONS);
