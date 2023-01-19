import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALyCI3lCsqkyoYuJQjhBdfaU42mmrQ-Qk",
    authDomain: "tinder-clone-94457.firebaseapp.com",
    projectId: "tinder-clone-94457",
    storageBucket: "tinder-clone-94457.appspot.com",
    messagingSenderId: "763070566317",
    appId: "1:763070566317:web:02e3b11d0bcb0176a31b24",
    measurementId: "G-QQHWHGXSN5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;