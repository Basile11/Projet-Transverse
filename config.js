import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {

  apiKey: "AIzaSyBbcQDnxmxGBsaUVn8iSw-BgWvdtd1dX_A",
  authDomain: "projet-transverse-l3.firebaseapp.com",
  projectId: "projet-transverse-l3",
  storageBucket: "projet-transverse-l3.appspot.com",
  messagingSenderId: "106888694942",
  appId: "1:106888694942:web:bf79abc8ec92f03e57bf8f",
  measurementId: "G-W1LYD4SXNJ"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

export { firebase, app };