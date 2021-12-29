import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj1O7ZHfV-y2pN06Jz7GUMkDZp-rBbqjk",
  authDomain: "fir-crud-e10ce.firebaseapp.com",
  projectId: "fir-crud-e10ce",
  storageBucket: "fir-crud-e10ce.appspot.com",
  messagingSenderId: "254787550202",
  appId: "1:254787550202:web:d08eac4c06c97fccef8243",
  measurementId: "G-W29W6GNDQE",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);