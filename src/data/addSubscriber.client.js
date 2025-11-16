'use client';

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/clientConfig";  // Import Firestore instance

export const addSubscriber = async (email, subscribed = true) => {
  const subscriberData = {
    email,
    createdAt: new Date().toISOString(),
    subscribed,
  };

  try {
    // Add the subscriber to the "subscribers" collection in Firestore
    await addDoc(collection(db, "subscribers"), subscriberData);
    return true
  } catch (error) {
    console.log('catch de error to add doc')
    console.log(error)
    return false
  }
};

