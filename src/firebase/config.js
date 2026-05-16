import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3tKgpYi4fRsImGKd2RuCHWZCwi3ermFo",
  authDomain: "stockora-bd772.firebaseapp.com",
  projectId: "stockora-bd772",
  storageBucket: "stockora-bd772.firebasestorage.app",
  messagingSenderId: "994097933410",
  appId: "1:994097933410:web:dd96267fa9ff0dc1df753b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);