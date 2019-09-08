const express = require("express");
const router = express.Router();
const question = require("../services/database/answers");

router.get("/", (req, res) => {
    question
        .getAllAnswers()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;