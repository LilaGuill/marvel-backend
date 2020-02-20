const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const cryptPassword = password => {
  const token = uid2(64); // creation du token Chaine de charactère aléatoire
  const salt = uid2(64); // creation du salt Chaine de charactère aléatoire
  const hash = SHA256(salt + password).toString(encBase64); //creation du hash
  //enBase64 est une méthode
  return { hash: hash, token: token, salt: salt };
};

module.exports = cryptPassword;
