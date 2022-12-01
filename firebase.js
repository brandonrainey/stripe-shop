// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5tH5ckkwIpr1rlPocK2qlXmDoDN3n60s",
  authDomain: "stripe-shop-4797b.firebaseapp.com",
  projectId: "stripe-shop-4797b",
  storageBucket: "stripe-shop-4797b.appspot.com",
  messagingSenderId: "746649033896",
  appId: "1:746649033896:web:4bc17951aa84313677f69d"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db