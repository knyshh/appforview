import moment from "moment";

export const disablePastDate = current =>
  moment()
    .startOf("day")
    .diff(moment(current).startOf("day")) > 0;
