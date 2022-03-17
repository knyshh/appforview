import instance from "services/root.api";

export const specialitiesRequest = () =>
  instance.get("/specialities?_sort=name:ASC");
