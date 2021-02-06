const firebaseConfig = {
  apiKey: "AIzaSyDCua7b7ziDK4biU0UV9W8_7X2-ERJkJNc",
  authDomain: "centralized-3338e.firebaseapp.com",
  projectId: "centralized-3338e",
  storageBucket: "centralized-3338e.appspot.com",
  messagingSenderId: "1079991015546",
  appId: "1:1079991015546:web:dfbe5c03f2e074b56e83c3",
  measurementId: "G-974N0C8Z4S",
}

import firebase from "firebase/app"
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
export default firebase
