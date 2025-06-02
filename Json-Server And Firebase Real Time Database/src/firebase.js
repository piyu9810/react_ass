import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDmvZqfW1ZQSefN_CHDF9MpBUoK4zkfglU",
    authDomain: "mydata-f2837.firebaseapp.com",
    projectId: "mydata-f2837",
    storageBucket: "mydata-f2837.firebasestorage.app",
    messagingSenderId: "138883550970",
    appId: "1:138883550970:web:fa9982e9a1f8e6eb544343"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)