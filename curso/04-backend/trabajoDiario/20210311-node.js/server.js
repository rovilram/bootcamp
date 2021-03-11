//importamos la librería http que viene de serie en node
const http = require("http");
const fs = require("fs");

//configuramos ip y puerto
const host = "localhost"; //127.0.0.1
const port = 8080;

//creamos el servidor
const server = http.createServer((request, response) => {
    //usamos request para hacer peticiones y response para la respuesta
    //Aquí es donde va a ir la "Bussines logic"
    //todo el código "backend", recibir peticiones y elaborar las respuestas.
    let htmlResponse = "";
    response.writeHead(200, { "Content-Type": "text/html" }); //escribe en el head de la respuesta


    //vamos a hacer varios ENDPOINT 
    if (request.url === "/") {
        response.write("Hola Mundo");
        response.end();

    }
    else if (request.url === "/hw") {
        response.write("Hola MUNDO CRUEL!!!!!!");
        response.end();

    }

    else if (request.url === "/file") {
        //cuidado esto es ASÍNCRONO
        fs.readFile("./front/fichero.html", (err, data) => {
            response.write(data);
            response.end();
        })



    }
    else if (request.url === "/css") {
        //cuidado esto es ASÍNCRONO
        response.writeHead(200, { "Content-Type": "text/css" });
        fs.readFile("./front/style.css", (err, data) => {
            response.write(data);
            response.end();
        })
    }

    else if (request.url === "/weather") {
        response.writeHead(200, { "Content-Type": "application/json" });
        const weatherObj = {
            "lat": 40,
            "lon": 3,
            "timezone": "Europe/Madrid",
            "timezone_offset": 3600
        }
        response.write(JSON.stringify(weatherObj));x
        response.end();
    }

    else {
        //respuesta si queremos entrar por un endpoint que no existe
        response.writeHead(404, { "Content-Type": "text/css" });
        response.write("NO EXISTE LO QUE BUSCAS");
        response.end();

    }


})

//arrancamos el servidor creado.
server.listen(port, host, () => {
    console.log(`El servidor está funcionando en http://${host}:${port}`);
})

