import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDo0Ly9RbR_ao54iksAZq00F5Fml5KC2tk",
  authDomain: "gizdodo-7e466.firebaseapp.com",
  databaseURL: "https://gizdodo-7e466.firebaseio.com",
  projectId: "gizdodo-7e466",
  storageBucket: "gizdodo-7e466.appspot.com",
  messagingSenderId: "601168881704",
  appId: "1:601168881704:web:16f399f0fe4079e790ad1d",
  measurementId: "G-CRBVDLXX3J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInit = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
