import axios from "axios";
import { CLOUDINARY_UPLOAD_URL } from "~/config";

function uploadFile(file: File): Promise<string> {
  return new Promise((resolve) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mib8y8vc");

    return axios
      .post(CLOUDINARY_UPLOAD_URL, formData)
      .then((response) => {
        return resolve(response.data.url);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  });
}

export { uploadFile };
