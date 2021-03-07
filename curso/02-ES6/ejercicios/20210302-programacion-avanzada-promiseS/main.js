'use strict';


const lat = 40.416775;
const lon = -3.703790;
const d = document;

/* 
//FUNCIÓN PARA OBTENER DATOS DE LA FUNCIÓN QUE USA CALLBACK
const json = getWeather(lat, lon, (error, json) => {
    if (error) console.log(`Error: ${error}`);
    else {
        console.log(json);
        printWSect(json, d)

    }
})
 */
const printWSect = (json, d) => {
    const weatherDiv = d.createElement("div");
    const h2 = d.createElement("h2");
    const h2Text = d.createTextNode(`El tiempo en ${json.timezone}`);
    h2.appendChild(h2Text);
    document.querySelector(".weatherSection").appendChild(h2)

    const curWDiv = d.createElement("div");
    const curWText = d.createTextNode(`El tiempo actual es: ${json.current.weather[0].description}`);
    curWDiv.appendChild(curWText);
    weatherDiv.appendChild(curWDiv);
    const curTempDiv = d.createElement("div");
    const curTempText = d.createTextNode(`La temperatura actual es de ${json.current.temp - 273.15}ºC`);
    curTempDiv.appendChild(curTempText);
    weatherDiv.appendChild(curTempDiv);
    d.querySelector(".weatherSection").appendChild(weatherDiv);
}

//FUNCIÓN QUE OBTIENE LOS DATOS CON UNA PROMESA
const myWeatherFunction = (lat, lon) => {

    return new Promise((resolv, reject) => {

        getWeather(lat, lon, (error, json) => {
            if (error) {
                reject(`Error: ${error}`); //se rechaza 
            }
            else {
                resolv(json);
            }
        })

    })

}

myWeatherFunction(lat, lon)
    .then (json => printWSect(json,d))
    .catch(error => console.warn("ERROR CATCH:", error)); //función reject



const myGetQuestionsCallBack = (questionsNum, callback) => {
    if (!QUESTIONS_API_KEY)
        callback(new Error("An API KEY must be provided on /JS/promise.js line 4 for function getQuestions to work"), null);
    else if (questionsNum < 1)
        callback(new Error("questionsNum must be greater than 0"), null);
    else {
        getQuestions(questionsNum)
            .then(questions => callback(null, questions))
            .catch(error => callback(error, null))
    }

}


const questions = myGetQuestionsCallBack(10, (error, questions) => {
    if (error) console.log(`Error: ${error}`);
    else {
        //questions.forEach(question => printQuestion (question), document.querySelector(".questionsWrapper"))
        console.log(questions)
        questions.forEach(question => {
            printQuestion(question, document.querySelector(".questionsWrapper"))
        })
    }
})



const printQuestion = (question, questionWrapper) => {

    const questionDiv = document.createElement("div");
    const titleH2 = document.createElement("h2");
    const titleTxt = document.createTextNode(question.question);
    titleH2.appendChild(titleTxt);
    questionDiv.appendChild(titleH2);
    questionWrapper.appendChild(questionDiv);

    Object.entries(question.answers).forEach(el => {
        const [key, value] = el;
        if (value != null) {
            printAnswer(value, questionDiv);
        }
    });
}


const printAnswer = (value, questionDiv) => {
    const answerDiv = document.createElement("div");
    const answerText = document.createTextNode(value);
    answerDiv.appendChild(answerText);
    questionDiv.appendChild(answerDiv);
}