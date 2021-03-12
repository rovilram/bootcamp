// 1) Importar dependencias
const express = require("express");
const bodyParser = require("body-parser") //lo instala directamente express

// 2) Configuración inicial
const server = express(); //nos devuelve un objeto de la clase server de express.
const listenPort = 8080;
//como lo queremos en localhost es opcional ponerlo

// Folder with my frontend app
const staticFilesPath = express.static(__dirname + '/public');
//las variables de tipo "__dirname" las tiene creadas express
//En este caso __dirname tiene la ruta donde está nuestro js. 
//y a partir del cual queremos servir nuestros ficheros ya creados.

//para que empiece a usar el Path que hemos fijado.
server.use(staticFilesPath);

// JSON support
//esto hace que auntomáticamente todo los datos que se reciben en la petición ya hagan un JSON.parse() automaticamente.
server.use(express.urlencoded({ extended: false }));
//usar en estos métodos express.urlencoded() y express.json() en vez de los de bodyParser ya que estos están ya anticuados.
server.use(express.json());


// -------------- API REST --------------

server.get('/loadImage', (req, res) => {

    // JSON response
    res.send({ src: 'img/atlasV.jpg' });
});

//vamos a atender una petición por get a la URL /sendContact
server.get("/sendContact", (req, res) => {
    //recogemos los datos del formulario de la petición req
    console.log(req.body) //en GET el body está vacio.
    //mandamos una respuesta. Por defecto usa el content-type text/html.
    res.send("OK");
})
//ahora por post
server.post("/sendContact", (req, res) => {
    //recogemos los datos del formulario de la petición req
    console.log(req.body)
    //mandamos una respuesta. Él sabe que tipo de content-type es... no hay que hacer nada.
    res.send(`CONTENIDO DEL FORMULARIO: ${req.body.nombre}`);
})

const monsters = [
    {
        name: "blah",
        email: 10
    } ,
    {
        name: "bleh",
        email:20
    }
];

server.get("/sendMonster", (req, res) => {
    res.send(JSON.stringify(monsters));
})
server.post("/mkMonster", (req, res) => {
        const newMonster = {
            name: req.body.nombre,
            email: req.body.email
        };
        monsters.push(newMonster);
        res.send(JSON.stringify(monsters));

})


// -------------- START SERVER --------------
server.listen(listenPort, () => console.log(`Server started listening on ${listenPort}`));