import axios from "axios";
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from "~/config";

function uploadFile(file: File): Promise<string> {
  return new Promise((resolve) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET!);

    return axios.post(CLOUDINARY_UPLOAD_URL!, formData).then((response) => {
      return resolve(response.data.url);
    });
  });
}

export { uploadFile };
