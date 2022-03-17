import { notification } from "antd";
import errors from "constants/errors";

export const prepareErrorMessages = ({ message, data } = {}) => {
  if (!message)
    return "Oops! Something went wrong!.\nPlease try again later, or contact the system admin if you are still facing this problem";
  if (Array.isArray(message)) {
    return message
      .map(m =>
        m.messages?.map(m2 => {
          return m2?.message
            ? m2?.message
            : errors?.[m2.id] ||
                "Oops! Something went wrong!\nPlease try again later, or contact the system admin if you are still facing this problem";
        })
      )
      .join("\n");
  } else if (data && data.errors) {
    const errorMessages = [];
    for (const errorKey in data.errors) {
      const messages = data.errors[errorKey];
      if (Array.isArray(messages)) {
        errorMessages.push(...messages);
      } else {
        errorMessages.push(messages);
      }
    }
    return errorMessages.join("\n");
  } else {
    return message;
  }
};

export const openNotification = ({
  message = "",
  description,
  type = "info",
  duration
}) => {
  notification[type]({
    duration: duration ? duration : type === "error" ? 9999999999 : 4.5,
    message,
    description
  });
};
