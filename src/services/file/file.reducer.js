import { FILE_UPLOAD_SUCCESS, CLEAR_FILES } from "./file.action";
import initialState from "store/initialState";

export default (state = initialState.files, { type, payload }) => {
  switch (type) {
    case FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        [payload.formName]: payload.file
      };
    case CLEAR_FILES:
      return {};
    default:
      return state;
  }
};
