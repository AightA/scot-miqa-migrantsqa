const express = require("express");
const router = express.Router();
const usersDb = require("../services/database/users");

/**
 * The route here will be: /users/ (remember the prefix users is defined in api/index.js)
 */
router.get("/", (req, res) => {
  usersDb
    .getAllUsers()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.send(500);
    });
});

router.post("/register", (req, res) => {
  //const { username, email, password } = req.body;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  usersDb
    .createUser(username, email, password)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.json({
        err
      });
      console.error(err);
      res.send(500);
    });
});

module.exports = router;
