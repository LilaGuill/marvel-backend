const express = require("express");
const router = express.Router();
const formidableMiddleware = require("express-formidable");
router.use(formidableMiddleware());
const axios = require("axios");
const generateHash = require("../utils/generateHash");
const generateTs = require("../utils/generateTs");

router.post("/search", async (req, res) => {
  try {
    const ts = generateTs();
    const hash = generateHash(ts);
    const search = req.fields.search;
    const page = req.fields.page;
    const limit = 100;
    const offset = limit * page - 100;

    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&orderBy=name&limit=${limit}&offset=${offset}&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}`
    );

    res.json(response.data.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/comics", async (req, res) => {
  try {
    const ts = generateTs();
    const hash = generateHash(ts);
    const id = req.fields.id;
    const page = req.fields.page;
    const limit = 100;
    const offset = limit * page - 100;

    if (req.fields.id != 0) {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?orderBy=title&characters=${id}&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}`
      );
      res.json(response.data.data);
    } else {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?orderBy=title&limit=${limit}&offset=${offset}&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}`
      );
      res.json(response.data.data);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const ts = generateTs();
    const hash = generateHash(ts);
    const page = req.fields.page;
    const limit = 100;
    const offset = limit * page - 100;

    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=${limit}&offset=${offset}&ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}`
    );

    res.json(response.data.data);
  } catch (error) {
    res.json(response.data.data);
  }
});

module.exports = router;
