const express = require("express");
const { getData } = require("../controllers");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Bro");
})

router.get("/address", getData)

module.exports = router;