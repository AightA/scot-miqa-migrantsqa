const express = require("express");
const moment = require("moment");
const router = express.Router();
const question = require("../services/database/answers");
const { authMiddleware } = require("../auth/passport");

router.get("/", (req, res) => {
  question
    .getAllAnswers()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

// /**
//  * Post Answers
//  */

router.post("/", authMiddleware, async (req, res, next) => {
  const { content, tags, score } = req.body;
  console.log(req.body);
  const userId = req.user.id;
  const dateAnswered = moment().format();
  const isAccepted = true;
  const questionId = 9;
  question
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

// app.post('/customers/:customerId/orders', (req, res) => {

//   const customerId = req.params.customerId;
//   const orderDate = req.body.order_date;
//   const orderReference = req.body.order_reference;
//   const customerIdQuery = `SELECT * FROM customers
//                            WHERE id = $1`;

//   if (!Number.isInteger(customerId) || customerId <= 0) {
//       return res.status(400).send(`Customer ID ${customerId} must be positive number`)
//   }
//   pool.query((customerIdQuery), [customer_id])
//       .then(result => {
//           if (result.rows.length <= 0) {
//               return res.status(400).send(`Customer with an ID of ${product_supplier_id} was not found`)
//           } else {
//               pool.query(`INSERT INTO orders (order_date, order_reference, customerId)
//                           VALUES ($1, $2, $3)`, [orderDate, orderReference, customerId])
//                   .then(() => res.send('Product add successfully'))
//                   .catch(e => console.error(e))
//           }

//       })

// })

module.exports = router;
