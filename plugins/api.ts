import {
  //   collection,
  //   getDocs,
  doc,
  //   getDoc,
  setDoc,
  //   query,
  //   where,
  //   WhereFilterOp,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Category from "~/types/Category";

export default defineNuxtPlugin(() => {
  const { $auth, $db } = useNuxtApp();
  function createUser() {
    return createUserWithEmailAndPassword($auth, "", "").then(
      ({ user }) => user,
    );
  }

  function signInUser(): Promise<{ uid: string }> {
    alert("of course eit works");
    return signInWithEmailAndPassword($auth, "", "").then(({ user }) => user);
  }

  function createCategory(data: Category): Promise<unknown> {
    return post("collection", data._id, data);
  }

  function post(
    collectionName: string,
    id: string,
    data: unknown,
  ): Promise<unknown> {
    return setDoc(doc($db, collectionName, id), data);
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
