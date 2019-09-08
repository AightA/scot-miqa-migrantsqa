const moment = require("moment");
const express = require("express");
const router = express.Router();
const questionDb = require("../services/database/questions");
const { authMiddleware } = require("../auth/passport");

/**
 * Get Questions
 */

router.get("/", (req, res) => {
  questionDb
    .getAllQuestions()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

/**
 * Post Questions
 */

router.post("/", authMiddleware, async (req, res, next) => {
  const { content, tags, isAnswered, score } = req.body;
  const userId = req.user.id;
  const datePosted = moment().format();
  questionDb
    .insertQuestions(content, datePosted, tags, isAnswered, score, userId)
    .then(() => {
      res.send({
        success: true,
        message: "Questions inserted"
      });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
