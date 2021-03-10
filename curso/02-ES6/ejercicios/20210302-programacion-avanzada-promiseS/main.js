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
    const graphDiv = d.createElement("div");
    const graphH2 = d.createElement("h2");
    const graphH2Text = d.createTextNode("Temperatura por día");
    graphH2.appendChild(graphH2Text);
    graphDiv.appendChild(graphH2);
    const graphWrapper = d.createElement("div");
    graphWrapper.setAttribute("class", "ct-chart ct-perfect-fourth")
    graphDiv.appendChild(graphWrapper);
    weatherDiv.appendChild(graphDiv);
    d.querySelector(".weatherSection").appendChild(weatherDiv);
    let data = {
        labels: [],
        series: [[], [], []]
    };

    json.daily.map((day, index) => {
        const date = new Date(day.dt * 1000);
        const weekDay = date.getDay();
        const weekdayText = [];
        weekdayText[0] = "Domingo";
        weekdayText[1] = "Lunes";
        weekdayText[2] = "Martes";
        weekdayText[3] = "Miércoles";
        weekdayText[4] = "Jueves";
        weekdayText[5] = "Viernes";
        weekdayText[6] = "Sábado";
        data.labels.push(weekdayText[weekDay]);
        data.series[0].push(day.temp.max - 273.23);
        data.series[1].push(day.temp.min - 273.23);
        data.series[2].push(day.temp.day - 273.23)
    })

    new Chartist.Line('.ct-chart', data);

}

//FUNCIÓN QUE OBTIENE LOS DATOS CON UNA PROMESA
const myPromiseWeatherFunction = (lat, lon) => {

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
//Llamada a la función que devuelve la promesa
/* 
myPromiseWeatherFunction(lat, lon)
//en .then ponermos la función que va a ser llamada cuando todo va bien
    .then (json => {
        printWSect(json,d);
        console.log(json);
    })
    //en .catch ponemos la función que va a ser llamada cuando hay un error
    .catch(error => console.error("ERROR CATCH:", error)); //función reject

 */

//FUNCIÓN QUE OBTIENE LOS DATOS CON ASYNC / AWAIT

async function getWeatherAsync(lat, lon) {
    if (!WEATHER_API_KEY)
        console.log(new Error("An API KEY must be provided on /JS/callback.js line 4 for function getQuestions to work"));
    else if (!lat || !lon)
        console.log(new Error("You must provide latitue and longitude"));
    else {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${WEATHER_API_KEY}`)

        if (response.ok) return response.json();
        else console.log(new Error(""))
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else console.log(new Error("ERROR: API MALA!"));
            })
    }
}


getWeatherAsync(lat, lon)
    .then(response => {
        console.log(response);
        printWSect(response, d);
    })








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


//https://gionkunz.github.io/chartist-js/index.html


//TODO Transformar el callback del ejercicio de preguntas y respuestas a PROMESAS

//TODO aplicar mi quiz a las funciones de preguntas

//TODO hacer una función con async/await que gestione las funciones que nos dan