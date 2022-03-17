import instance from "services/root.api";

export const updatePasswordRequest = (data) =>
    instance.put("/users/changeMyPassword", { ...data });

export const forgotPasswordRequest = (data) =>
    instance.post("/auth/forgot-password", { ...data });

export const resetPasswordRequest = (data) =>
    instance.post("/auth/reset-password", { ...data });