import moment from "moment";
import groupBy from "lodash/groupBy";

export const getDailyHours = (format = "h:mm A") => {
  const items = [];
  for (let hour = 0; hour < 24; hour++) {
    items.push(moment({ hour }).format(format));
  }
  return items;
};

export const groupDoctorsVisits = visits => {
  return groupBy(visits, "doctor.id");
};

export const disabledHours = (dailyStartTime, dailyEndTime) => {
  const start = moment(dailyStartTime, "hh:mm:ss").format("H");
  const end = moment(dailyEndTime, "hh:mm:ss").format("H");

  const availableHoursRange = [];

  for (let hour = start; hour <= end; hour++) {
    availableHoursRange.push(parseInt(hour));
  }

  const dailyHours = getDailyHours("H");
  const hours = dailyHours.map(h => parseInt(h));
  return hours.filter(function(el) {
    return !availableHoursRange.includes(el);
  });
};
