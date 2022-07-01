import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, firebase } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDD9aFJuzggGgbMoJzpIyzWkWqGgxpxMT4",
  authDomain: "messaging-app-a6e37.firebaseapp.com",
  projectId: "messaging-app-a6e37",
  storageBucket: "messaging-app-a6e37.appspot.com",
  messagingSenderId: "244312374001",
  appId: "1:244312374001:web:76f2e83525973c250f0750"
};

const app = initializeApp(firebaseConfig);

// we can use auth to know info about the user
export const auth = getAuth(app);

// this will represent everything related to google authentication
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider)

