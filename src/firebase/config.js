// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7jEM-Ft4JN0iUd5d4Nm9vk8G7B57PTHg",
  authDomain: "artconcret-a0079.firebaseapp.com",
  projectId: "artconcret-a0079",
  storageBucket: "artconcret-a0079.appspot.com",
  messagingSenderId: "230667563050",
  appId: "1:230667563050:web:16efa88b8db2261d525353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);