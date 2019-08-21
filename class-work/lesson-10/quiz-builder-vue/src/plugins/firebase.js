import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDObJSPczDYD0foBYIYQm7o0HZAJU565kc",
  authDomain: "myvuequize2019.firebaseapp.com",
  databaseURL: "https://myvuequize2019.firebaseio.com",
  projectId: "myvuequize2019",
  storageBucket: "myvuequize2019.appspot.com",
  messagingSenderId: "161934960834",
  appId: "1:161934960834:web:aee8e8c4ea311e1e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
