import {
  UPLOAD_TEST_RESULT_SUCCESS,
  REMOVE_TEST_RESULT_SUCCESS
} from "./testResults.action";
import initialState from "store/initialState";

export default (state = initialState.testResults, { type, payload }) => {
  switch (type) {
    case UPLOAD_TEST_RESULT_SUCCESS:
      return [...state, payload.file[0]];
    case REMOVE_TEST_RESULT_SUCCESS:
      return payload;
    default:
      return state;
  }
};
