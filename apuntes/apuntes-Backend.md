# BACKEND

## NODE.JS
Es un interprete en tiempo real de JavaScript basado en la consola. Es el motor del navegador chromium, pero ampliado para todas las necesidades que pueden aparecer en servidor (mandar correos, acceder a ficheros, servicios web...)

## NPM
Es el *gestor de paquetes* de node. Con él vamos a poder incluir en nuestro proyecto todas aquellas librerías y recursos que necesitamos.ls
También nos va a gestionar las versiones y conflictos entre todos ellos.
Empezamos un nuevo proyecto node con `npm init` Nos va a sacar un asistente en modo texto
Podemos empezar con npm desde el inicio del proyecto, o una vez que ya tengamos creado cosas en el proyecto y queramos usar recursos desde npm.
Esto nos genera un *package.json* que podemos editar luego a nuestro gusto, o borrarlo si no queremos continuar el proyecto en npm.

Para instalar un paquete lo podemos instalar con: `npm install moment --save`
Al bajarlo con npm vamos a bajar moment y todas las dependencias que tenga, además si se actualiza podremos actualizarlo directamente en nuestro proyecto.
la opción `--save` es por defecto, no hace falta ponerla.
Se va a crear una carpeta nueva *node_modules* que es donde se van a ir metiendo los paquetes que instalemos (y sus dependecias). **NO TOCAR ESA CARPETA**
También se crea un package-lock.json que **no se puede tocar** (es un archivo interno de npm).
Cuando hacemos el install va a modificarse el package.json incluyendo los paquetes descargados, con su versión. Pone algo como `^2.29.1` que quiere decir que pueda actualizarse siempre que no cambie el número de versión principal (el primero). Si pone `~2.29.1` quiere decir que se actualice solo si cambia el último número (que son las diferentes versiones que arreglan bugs)(*senmver*). Si queremos ver si hay actualizaciones de nuestros paquetes tenemos que hacer `npm update`
Se pueden eliminar los paquetes usando `npm remove moment`

La carpeta *node_modules* **NO** hay que subirla a git. Para ello hay que meterla en .gitignore.
Tambien evitar meter en git *package-lock.json*

Si clonamos, lo primero que tendremos que hacer es un `npm install` que va a leer nuestro package.json y va a volver a descargar y guardar todas las dependencias de nuestro proyecto.

Para importar los paquetes en nuestro código vamos a usar el método **require()** que no existe en navegador, solo en **node**:
`const moment = require("moment");` (esta forma de importar viene de commonjs)


Hay paquetes que no son usados directamente en el código, sino que son herramientas que como desarrollador uso en mi trabajo (para minificar código, testear, sass,...). Estos paquetes no los vamos a querer en *producción* solo las queremos en *desarrollo*. Para ello los instalamos con `npm --install-dev nombrePaquete`