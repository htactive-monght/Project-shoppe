
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCKt1Y9uNhRSLbyiqzHQZAFO778RTBqMIk",
  authDomain: "project-intern-a363c.firebaseapp.com",
  databaseURL: "https://project-intern-a363c.firebaseio.com",
  projectId: "project-intern-a363c",
  storageBucket: "project-intern-a363c.appspot.com",
  messagingSenderId: "132293691302",
  appId: "1:132293691302:web:aa1770b89a5c173661f167",
  measurementId: "G-GGC4Y439D5"
};
   firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth()
   const database = firebase.database()
   const storage = firebase.storage()
   export{auth,database,storage}

   
