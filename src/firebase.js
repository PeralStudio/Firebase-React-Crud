import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnyluF-_4D-_NVtM-Iksuc7Bf0U7JpfDk",
  authDomain: "fb-crud-react-74826.firebaseapp.com",
  databaseURL: "https://fb-crud-react-74826.firebaseio.com",
  projectId: "fb-crud-react-74826",
  storageBucket: "fb-crud-react-74826.appspot.com",
  messagingSenderId: "638930867776",
  appId: "1:638930867776:web:961df22d34952ad99531a5",
  measurementId: "G-7E8H3T62C4"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);



export const db = fb.firestore();

