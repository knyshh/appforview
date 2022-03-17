import instance from "../root.api";

export const resendEmailRequest = ({ email }) =>
  instance.post(`/auth/send-email-confirmation`, { email });
