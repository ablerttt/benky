var admin = require("firebase-admin");

const config = {
  apiKey: "AIzaSyAJ7S7Mta3-GIEovHbFcrcpyT-6gZUxORk",
  authDomain: "flashcards-951ca.firebaseapp.com",
  databaseURL: "https://flashcards-951ca.firebaseio.com",
  projectId: "flashcards-951ca",
  storageBucket: "flashcards-951ca.appspot.com",
  messagingSenderId: "267634257754",
};

admin.initializeApp(config);

const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      console.log("Request auth ID");
      console.log(req.authId);
      return next();
    } catch (e) {
      console.log("Caught an error!!!");
      console.log(e);
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

module.exports = { checkIfAuthenticated };
