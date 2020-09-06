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

  doDeleteUser = () => {
    var user = this.auth.currentUser;
    user
      .delete()
      .then(() => {
        console.log("User successfully deleted.");
      })
      .catch((e) => {
        console.log(
          "An error happened trying to delete the current user: " + e
        );
      });
  };

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
