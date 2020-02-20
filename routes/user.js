const express = require("express");
const router = express.Router();
const formidableMiddleware = require("express-formidable");
router.use(formidableMiddleware());

const User = require("../models/User");
const cryptPassword = require("../utils/cryptPassword");
const uncryptPassword = require("../utils/uncryptPassword");

router.post("/user/signup", async (req, res) => {
  if (req.fields.username && req.fields.email && req.fields.password) {
    const searchEmail = await User.findOne({ email: req.fields.email });

    if (!searchEmail) {
      const crypted = cryptPassword(req.fields.password);

      try {
        const newUser = new User({
          email: req.fields.email,
          token: crypted.token,
          hash: crypted.hash,
          salt: crypted.salt,
          account: {
            username: req.fields.username,
            phone: req.fields.phone
          }
        });
        await newUser.save();
        res.json({
          token: newUser.token,
          email: newUser.email,
          username: newUser.account.username
        });
      } catch (error) {
        res.json({ message: error.message });
      }
    } else {
      res.json({ message: "User already exists" });
    }
  } else {
    res.json({
      message: "Missing information"
    });
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.fields.email });
    if (user) {
      const uncrypted = uncryptPassword(req.fields.password, user);

      res.json(uncrypted);
    } else {
      return res.status(400).json("User not found");
    }
  } catch (error) {
    return res.status(400).json({ message: "An error occurred" });
  }
});

module.exports = router;
