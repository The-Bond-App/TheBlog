// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

import { 
  
  collection, 
  addDoc, 
  serverTimestamp, 
  getDocs,
  initializeFirestore,
  persistentLocalCache,
  enableNetwork,
  disableNetwork
} from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID, 
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore with persistence
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    cacheSizeBytes: 40 * 1024 * 1024, // No eviction based on size
    settings: { gc: "auto" }             // Disable automatic cache cleanup
  })
});

const auth = getAuth(app);

signInAnonymously(auth)
  /*.then((userCredential) => {
    console.log("Signed");
  })*/
  .catch((error) => {
    console.error("Auth error:", error);
  });

// Network status utilities (optional)
const setNetworkStatus = async (enabled) => {
  return enabled ? await enableNetwork(db) : await disableNetwork(db);
};

export { db, collection, addDoc, serverTimestamp, getDocs,setNetworkStatus };