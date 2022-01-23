import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  enableIndexedDbPersistence,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCv6g-P4k6cQvTH1xs4FhfeDpCER3u_tlE",
  authDomain: "music-share-app-8f72c.firebaseapp.com",
  projectId: "music-share-app-8f72c",
  storageBucket: "music-share-app-8f72c.appspot.com",
  messagingSenderId: "894996595265",
  appId: "1:894996595265:web:6a19e154348f27147abcc0",
};

// Initialize app.
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const usersColl = collection(db, "users");
const songsColl = collection(db, "songs");
const commentsColl = collection(db, "comments");

// Local persistance.
enableIndexedDbPersistence(db).catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

export const createNewUser = async (payload: any) => {
  const credentials = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  );
  await setDoc(doc(db, usersColl.path, credentials.user.uid), {
    name: payload.name,
    email: payload.email,
    age: payload.age,
    country: payload.country,
  });
  await updateProfile(credentials.user, {
    displayName: payload.name,
  });
  return credentials;
};

export const signInUser = async (payload: any) => {
  return signInWithEmailAndPassword(auth, payload.email, payload.password);
};

export const signOutUser = async () => {
  return signOut(auth);
};
