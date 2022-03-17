import { createAction } from "redux-actions";

export const FILE_UPLOAD = "FILE_UPLOAD";
export const FILE_UPLOAD_SUCCESS = "FILE_UPLOAD_SUCCESS";
export const FILE_UPLOAD_FAILURE = "FILE_UPLOAD_FAILURE";

export const FILE_REMOVE = "FILE_REMOVE";
export const FILE_REMOVE_SUCCESS = "FILE_REMOVE_SUCCESS";
export const FILE_REMOVE_FAILURE = "FILE_REMOVE_FAILURE";

export const FILES_UPLOAD = "FILES_UPLOAD";

export const CLEAR_FILES = "CLEAR_FILES";

export const fileUploadAction = createAction(FILE_UPLOAD);
export const removeFileAction = createAction(FILE_REMOVE);
