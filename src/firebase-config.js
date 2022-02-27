import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9c3MqBSxnuESSE_9R8OFz5i0BX8rKtLk",
  authDomain: "blog-d0d9b.firebaseapp.com",
  projectId: "blog-d0d9b",
  storageBucket: "blog-d0d9b.appspot.com",
  messagingSenderId: "381404763211",
  appId: "1:381404763211:web:5fe3b407840f805374a9ce"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();