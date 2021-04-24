import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALX0CHoVppd1QLcvTegXFckD0z_k_ckjA",
  authDomain: "linkedin-clone-app-ddfa4.firebaseapp.com",
  projectId: "linkedin-clone-app-ddfa4",
  storageBucket: "linkedin-clone-app-ddfa4.appspot.com",
  messagingSenderId: "813527468148",
  appId: "1:813527468148:web:502d87af48aa79e243e921",
  measurementId: "G-N42D6ZWSSC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
