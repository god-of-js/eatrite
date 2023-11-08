const config = useRuntimeConfig();
export const FIREBASE_API_KEY = config.public.FIREBASE_API_KEY as string;
export const FIREBASE_AUTH_DOMAIN = config.public
  .FIREBASE_AUTH_DOMAIN as string;
export const FIREBASE_PROJECT_ID = config.public.FIREBASE_PROJECT_ID as string;
export const FIREBASE_STORAGE_BUCKET = config.public
  .FIREBASE_STORAGE_BUCKET as string;
export const FIREBASE_MESSAGING_SENDER_ID = config.public
  .FIREBASE_MESSAGING_SENDER_ID as string;
export const FIREBASE_APP_ID = config.public.FIREBASE_APP_ID as string;
export const FIREBASE_MEASUREMENT_ID = config.public
  .FIREBASE_MEASUREMENT_ID as string;
export const CLOUDINARY_UPLOAD_URL = config.public
  .CLOUDINARY_UPLOAD_URL as string;
export const CLOUDINARY_UPLOAD_PRESET = config.public
  .CLOUDINARY_UPLOAD_PRESET as string;
