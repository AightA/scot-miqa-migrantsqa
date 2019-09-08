const express = require("express");
const router = express.Router();

const users = require("./users");
const questions = require("./questions");
const answers = require("./answers");


const status = require("./status");

router.use("/users", users);
router.use("/status", status);
router.use("/questions", questions);
router.use("/answers", answers);
module.exports = router;
