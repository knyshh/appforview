import instance from "services/root.api";

export const userRequest = () => instance.get("/users/profile");

export const userUpdateRequest = data =>
  instance.put("/users/profile", { ...data });
