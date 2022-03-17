import instance from "services/root.api";

export const getMissionsRequest = params =>
  instance.get("/missions", { params });

export const getMissionScheduleRequest = id => instance.get(`/missions/${id}`);

export const addMissionRequest = data =>
  instance.post("/missions", { ...data });

export const updateMissionRequest = ({ data, id }) =>
  instance.put(`/missions/${id}`, { ...data });

export const notifyDoctorsRequest = ({ missionId, speciality }) =>
  instance.post(
    `/missions/${missionId}/notifyDoctors?speciality=${speciality}`
  );

export const registerDoctorRequest = ({ missionId, itemId, doctorId }) =>
  instance.put(
    `/missions/${missionId}/registerDoctor?item=${itemId}&doctor=${doctorId}`
  );

export const addMissionVisitRequest = ({ missionId, ...data }) =>
  instance.put(`/missions/${missionId}/addVisit`, { ...data });

export const updateMissionVisitRequest = ({ missionId, id, ...data }) =>
  instance.put(`/visits/${id}`, { ...data });
