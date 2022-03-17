import moment from "moment";

export const prepareFilterDate = (date = Date.now()) => ({
  from_gte: moment(date)
    .startOf("week")
    .format("YYYY-MM-DD"),
  from_lte: moment(date)
    .endOf("week")
    .format("YYYY-MM-DD")
});

export const prepareDoctorsAvailabilities = availabilities =>
  availabilities.reduce((acc, availability) => {
    const dayKey = moment(availability.from).format("ddd");
    const dayValue = acc?.[dayKey] || [];
    return { ...acc, [dayKey]: [...dayValue, { ...availability }] };
  }, {});
