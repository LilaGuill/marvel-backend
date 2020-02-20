const md5 = require("md5");
require("dotenv").config();

const generateHash = ts => {
  const hash = md5(
    ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY
  );
  return hash;
};

module.exports = generateHash;
