//import 'semantic-ui-css/semantic.min.css';
const express = require("express");
const router = express.Router();

const users = require("./users");
const questions = require("./questions");

const status = require("./status");

router.use("/users", users);
router.use("/status", status);
router.use("/questions",questions);
module.exports = router;
