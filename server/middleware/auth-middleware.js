var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://flashcards-951ca.firebaseio.com",
  projectId: "flashcards-951ca",
});

const getAuthToken = (req, res, next) => {
  if (req.body.headers) {
    req.headers = req.body.headers;
  }
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
  // console.log(req);
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      // console.log(authToken);
      const userInfo = await admin.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      console.log("ERROR " + e);
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

module.exports = { checkIfAuthenticated };
