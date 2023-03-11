
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "cearacientifico-e3e85.appspot.com"
});

const db = admin.firestore()

module.exports = db