import instance from "services/root.api";

export const getMedicationsRequest = () => instance.get("/medications");
