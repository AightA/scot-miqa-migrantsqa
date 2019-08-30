const express = require("express");
const router = express.Router();
const question = require("../services/database/questions");

router.get("/", (req, res) => {
	question
		.getAllQuestions()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
});

module.exports = router;
