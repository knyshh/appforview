import instance from "services/root.api";

export const getDoctorAvailabilitiesRequest = params =>
  instance.get("/doctor-availabilities", { params });

export const addDoctorAvailabilitiesRequest = data =>
  instance.post("/doctor-availabilities", data);

export const updateDoctorAvailabilityRequest = ({ data, id }) =>
  instance.put(`/doctor-availabilities/${id}`, data);

export const addDoctorAvailabilitiesVisitRequest = ({ data, id }) =>
  instance.post(`/doctor-availabilities/${id}/addVisit`, data);

export const editDoctorAvailabilitiesVisitRequest = ({ data, id }) =>
  instance.put(`/visits/${id}`, data);

export const removeDoctorAvailabilitiesVisitRequest = id =>
  instance.delete(`/visits/${id}`);
