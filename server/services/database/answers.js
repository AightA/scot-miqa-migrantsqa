const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getAllAnswers = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select users.id as user_id, users.username, tmp.id as question_id, answers.content, answers.date_answered
            from (select * from questions order by date_posted desc limit 10) as tmp
            inner join answers on tmp.id = answers.question_id
            inner join users on users.id = answers.user_id order by date_answered desc limit 10;`,
      (error, result) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          console.log(result);
          resolve(result.rows);
        }
      }
    );
  });
};

const insertAnswer = (
  content,
  dateAnswered,
  tags,
  isAccepted,
  score,
  questionId,
  userId
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO answers (content,date_answered ,tags,is_accepted ,score,question_id,user_id)
         VALUES($1, $2, $3, $4, $5, $6, $7)
         `,
      [content, dateAnswered, tags, isAccepted, score, questionId, userId],
      (error, result) => {
        if (error) {
          return reject(error);
        }
        console.log(result);
        resolve(result.rows);
      }
    );
  });
};

module.exports = { getAllAnswers, insertAnswer };
