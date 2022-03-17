export const prepareFilesDataForSave = files =>
  Object.entries(files).reduce(
    (acc, file) => ({
      ...acc,
      ...{
        [file[0]]: file[1].map(el => {
          return el.id;
        })
      }
    }),
    {}
  );

export const getFilteredFiles = (id, name, formName, files) => {
  const currentFiles = files[formName][name];
  const filteredFiles = currentFiles.filter(file => file.id !== id);
  return {
    ...files,
    [formName]: {
      ...files[formName],
      [name]: filteredFiles
    }
  };
};
