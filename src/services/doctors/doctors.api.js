import instance from "services/root.api";

export const doctorsRequest = params => instance.get("/doctors", { params });
export const doctorRequest = id => instance.get(`/doctors/${id}`);

export const doctorsCountRequest = params =>
  instance.get("/doctors/count", { params });

export const verifyDoctorRequest = id => instance.put(`/doctors/${id}/verify`);
export const saveDoctorRequest = ({ id, data }) =>
  instance.put(`/doctors/${id}`, { ...data });

export const createDoctorRequest = ({ data }) =>
  instance.post(`/auth/createDoctor`, { ...data });
