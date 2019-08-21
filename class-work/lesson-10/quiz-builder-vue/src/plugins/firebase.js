import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXNUu-fasG3svjAPGLdtwJcWQDDzc3xEo",
  authDomain: "myquizbuilder2019.firebaseapp.com",
  databaseURL: "https://myquizbuilder2019.firebaseio.com",
  projectId: "myquizbuilder2019",
  storageBucket: "myquizbuilder2019.appspot.com",
  messagingSenderId: "378982646689",
  appId: "1:378982646689:web:455ce9a1f77548a4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
