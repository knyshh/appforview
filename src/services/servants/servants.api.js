import instance from "services/root.api";

export const servantsRequest = params => instance.get("/servants", { params });
export const servantRequest = id => instance.get(`/servants/${id}`);

export const servantsCountRequest = params =>
  instance.get("/servants/count", { params });

export const verifyServantRequest = id =>
  instance.put(`/servants/${id}/verify`);

export const saveServantRequest = ({ id, data }) =>
  instance.put(`/servants/${id}`, { ...data });

export const createServantRequest = ({ data }) =>
  instance.post(`/auth/createServant`, { ...data });
