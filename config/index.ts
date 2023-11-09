console.log(
  import.meta.env.FIREBASE_API_KEY,
  process.env.FIREBASE_API_KEY,
  "test import",
);
// function secrets() {
//   const config = useRuntimeConfig();
//   const FIREBASE_API_KEY = config.public.FIREBASE_API_KEY as string;
//   const FIREBASE_AUTH_DOMAIN = config.public.FIREBASE_AUTH_DOMAIN as string;
//   const FIREBASE_PROJECT_ID = config.public.FIREBASE_PROJECT_ID as string;
//   const FIREBASE_STORAGE_BUCKET = config.public
//     .FIREBASE_STORAGE_BUCKET as string;
//   const FIREBASE_MESSAGING_SENDER_ID = config.public
//     .FIREBASE_MESSAGING_SENDER_ID as string;
//   const FIREBASE_APP_ID = config.public.FIREBASE_APP_ID as string;
//   const FIREBASE_MEASUREMENT_ID = config.public
//     .FIREBASE_MEASUREMENT_ID as string;
//   const CLOUDINARY_UPLOAD_URL = config.public.CLOUDINARY_UPLOAD_URL as string;
//   const CLOUDINARY_UPLOAD_PRESET = config.public
//     .CLOUDINARY_UPLOAD_PRESET as string;

//   return {
//     FIREBASE_API_KEY,
//     FIREBASE_AUTH_DOMAIN,
//     FIREBASE_PROJECT_ID,
//     FIREBASE_STORAGE_BUCKET,
//     FIREBASE_MESSAGING_SENDER_ID,
//     FIREBASE_APP_ID,
//     FIREBASE_MEASUREMENT_ID,
//     CLOUDINARY_UPLOAD_URL,
//     CLOUDINARY_UPLOAD_PRESET,
//   };
// }

// export const {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
//   FIREBASE_MEASUREMENT_ID,
//   CLOUDINARY_UPLOAD_URL,
//   CLOUDINARY_UPLOAD_PRESET,
// } = secrets();

export {};
