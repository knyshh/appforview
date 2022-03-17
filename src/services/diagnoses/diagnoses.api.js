import instance from "services/root.api";

export const getDiagnosesRequest = () => instance.get("/diagnoses");
