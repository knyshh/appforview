import {
  UPLOAD_DOCUMENT_SUCCESS,
  CLEAR_DOCUMENTS,
  DOCUMENTS_UPLOAD,
  SET_DOCUMENTS
} from "./documents.action";
import initialState from "store/initialState";

export default (state = initialState.documents, { type, payload }) => {
  switch (type) {
    case UPLOAD_DOCUMENT_SUCCESS:
      return [...state, payload.file[0]];
    case CLEAR_DOCUMENTS:
      return [];
    case DOCUMENTS_UPLOAD:
      return payload;
    case SET_DOCUMENTS:
      return payload;
    default:
      return state;
  }
};
