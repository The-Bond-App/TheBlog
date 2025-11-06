import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";  // Import Firestore instance

export const addSubscriber = async (email, subscribed = true) => {
  const subscriberData = {
    email,
    date: new Date().toISOString(),
    subscribed,
  };

  try {
    // Add the subscriber to the "subscribers" collection in Firestore
    await addDoc(collection(db, "subscribers"), subscriberData);
    return true
  } catch (error) {
    return false
  }
};

