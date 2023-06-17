import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBWgsMSpxh9MQKUgpI59IC5GPuUDF9wCqU",

    authDomain: "chat-app-299aa.firebaseapp.com",

    projectId: "chat-app-299aa",

    storageBucket: "chat-app-299aa.appspot.com",

    messagingSenderId: "472763563965",

    appId: "1:472763563965:web:b6b70e83d9fe6f36ce1cd4",

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore()

