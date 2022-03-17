import instance from "services/root.api";

export const registrationRequest = data =>
  instance
    .post("/auth/local/register", { ...data })
    .then(response => ({ response }))
    .catch(response => ({ ...response }));
