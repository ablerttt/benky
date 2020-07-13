import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAJ7S7Mta3-GIEovHbFcrcpyT-6gZUxORk",
  authDomain: "flashcards-951ca.firebaseapp.com",
  databaseURL: "https://flashcards-951ca.firebaseio.com",
  projectId: "flashcards-951ca",
  storageBucket: "flashcards-951ca.appspot.com",
  messagingSenderId: "267634257754",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
