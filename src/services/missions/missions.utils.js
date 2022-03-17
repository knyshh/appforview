import moment from "moment";
import flatten from "lodash/flatten";
import groupBy from "lodash/groupBy";

export const prepareSpecialities = items => {
  const newItems = items.map(item =>
    Array(parseInt(item.places)).fill({
      doctor: null,
      speciality: item.speciality
    })
  );

  return flatten(newItems);
};
export const prepareVisits = visits => {
  return groupBy(visits, visit => moment(visit.from).format("DD MMM"));
};

export const getMissionTitle = ({ destination, startDate, endDate }) => {
  return `${destination?.name} mission \n (${moment(startDate).format(
    "DD MMM YYYY"
  )} - ${moment(endDate).format("DD MMM YYYY")})`;
};

export const prepareMissionDates = ({ startDate, endDate }) => {
  const mStart = moment(startDate);
  const mEnd = moment(endDate);

  const daysCount = mEnd.diff(mStart, "d");
  const days = [mStart.format("DD MMM")];
  for (let i = 0; i < daysCount; i++) {
    const day = mStart.add(1, "d").format("DD MMM");
    days.push(day);
  }

  return days;
};
