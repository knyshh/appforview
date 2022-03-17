import moment from "moment";
export const formatVisitDate = date => moment(date).format("DD MMM YYYY");
export const formatVisitTime = date => moment(date).format("ha:mm");

export const preparePrescriptions = prescription => {
  return prescription.map(({ medication, ...res }) => ({
    medication: medication === "Other" ? null : medication,
    ...res
  }));
};
