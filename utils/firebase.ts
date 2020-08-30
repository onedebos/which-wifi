import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
};

export const firebaseInit = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
