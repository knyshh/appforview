import instance from "services/root.api";

export const fileUploadRequest = file => {
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

export const fileRemoveRequest = id =>
  instance
    .delete(`/upload/files/${id}`)
    .then(response => ({ response }))
    .catch(response => ({ ...response }));
