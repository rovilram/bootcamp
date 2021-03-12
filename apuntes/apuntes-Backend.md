# BACKEND

## NODE.JS

Es un interprete en tiempo real de JavaScript basado en la consola. Es el motor del navegador chromium, pero ampliado para todas las necesidades que pueden aparecer en servidor (mandar correos, acceder a ficheros, servicios web...)

## NPM

Es el _gestor de paquetes_ de node. Con él vamos a poder incluir en nuestro proyecto todas aquellas librerías y recursos que necesitamos.ls
También nos va a gestionar las versiones y conflictos entre todos ellos.
Empezamos un nuevo proyecto node con `npm init` Nos va a sacar un asistente en modo texto
Podemos empezar con npm desde el inicio del proyecto, o una vez que ya tengamos creado cosas en el proyecto y queramos usar recursos desde npm.
Esto nos genera un _package.json_ que podemos editar luego a nuestro gusto, o borrarlo si no queremos continuar el proyecto en npm.

Para instalar un paquete lo podemos instalar con: `npm install moment --save`
Al bajarlo con npm vamos a bajar moment y todas las dependencias que tenga, además si se actualiza podremos actualizarlo directamente en nuestro proyecto.
la opción `--save` es por defecto, no hace falta ponerla.
Se va a crear una carpeta nueva _node_modules_ que es donde se van a ir metiendo los paquetes que instalemos (y sus dependecias). **NO TOCAR ESA CARPETA**
También se crea un package-lock.json que **no se puede tocar** (es un archivo interno de npm).
Cuando hacemos el install va a modificarse el package.json incluyendo los paquetes descargados, con su versión. Pone algo como `^2.29.1` que quiere decir que pueda actualizarse siempre que no cambie el número de versión principal (el primero). Si pone `~2.29.1` quiere decir que se actualice solo si cambia el último número (que son las diferentes versiones que arreglan bugs)(_senmver_). Si queremos ver si hay actualizaciones de nuestros paquetes tenemos que hacer `npm update`
Se pueden eliminar los paquetes usando `npm remove moment`

La carpeta _node_modules_ **NO** hay que subirla a git. Para ello hay que meterla en .gitignore.
Tambien evitar meter en git _package-lock.json_

Si clonamos, lo primero que tendremos que hacer es un `npm install` que va a leer nuestro package.json y va a volver a descargar y guardar todas las dependencias de nuestro proyecto.

Para importar los paquetes en nuestro código vamos a usar el método **require()** que no existe en navegador, solo en **node**:
`const moment = require("moment");` (esta forma de importar viene de commonjs)
(Para navegador **no se puede usar** _require_ hay que usar la forma ECMA que es con \*\*)

Hay paquetes que no son usados directamente en el código, sino que son herramientas que como desarrollador uso en mi trabajo (para minificar código, testear, sass,...). Estos paquetes no los vamos a querer en _producción_ solo las queremos en _desarrollo_. Para ello los instalamos con `npm --install-dev nombrePaquete`

## HTTP

Es un _protocolo_ de comunicación entre máquinas. Es el que se usa para las comunicaciones Web. En él se define la infraestructura cliente / servidor, donde el cliente hace una petición y el servidor está a la espera de esta y responde.
Es un protocolo de **texto**. Todo lo que se envía y recibe es texto.
un servidor a la vez puede actuar como cliente al comunicarse con otro equipo. Así por ejemplo un servidor web puede requerir un servicio de base de datos que le va a dar un servidor de base de datos.
Es un protocolo _unidireccional_ haciéndose primero la petición cliente a servidor (momento en el que se inicia la comunicación) y luego la respuesta de vuelta. Con eso finaliza la comunicación.

EL protocolo se define con `http://direccionIP:puerto/`
(también está el protocolo http seguro _https_)
La _direccion IP_ se traduce a nombres de dominio, mediante los servidores DNS.
El _Puerto_ es el canal por el que se produce la comunicación. Por defecto http va por el puerto 80.

El _paquete HTTP_ es la base de la comunicación entre cliente y servidor. Para nosotros es una estructura de datos (JSON) que tiene dos partes principales:

- HTTP Header Son una serie de clave:valor con datos necesarios para el protocolo.
  Muy importante incluir siempre (en petición y en respuesta) la cabecera (por ejemplo "Content-Type": "text/html") donde vamos a decir de que tipo MIME es el contenido del body del paquete.
- Body Es el contenido propiamente dicho de la comunicación.

