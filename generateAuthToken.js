
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "./serviceaccount.json",
  scopes:
    "https://www.googleapis.com/auth/userinfo#email https://www.googleapis.com/auth/userinfo.profile",
});

auth
  .getAccessToken()
  .then((token) => console.log("token...", token))
  .catch((err) => console.log("err...", err));
