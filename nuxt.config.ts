// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: import.meta.env.FIREBASE_API_KEY,
      CLOUDINARY_UPLOAD_URL: import.meta.env.CLOUDINARY_UPLOAD_URL,
      CLOUDINARY_UPLOAD_PRESET: import.meta.env.CLOUDINARY_UPLOAD_PRESET,
      FIREBASE_AUTH_DOMAIN: import.meta.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: import.meta.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: import.meta.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: import.meta.env
        .FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: import.meta.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: import.meta.env.FIREBASE_MEASUREMENT_ID,
    },
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: "./**/*.{ts,js,vue}",
      },
    },
  },
});
