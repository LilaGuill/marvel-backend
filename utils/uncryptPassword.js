const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const uncryptPassword = (password, user) => {
  try {
    const checkHash = SHA256(user.salt + password).toString(encBase64);
    if (checkHash === user.hash) {
      return {
        _id: user.id,
        token: user.token,
        account: user.account
      };
    } else {
      return res.status(401).json("User not found");
    }
  } catch (error) {
    return res.status(400).json({ message: "an error" });
  }
};

module.exports = uncryptPassword;
