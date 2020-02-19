const express = require("express");
const app = express();
const formidableMiddleware = require("express-formidable");
const cors = require("cors");
const axios = require("axios");
const generateHash = require("./utils/generateHash");
app.use(formidableMiddleware());
app.use(cors());
require("dotenv").config();

app.get("/", async (req, res) => {
  const hash = generateHash();
  console.log(hash);
  const response = await axios.get(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9a1739125a0fc37b9fd7ef0a9fb06592&hash=" +
      hash
  );
  console.log(response.data.data);

  res.json({ message: "ok" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});
app.listen(process.env.PORT, (req, res) => {
  console.log("Server started");
});
