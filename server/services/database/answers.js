const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getAllAnswers = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select users.id as user_id, users.username, tmp.id as question_id,  
      answers.id, answers.is_accepted, answers.content, answers.date_answered
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

const acceptAnswer = (isAccepted, id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `update answers set is_accepted=$1 where id=$2`,
      [isAccepted, id],
      (error, result) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};


module.exports = { getAllAnswers, acceptAnswer };
