const express = require("express");
const moment = require("moment");
const router = express.Router();
const answerDb = require("../services/database/answers");
const { authMiddleware } = require("../auth/passport");

//to get the answers by question id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  question
    .getAnswerByQuestionId(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  answerDb
    .getAllAnswers()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post("/accept-answer", async (req, res, next) => {
  const { questionId, isAccepted, id } = req.body;
  answerDb
    .acceptAnswer(questionId, isAccepted, id)
    .then(() => {
      res.send({
        success: true,
        message: "Answer accepted"
      });
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});


module.exports = router;
