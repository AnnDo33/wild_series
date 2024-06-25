const express = require("express");
const { browse } = require("../../../controllers/programsActions");

const router = express.Router();

router.get("/", browse);

module.exports = router;
