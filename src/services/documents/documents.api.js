import instance from "services/root.api";

export const documentUploadRequest = file => {
  const data = new FormData();
  data.append("files", file, file.name);

  return instance
    .post("/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => ({ response }))
    .catch(response => ({ ...response }));
};
