// Un ApiKey es una llave para usar una api de internet, algunas son de pago y otras son gratuitas
// Sirven para limitar el número de peticiones por desarrollador
// Para conseguir un API KEY visita: https://quizapi.io/clientarea/settings/token
const QUESTIONS_API_KEY = "GwwieLpi2BFsqKJ91DyCk4qKtOnMOHEzNh9WQ6l3";

/**
 * This function will always return a `Promise` which will resolve to a `JSON` of questions and reject an Error
 *
 * For using this function, you must provide an `API KEY` on line 4 of `/JS/promise.js` for using the function
 * @typedef {object} QuestionData `QuestionData` is a JSON described in https://quizapi.io/docs/1.0/overview
 * @param {number} [maxNumberQuestions=5] maxNumberQuestions How many questions do you like to have, minimum 1
 * @returns {Promise<QuestionData>} A Promise which resolve to QuestionData
 */
function getQuestions(maxNumberQuestions = 5) {
	return new Promise((resolve, reject) => {
		if (!QUESTIONS_API_KEY)
			throw new Error("An API KEY must be provided on /JS/promise.js line 4 for function getQuestions to work");
		else if (maxNumberQuestions < 1)
			throw new Error("maxNumberQuestions must be greater than 0");
		else {
			fetch(`https://quizapi.io/api/v1/questions?apiKey=${QUESTIONS_API_KEY}&category=code&difficulty=Easy&limit=${maxNumberQuestions}&tags=JavaScript`)
			.then(response => response.json())
			.then(questions => resolve(questions))
			.catch(error => reject(error));
		}
	});
}