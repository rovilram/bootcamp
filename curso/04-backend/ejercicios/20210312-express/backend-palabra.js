const words = [
    "abatojar",
    "abatí",
    "abayado",
    "abazón",
    "abañador",
    "abañadura",
    "abañar",
    "abderitano",
    "abdicación",
    "abdicar",
    "abdicativamente",
    "abdicativo",
    "abdomen",
    "abdominal",
    "abducción",
    "abductor",
    "abecedario",
    "abecé",
    "abedul",
    "abeja",
    "abejar",
    "abejarrón",
    "abejaruco",
];
const fs = require('fs');

const express = require("express");

const server = express();
const PORT = 8080;

// Folder with my frontend app
const staticFilesPath = express.static(__dirname + '/public');
server.use(staticFilesPath);


server.use(express.urlencoded({ extended: false }));
server.use(express.json())



fs.readFile('file.txt','utf8', function(err, data) {
    console.log("HOLA")
    console.log(data)
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(data);
    // return res.end();
  });







server.get("/getWord", (req, res) => {

    const random=Math.floor(Math.random()*words.length);
    res.send(JSON.stringify({word:words[random]}));
})



server.post("/postWord", (req, res) => {
    console.log(req.body.word)
    words.push(req.body.word);
    res.send(words);
})


server.listen(PORT,
    () => console.log(`Servidor levantado en puerto ${PORT}`)
)

