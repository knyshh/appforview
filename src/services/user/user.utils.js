import { USER_ROLES } from "constants/common";

const userRequiredFields = {
  doctor: [
    "fullName",
    "mobile",
    "email",
    "whatsapp",
    "diocese",
    "fatherOfConfession",
    "speciality"
  ],
  servant: [
    "fullName",
    "mobile",
    "email",
    "whatsapp",
    "diocese",
    "fatherOfConfession",
    "destination"
  ]
};

export const isUserProfileComplete = user => {
  const fields = userRequiredFields[user.userType];
  if (!fields) {
    return true;
  }
  const profile = user[`${user.userType}Profile`];
  return fields.map(field => !!profile[field]).every(v => !!v);
};

export const isAdmin = user => user.userType === USER_ROLES.ADMIN;
