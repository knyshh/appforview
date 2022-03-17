import moment from "moment";

export const getPastVisits = (visits = []) =>
  visits.filter(visit => moment().diff(moment(visit.from)) > 0);
export const getFutureVisits = (visits = []) =>
  visits.filter(visit => moment().diff(moment(visit.from)) < 0);
