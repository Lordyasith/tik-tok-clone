
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =firebase.initializeApp(
    {
      apiKey: "AIzaSyDeuVOv53slm949VLdtcuTJ6cNw_L28-xU",
      authDomain: "tik-tok-clone-e6dea.firebaseapp.com",
      projectId: "tik-tok-clone-e6dea",
      storageBucket: "tik-tok-clone-e6dea.appspot.com",
      messagingSenderId: "1000175011109",
      appId: "1:1000175011109:web:d82481dcdf0ab1dcd986cc",
      measurementId: "G-EX7YLQYTGE"
      }
    
);
const db=firebaseApp.firestore();
export default db;


