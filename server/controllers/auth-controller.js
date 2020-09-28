import admin from "./firebase-service";

export const createUser = async (req, res) => {
  const { email, phoneNumber, password, firstName, lastName } = req.body;

  const user = await admin.auth().createUser({
    email,
    phoneNumber,
    password,
    displayName: `${firstName} ${lastName}`,
  });

  return res.send(user);
};
