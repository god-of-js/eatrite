import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((app) => {
  const config = {
    apiKey: app.$config.public.FIREBASE_API_KEY,
    authDomain: app.$config.public.FIREBASE_AUTH_DOMAIN,
    projectId: app.$config.public.FIREBASE_PROJECT_ID,
    storageBucket: app.$config.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: app.$config.public.FIREBASE_MESSAGING_SENDER_ID,
    appId: app.$config.public.FIREBASE_APP_ID,
    measurementId: app.$config.public.FIREBASE_MEASUREMENT_ID,
  };

  const firebaseApp = initializeApp(config);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return { provide: { firebaseApp, db, auth } };
});
