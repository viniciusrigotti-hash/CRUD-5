import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBprErro1pvk5I4_B1u47uEAxwvTHz8B6U",
  authDomain: "cryd-b8bc5.firebaseapp.com",
  databaseURL: "https://cryd-b8bc5-default-rtdb.firebaseio.com",
  projectId: "cryd-b8bc5",
  storageBucket: "cryd-b8bc5.firebasestorage.app",
  messagingSenderId: "520514642843",
  appId: "1:520514642843:web:78ccc9a4ac84467b02373e",
  measurementId: "G-XT3NXVDZC8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);