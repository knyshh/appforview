export const requiredFieldsValidate = (values, requiredFields = []) => {
  const entries = Object.entries(values);
  const fields = requiredFields
    ? entries.filter(f => requiredFields.includes(f[0]))
    : entries;
  return fields.reduce((acc, field) => {
    const [name, value] = field;
    if (!value) {
      return { ...acc, [name]: "Field is required" };
    } else {
      return acc;
    }
  }, {});
};
