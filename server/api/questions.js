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

router.post("/update-question", async (req, res, next) => {
	const { content, date_posted, id } = req.body;
  
  questionDb.updateQuestions(content, date_posted, id )
	  .then(() => {
		res.send({
		  success: true,
		  message: "Question updated"
		});
	  })
	  .catch(err => {
		console.log(err);
		next(err);
	  });
  });

  router.delete("/delete-question", async (req, res, next) => {
    const {id} = req.body;
    
    questionDb.deleteQuestions(id )
      .then(() => {
      res.send({
        success: true,
        message: "Question updated"
      });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

// /**
//  * Post Answers
//  */

router.post("/:questionId/answers", authMiddleware, async (req, res, next) => {
  const { content, tags } = req.body;
  const userId = req.user.id;
  const dateAnswered = moment().format();
  const isAccepted = true;
  const questionId = parseInt(req.params.questionId);
  const score = 4;
  questionDb
    .insertAnswer(
      content,
      dateAnswered,
      tags,
      isAccepted,
      score,
      questionId,
      userId
    )
    .then(() => {
      res.send({
        success: true,
        message: "Answer inserted"
      });
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
