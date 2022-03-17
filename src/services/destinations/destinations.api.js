import instance from "services/root.api";

export const destinationsRequest = () =>
  instance.get("/destinations?_sort=name:ASC");
