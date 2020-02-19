const md5 = require("md5");
require("dotenv").config();

const generateHash = () => {
  const hash = md5(
    1 + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY
  );
  return hash;
};

module.exports = generateHash;
