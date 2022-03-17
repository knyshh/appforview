import { openNotification } from "utils/notifications";

const photoMaxSize = 2000000;
const photoTypes = ["image/jpeg", "image/png"];

export const photoValidation = ({ size, type }) => {
  if (size > photoMaxSize) {
    openNotification({
      type: "error",
      description: "Photo size should be less then 2MB",
      message: "Error"
    });

    return false;
  }

  if (!photoTypes.includes(type)) {
    openNotification({
      type: "error",
      description: "Format is not supporting",
      message: "Error"
    });

    return false;
  }
};
