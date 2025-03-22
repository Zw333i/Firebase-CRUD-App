// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYQ5vNKu8j0tPioD7w8aITq_diMo4HQlE",
    authDomain: "mycrudapp-8e3c3.firebaseapp.com",
    projectId: "mycrudapp-8e3c3",
    storageBucket: "mycrudapp-8e3c3.firebasestorage.app",
    messagingSenderId: "540214364727",
    appId: "1:540214364727:web:aeabedf964f85bb5c54db2",
    measurementId: "G-NLPXKK3QKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Export Firebase and Firestore instance
export { app, db };
