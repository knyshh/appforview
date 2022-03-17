import instance from "services/root.api";

export const getVisitRequest = id => instance.get(`/visits/${id}`);
export const updateVisitRequest = ({ id, ...data }) =>
  instance.put(`/visits/${id}`, data);
