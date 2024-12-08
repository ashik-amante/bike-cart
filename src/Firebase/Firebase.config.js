// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJIvu304lEOhbZtmPUMXggaUlwxkpfAE0",
  authDomain: "glass-shop-auth.firebaseapp.com",
  projectId: "glass-shop-auth",
  storageBucket: "glass-shop-auth.firebasestorage.app",
  messagingSenderId: "26938637546",
  appId: "1:26938637546:web:08ad0d5281b67bd940ab93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth