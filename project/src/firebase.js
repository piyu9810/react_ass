import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBGwubsPLYHdjNfXc5oekPs2mIacFRNxMM",
    authDomain: "movie-booking-app-c0dee.firebaseapp.com",
    projectId: "movie-booking-app-c0dee",
    storageBucket: "movie-booking-app-c0dee.firebasestorage.app",
    messagingSenderId: "190307879845",
    appId: "1:190307879845:web:9be0553df3ea0a3f16764c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const firestore = getFirestore(app);