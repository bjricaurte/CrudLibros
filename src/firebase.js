// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_-agNYDkfjATDnccRoxJZJAPczYMdqMQ",
  authDomain: "crudlibros-8aee2.firebaseapp.com",
  projectId: "crudlibros-8aee2",
  storageBucket: "crudlibros-8aee2.appspot.com",
  messagingSenderId: "102145397973",
  appId: "1:102145397973:web:fb08a5803c5cb78cf57e5c",
  measurementId: "G-VP626PLMM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireStore(app);
export {db};
