import { createAction } from "redux-actions";

export const GET_NEWSLETTERS = "GET_NEWSLETTERS";
export const GET_NEWSLETTERS_SUCCESS = "GET_NEWSLETTERS_SUCCESS";
export const GET_NEWSLETTERS_FAILURE = "GET_NEWSLETTERS_FAILURE";

export const SHARE_NEWSLETTER = "SHARE_NEWSLETTER";
export const SHARE_NEWSLETTER_SUCCESS = "SHARE_NEWSLETTER_SUCCESS";
export const SHARE_NEWSLETTER_FAILURE = "SHARE_NEWSLETTER_FAILURE";

export const getNewslettersAction = createAction(GET_NEWSLETTERS);
export const shareNewsletterAction = createAction(SHARE_NEWSLETTER);
