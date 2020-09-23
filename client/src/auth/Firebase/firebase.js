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

  doPasswordReset = () =>
    this.auth.sendPasswordResetEmail(this.auth.currentUser.email);

  doCurrentPasswordVerification = async (currentPassword) => {
    const credential = this.auth.app.firebase_.auth.EmailAuthProvider.credential(
      this.auth.currentUser.email,
      currentPassword
    );
    await this.auth.currentUser.reauthenticateWithCredential(credential);
  };

  doPasswordUpdate = async (password) => {
    await this.auth.currentUser.updatePassword(password);
  };

  doVerifyEmail = (email) => {
    return email === this.auth.currentUser.email;
  };

  doUpdateEmail = async (newEmail) => {
    await this.auth.currentUser.updateEmail(newEmail);
  };

  doDeleteUser = () => this.auth.currentUser.delete();

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => {
    this.db.ref("users");
    console.log(this.db.ref("users"));
  };
}

export default Firebase;
