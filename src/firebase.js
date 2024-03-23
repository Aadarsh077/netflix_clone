import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDm5too2sk2-wviyOyWdkdDEBBCyrvURBA",
    authDomain: "netflix-clone-37a01.firebaseapp.com",
    projectId: "netflix-clone-37a01",
    storageBucket: "netflix-clone-37a01.appspot.com",
    messagingSenderId: "263004400292",
    appId: "1:263004400292:web:373194ba3dd63b268e5431"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;