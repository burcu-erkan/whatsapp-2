import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAs3ozKqj4w-KLBc2cNx68FhMUHdUsROl4",
  authDomain: "whatsapp-2-9fb42.firebaseapp.com",
  projectId: "whatsapp-2-9fb42",
  storageBucket: "whatsapp-2-9fb42.appspot.com",
  messagingSenderId: "477460029084",
  appId: "1:477460029084:web:2b293af3c01e91a4f99759"
};
// set up access to my firebase database

const app = !firebase.apps.length
 ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export {db, auth, provider};

