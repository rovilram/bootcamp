// Un ApiKey es una llave para usar una api de internet, algunas son de pago y otras son gratuitas
// Sirven para limitar el número de peticiones por desarrollador
// Para conseguir un API KEY visita: https://home.openweathermap.org/api_keys
const WEATHER_API_KEY = "7302d365a535e9b73d4e624a79aea55f";

/**
 * This function will always return a `Promise` which will resolve to a `JSON` of questions and reject an Error
 *
 * For using this function, you must provide an `API KEY` on line 4 of `/JS/callback.js` for using the function
 * @typedef {object} weatherDataJSON json defined on their documentation: https://openweathermap.org/api/one-call-api
 * @param {number} lat The Latitude you want info from
 * @param {number} lon The Longitude you want info from
 * @param {(error: (Error | null), weatherData: (weatherDataJSON | null)) => any} callback A callback function which will be called when the API provides data
 *
 */
function getWeather(lat, lon, callback) {
		if (!WEATHER_API_KEY)
			callback(new Error("An API KEY must be provided on /JS/callback.js line 4 for function getQuestions to work", null));
		else if (!lat || !lon)
			callback(new Error("You must provide latitue and longitude", null));
		else {
			fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${WEATHER_API_KEY}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				else throw("ERROR: API MALA!");
			})
			.then(questions => callback(null, questions))
			.catch(error => {callback(error,null)});
		}
}