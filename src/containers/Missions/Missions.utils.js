import moment from "moment";
import uniqBy from "lodash/uniqBy";

export const getQuarterStartDate = date => {
  return moment(date).startOf("quarter");
};

export const getQuarterMonths = date => {
  const startQuarterDate = getQuarterStartDate(date);
  const quarter = [startQuarterDate];
  quarter.push(moment(startQuarterDate).add(1, "month"));
  quarter.push(moment(startQuarterDate).add(2, "month"));
  return quarter;
};

export const formatDateYear = date => moment(date).format("YYYY");
export const formatDateMonth = date => moment(date).format("MMMM");
export const formatMissionTime = ({ start, end }) =>
  `${moment(start).format("DD")} - ${moment(end).format("DD MMM")}`;

export const formatDoctorMissionDate = data =>
  moment(data).format("DD MMMM YYYY");

export const prepareEvents = (events = []) => {
  return (
    !!events.length &&
    events?.map(event => ({
      ...event,
      start: event.startDate,
      end: event.endDate
    }))
  );
};

export const getMissionBySelectedId = (missions, id) => {
  return missions.find(m => m.id === id);
};

export const prepareInitialItems = items =>
  items?.map(item => ({ ...item, speciality: item?.speciality?.id }));

export const mergeItems = (items, newItems) => {
  return uniqBy([...newItems, ...items], item => {
    if (!item.id) {
      return item;
    } else {
      return item.id;
    }
  });
};

export const isMissionFull = items => items.every(item => !!item.doctor);
