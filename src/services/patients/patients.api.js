import instance from "services/root.api";

export const patientsRequest = params => instance.get("/patients", { params });
export const patientRequest = id => instance.get(`patients/${id}`);

export const patientsCountRequest = params =>
  instance.get("/patients/count", { params });

export const savePatientRequest = ({ id, data }) =>
  instance.put(`/patients/${id}`, { ...data });

export const createPatientRequest = ({ data }) =>
  instance.post(`/patients`, { ...data });
