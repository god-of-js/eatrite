import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // collection,
  //   getDocs,
  doc,
  //   getDoc,
  setDoc,
  //   query,
  //   where,
  //   WhereFilterOp,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Category from "~/types/Category";

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

  function createUser() {
    return createUserWithEmailAndPassword(auth, "", "").then(
      ({ user }) => user,
    );
  }

  function signInUser(): Promise<{ uid: string }> {
    return signInWithEmailAndPassword(auth, "", "").then(({ user }) => user);
  }

  function createCategory(data: Category): Promise<unknown> {
    return post("collection", data._id, data);
  }

  function post(
    collectionName: string,
    id: string,
    data: unknown,
  ): Promise<unknown> {
    return setDoc(doc(db, collectionName, id), data);
  }

  // async function getCollection<T>(collectionName: string): Promise<T[]> {
  //   const rawObjects = await getDocs(collection(db, collectionName));
  //   return rawObjects.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   })) as unknown as T[];
  // }

  // async function query<T = unknown>({
  //   collectionName,
  //   key,
  //   condition,
  //   value,
  // }: {
  //   collectionName: string;
  //   key: string;
  //   condition: WhereFilterOp;
  //   value: string;
  // }): Promise<T[]> {
  //   const dbRef = collection(db, collectionName);
  //   const rawQuery = query(dbRef, where(key, condition, value));
  //   const snapShots = await getDocs(rawQuery);
  //   const documentList: T[] = [];
  //   snapShots.forEach((doc) => {
  //     documentList.push(doc.data() as T);
  //   });
  //   return documentList;
  // }

  // async function getItem<T>(collectionName: string, id: string): Promise<T> {
  //   const docRef = doc(db, collectionName, id);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     return docSnap.data() as T;
  //   } else {
  //     throw new Error("404: Document not found");
  //   }
  // }

  return {
    provide: {
      createUser,
      signInUser,
      createCategory,
    },
  };
});
