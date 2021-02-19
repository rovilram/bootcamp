#DOM

##DOM(Document object model) y BOM (brownser object model)

El DOM es parte del BOM (es la rama "document"). El BOM son los objetos del navegador , que parten del padre comun "windows". Un hijo de él es "document" que es de donde parte el DOM.

##Manejar el DOM desde JS
Esta es la forma que no tenemos que usar: `<td onclick="putToken()">` poniendo el manejador del evento directamente en el elemento que queremos que dispare el evento.
guardamos el elemento que va a disparar el evento
`const pos00 = document.getElementById("position0_0");`
con la función addEventListener llamamos al evento y a la reacción (callback)
`pos00.addEventListener("click", putToken);`
`function putToken() {document.getElementById("position0_0").innerHTML="X";}`
Así cada vez que hagamos 'click' en ese elemento va a ejecutar la función que hayamos pasado como callback.

No podemos definir parámetros dentro de esa llamada a la callback. Tenemos que hacer una funcion anónima en linea dentro de la cual pasamos la funcion que queramos lanzar con el evento, pasándole los parámetros necesarios.
`pos00.addEventListener("click", function () {
    putToken(currentToken, this.id);
});`

Otros eventos:
    "change" se lanza cada vez que un elemento HTML cambia (un input).


Podemos cambiar el nombre de la clase de un elemento con:
`pos00.getElementById("position0_0).classname="nombreClase";`

También podemos añadir clases o quitarlas con `.classList.add` o `.classList.remove`

Para modificar el texto de un elemento podemos usar las propiedades `.innerHTML` o `.innerText`. Mejor usar **`.innerText`** ya que no parsea el HTML que le introducimos, y si quisieramos meter HTML en otro la forma que hay que hacer es crear nodos con .createEvent() y appendChild();