Hay otros protocolos en la comunicación web. Por ejemplo está el _Web Sockets_ que es el que usa por ejemplo Firebase para sus comunicaciones. En este caso es _bidireccional_. La conexión es _persistente_, y se va a mantener continuamente hasta que no se cierre.
Consume más recursos que http, pero es más indicado para aplicaciones _real time_.

Además de protocolos web, hay protocolos para mail (SMTP, POP3,...), telnet, FTP....

# CRUD
En el protocolo http, en la petición que hace el cliente al servidor, puede incluir la *finalidad* de esa petición. Estas siguen el concepto **CRUD**
CRUD          HTTP    
Create  -->   POST
Read    -->   GET
Update  -->   PUT
Delete  -->   DEL

Estos métodos son los que pondríamos en un *form*ulario HTML en el atributo *method*. Normalmente vamos a usar solo dos de ellos:
* post: Estas peticiones incluyen datos que deben ser tratados.
* get: Estas peticiones se usan para pedir algo.

Nosotros en **backend** vamos a atender solicitudes *get* cuando queramos *mandar* datos.
Asi el servidor puede enrutar las peticiones que son de escritura, con las de lectura, ... 

Las peticiones no siempre las vamos a hacer directamente desde el navegador (no nos sirve en SPA), ni desde formularios, sino que las vamos a hacer con `fetch`.
Fetch por defecto hace una petición por *get*



## ARRANCAR SERVIDOR WEB EN NODE

```javascript
//importamos la librería http que viene de serie en node
const http = require("http");

//configuramos ip y puerto
const host = "localhost"; //127.0.0.1
const port = 8080;

//creamos el servidor
const server = http.createServer((request, response) => {
  //En request va a tener la petición y en response vamos a mandar nosotros nuestra respuesta.
  //Aquí es donde va a ir la "Bussines logic"
  //todo el código "backend", recibir peticiones y elaborar las respuestas.
  console.log("Petición recibida", request);

  response.writeHead(200, { "Content-Type": "text/html" }); //escribe en el head de la respuesta
  response.write("Hola Mundo"); //escribe el body de la respuesta
  response.end(); // Envía la respuesta.
});
//arrancamos el servidor creado.
server.listen(port, host, () => {
  console.log(`El servidor está funcionando en http://${host}:${port}`);
});
```

En _request_ nos va a venir un JSON con la petición y en _response_ vamos a mandar nosotros nuestra respuesta.
Cada uno de ellos tiene métodos para acceder y escribir en ellos.

## Nodemon

`sudo npm install -g nodemon`
Es un paquete que nos va a ayudar en nuestro desarrollo. Va a hacer que cada vez que modifiquemos nuestro código directamente va a "matar" node y va a volverlo a ejecutar para _reflejar los cambios en nuestro navegador_ cliente (como hace el "live server" de vscode para "front").
Una vez instalado lo vamos a llamar con `nodemon nombreArchivo.js` en vez de `node nombreArchivo.js`

Necesitamos poner el _"-g"_ y llamarlo con sudo ya que es para hacer una instalación global (para todos los proyectos).

## Endpoint

Podemos definir varias _rutas de acceso_ de nuestro navegador cliente en función de la URL:

```javascript
if (request.url === "/") {
  htmlResponse = "<h1>Hola Mundo</h1>";
}
if (request.url === "/hw") {
  htmlResponse = "<h1>Hola MUNDO CRUEL!!!!!!</h1>";
}
response.write(htmlResponse);
```

##

Cuando devolvemos una respuesta con un html, **NO VAMOS A ESCRIBIR DIRECTAMENTE EL CÓDIGO HTML**. Para ello podemos devoler un _fichero html_ ya creado.
`const fs = require("fs");`

```javascript
    {
    //cuidado esto es ASÍNCRONO
    fs.readFile("./fichero.html", (err, data) => {
        htmlResponse = data;
    })
```
Tenemos que tener en cuenta que si ese html tiene un css, lo vamos a tener que traer también (y hacer un endpoint también para ello y enlazarlo según esa URL en el css)
Este es el content-type para css: `"Content-Type": "text/html"`


## Express
Es un framework que va a acelerar el desarrollo de aplicaciones frontend.
```javascript

// 1) Importar dependencias
const express = require('express');

// 2) Configuración inicial
const server = express();
const listenPort = 8080;

// Folder with my frontend app
const staticFilesPath = express.static(__dirname + '/public');
server.use(staticFilesPath);

// JSON support
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// -------------- API REST --------------

server.get('/loadImage', (req, res) => {

  // JSON response
  res.send({ src: 'img/atlasV.jpg' });
});

// ...

// -------------- START SERVER --------------

server.listen(listenPort, () => console.log(`Server started listening on ${listenPort}`));


```
