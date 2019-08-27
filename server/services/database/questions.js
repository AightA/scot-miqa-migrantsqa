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
		pool.query("SELECT * FROM questions", (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result.rows);
			}
		});
	});
};
module.exports= {getAllQuestions}