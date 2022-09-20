import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2HhpC6_sItxdRvUEMrq8rIowT0T4F7c8",
  authDomain: "classesdemo-a19ca.firebaseapp.com",
  projectId: "classesdemo-a19ca",
  storageBucket: "classesdemo-a19ca.appspot.com",
  messagingSenderId: "610098490301",
  appId: "1:610098490301:web:6c71ec27092d141f9840d4",
  measurementId: "G-9QFL27HCGQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
