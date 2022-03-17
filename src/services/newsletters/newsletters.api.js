import instance from "services/root.api";

export const newslettersRequest = () => instance.get("/newsletters");
export const newslettersShareRequest = ({ newsletterId, ...data }) =>
  instance.post(`/newsletters/${newsletterId}/share`, { ...data });
