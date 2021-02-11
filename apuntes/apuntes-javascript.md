#JAVASCRIPT
Es un lenguaje Turing-completo (3a Generación). Tienen:

- Almacenamiento de datos en memoria principal (RAM).
- Control de flujo de ejecución

un archivo.js se llama desde html con:
`<script src="js/archivo.js"></script>`
y se pueden llamar tantos como sea necesario en un mismo html.

/_Me he cargado los apuntes del primer día de JS, no se como_/

##Notas:

* Orden de precedencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence
* `i++` es lo mismo que `i+=1` que es lo mismo que `i=i+1`
En strings `i+="A"` concatena al final una A ---> cadenaA 
* Para ver pasos de asignación de variables de un código: http://pythontutor.com/javascript.html#mode=edit

##BUCLES
Es necesario:

- Inicialización estado de partida
- Condición de parada
- Cambio en las condiciones.

WHILE:
`let i = 0; while (i<3) {console.log("Bitelchús"); i++}`



##FUNCIONES
Son el equivalente sintáctico a los verbos (por ello ponerles nombres de verbo (y en inglés))
`function sayHi (name) { console.log("Hola", name; return "valor retorno"}`

Las funciones tienen una entrada (lo que hay entre `()`). Tienen un ámbito de bloque (lo que hay entre `{}`). La función devuelve lo que hay detrás del `return`

Podemos llamar a la función en nuestro código: `sayHi();`
Es importante que en JS no importa si llamamos a una función antes de haberla definido (Eso se llama *Hoisting*. en otros lenguajes eso no se puede hacer). Aún así la **buena práctica** es hacer *usar* la función *después de definir*.

La entrada de la función (lo que hay entre `()`) son los parámetros (o argumentos). Esas variables se declaran en ese momento dentro de la función.

##ARRAYS (Colecciones)
Son estructuras de datos dinámicas.
Pueden contener datos de distinto tipo, e incluso otro array.
`let ages = []; ages[11,23,55,88];`
Tiene valores e índices. Los datos son los que van entre `[]` y el índice es el orden del dato dentro del array. (empezando por 0).

También se puede indicar los datos de un array de esta forma:
`ages[0]=11; ages[1]=23` donde definimos entre `[]` el orden que ocupa el dato. y accedemos al dato con `console.log(ages[1])`;

###Propiedades y métodos de los Arrays
Propiedad tamaño del array: `array.lenght`
Para añadir un elemento al array: `array.push()`


##OBJETOS
Es una estructura de datos, que en su interior contiene propiedades (variables) y métodos (funciones).
/*JavaScript Object Notation (JSON)*/
`let me = { name: "Roberto", age: 44, skills: ["css", "html"]};`
las propiedades pueden ser de cualquier tipo de dato (incluso otros objetos).
Para entrar a las propiedades lo hacemos así: `me.name;`
Podemos cambiar incluso de ellas: `me.name="Max Power";` (si no existiera esa propiedad del objeto `me` se añadiría.)

Los objetos se pasan por referencia. Hay que tener cuidado ya que si "copiamos" un objeto en otro, cuando cambiamos una propiedad del segundo, vamos a modificar el primero. Esto mismo le pasa a un Array.