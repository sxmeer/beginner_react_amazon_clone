import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyC03fIhyi8iFlEYr-Wq4RfUkGQrJ3wWmJg",
  authDomain: "clone-react-f5adc.firebaseapp.com",
  projectId: "clone-react-f5adc",
  storageBucket: "clone-react-f5adc.appspot.com",
  messagingSenderId: "1048534553129",
  appId: "1:1048534553129:web:8ba4393a88b46537848238",
  measurementId: "G-ZL14C3GDFB"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };