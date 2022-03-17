import moment from "moment";

export const getDailyHours = () => {
  const items = [];
  for (let hour = 0; hour < 24; hour++) {
    items.push(moment({ hour }).format("h:mm A"));
  }
  return items;
};

export const disabledHours = (dailyStartTime, dailyEndTime) => {
  const start = moment(dailyStartTime).format("HH");
  const end = moment(dailyEndTime).format("HH");

  const availableHoursRange = [];
  for (let hour = start; hour <= end; hour++) {
    availableHoursRange.push(parseInt(hour));
  }

  const dailyHours = getDailyHours("HH");
  const hours = dailyHours.map(h => parseInt(moment(h, "h:mm A").format("HH")));
  return hours.filter(function(el) {
    return !availableHoursRange.includes(el);
  });
};
