import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfV8sBxYNRzRv22LVD4fj7v2RXpX-L8js",
  authDomain: "react-movieapp-160bf.firebaseapp.com",
  projectId: "react-movieapp-160bf",
  storageBucket: "react-movieapp-160bf.appspot.com",
  messagingSenderId: "238671298823",
  appId: "1:238671298823:web:38d81fe3742e9b8e1c05a2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);