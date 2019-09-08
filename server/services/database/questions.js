const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

/**
 * This is used for testing the Client<->API connection, but this operation
 * won't be allowed in the final version of the project as it is a
 * security risk to expose all users
 */

const getAllQuestions = () => {

  return new Promise((resolve, reject) => {
    pool.query(`select questions.content, users.username ,questions.date_posted, questions.id
		from questions 
		INNER JOIN users ON users.id = questions.user_id order by questions.date_posted desc limit 10`, (error, result) => {
        if (error) {
          console.error(error)
          reject(error);
        } else {
          resolve(result.rows);
        }
      });
  });
};



const insertQuestions = (
  content,
  date_posted,
  tags,
  is_answered,
  score,
  user_id
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO questions (content,date_posted ,tags,is_answered ,score,user_id)
       VALUES($1, $2, $3, $4, $5, $6)
       `,
      [content, date_posted, tags, is_answered, score, user_id],
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
module.exports = { getAllQuestions, insertQuestions };
