import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDdEsJ-USovhXsUhqj9E2yvTLIKxr6JBSE",
  authDomain: "portafoliojiv.firebaseapp.com",
  databaseURL: "https://portafoliojiv.firebaseio.com",
  projectId: "portafoliojiv",
  storageBucket: "portafoliojiv.appspot.com",
  messagingSenderId: "360936052932",
  appId: "1:360936052932:web:ed24e84600598bfecad191",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
