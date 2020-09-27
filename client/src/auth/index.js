import { withFirebase } from "./Firebase";
const admin = require("firebase-admin");

firebase
  .auth()
  .currentUser.getIdToken(/* forceRefresh */ true)
  .then(function (idToken) {
    // Send token to your backend via HTTPS
    // ...
  })
  .catch(function (error) {
    // Handle error
  });
