import axios from "axios";
export default defineNuxtPlugin((app) => {
  function uploadFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      app.$config.public.CLOUDINARY_UPLOAD_PRESET,
    );

    return axios
      .post(app.$config.public.CLOUDINARY_UPLOAD_URL, formData)
      .then((response) => {
        return response.data.url;
      });
  }

  return { provide: { uploadFile } };
});
