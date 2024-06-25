const express = require("express");

const programsRouter = require("./programs/router");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
