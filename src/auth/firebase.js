import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw910DbKFeBbdv6nBLBwST5aSaJGfSpok",
  authDomain: "movie-app-c34ee.firebaseapp.com",
  projectId: "movie-app-c34ee",
  storageBucket: "movie-app-c34ee.appspot.com",
  messagingSenderId: "164521210194",
  appId: "1:164521210194:web:5165eed3aeadaf0531ca8b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);