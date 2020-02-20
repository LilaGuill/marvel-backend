const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: { type: String, unique: true },
  token: String, //le Token permettra d'authentifier l'utilisateur
  hash: String,
  salt: String,
  //l'objet account contiendra les données non sensibles
  account: {
    username: { type: String, unique: true, lowercase: true },
    phone: { type: String }
  }
});

module.exports = User;
