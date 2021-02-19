# JAVASCRIPT

Es un lenguaje Turing-completo (3a Generación). Tienen:

- Almacenamiento de datos en memoria principal (RAM).
- Control de flujo de ejecución

un archivo.js se llama desde html con:
`<script src="js/archivo.js"></script>`
y se pueden llamar tantos como sea necesario en un mismo html.
ponerlo al final del `<body>` para que cargue todo el html antes de empezar el script.
También se puede poner en el `<head>` siempre que añadamos la palabra **defer**:
`<script defer src="js/archivo.js"></script>`
/_Me he cargado los apuntes del primer día de JS, no se como_/

## Notas:

- Orden de precedencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence
- `i++` es lo mismo que `i+=1` que es lo mismo que `i=i+1`
  En strings `i+="A"` concatena al final una A ---> cadenaA
- Para ver pasos de asignación de variables de un código: http://pythontutor.com/javascript.html#mode=edit

## BUCLES

Es necesario:

- Inicialización estado de partida
- Condición de parada
- Cambio en las condiciones.

WHILE:
`let i = 0; while (i<3) {console.log("Bitelchús"); i++}`

## FUNCIONES

Son el equivalente sintáctico a los verbos (por ello ponerles nombres de verbo (y en inglés))
`function sayHi (name) { console.log("Hola", name; return "valor retorno"}`

Las funciones tienen una entrada (lo que hay entre `()`). Tienen un ámbito de bloque (lo que hay entre `{}`). La función devuelve lo que hay detrás del `return`

Podemos llamar a la función en nuestro código: `sayHi();`
Es importante que en JS no importa si llamamos a una función antes de haberla definido (Eso se llama _Hoisting_. en otros lenguajes eso no se puede hacer). Aún así la **buena práctica** es hacer _usar_ la función _después de definir_.

La entrada de la función (lo que hay entre `()`) son los parámetros (o argumentos). Esas variables se declaran en ese momento dentro de la función.

## ARRAYS (Colecciones)

Son estructuras de datos dinámicas.
Pueden contener datos de distinto tipo, e incluso otro array.
`let ages = []; ages[11,23,55,88];`
Tiene valores e índices. Los datos son los que van entre `[]` y el índice es el orden del dato dentro del array. (empezando por 0).

También se puede indicar los datos de un array de esta forma:
`ages[0]=11; ages[1]=23` donde definimos entre `[]` el orden que ocupa el dato. y accedemos al dato con `console.log(ages[1])`;

### Propiedades y métodos de los Arrays

Propiedad tamaño del array: `array.lenght`
Para añadir un elemento al array: `array.push()`

## OBJETOS

Es una estructura de datos, que en su interior contiene propiedades (variables) y métodos (funciones).
/_JavaScript Object Notation (JSON)_/
`let me = { name: "Roberto", age: 44, skills: ["css", "html"]};`
las propiedades pueden ser de cualquier tipo de dato (incluso otros objetos).
Para entrar a las propiedades lo hacemos así: `me.name;`
Podemos cambiar incluso de ellas: `me.name="Max Power";` (si no existiera esa propiedad del objeto `me` se añadiría.)

Los objetos se pasan por referencia. Hay que tener cuidado ya que si "copiamos" un objeto en otro, cuando cambiamos una propiedad del segundo, vamos a modificar el primero. Esto mismo le pasa a un Array.

## LIBRERÍAS

Conjunto de funciones reutilizables sobre una misma temática. Van a complementar el estandar de JSVanilla.
moment.js --> funciones para gestión de datos de fechas.

## ES6

### let y const

No usar var para las variables. Usar let para todo lo que pueda cambiar y const para aquello que permanecerá constante en todo nuestro código (incluido cambio de referencia).

### arrow functions

Es un cambio de forma de escribir una función anónima:
`function () {}` ===> `() => {};`
por ejempplo:
`setTimeout(function() {console.log("Hola")}, 3000);` ===> `setTimeout(() => {console.log("Hola")}, 3000);`
Es necesariamente una funcion anónima, pero la *referencia* a la función anónima la podemos meter en una variable (o constante):
`const funcionA = () => {}` es lo mismo que `function funcionA () {}`
Si la función flecha tiene un return, y es de una única linea, no hace falta poner el return:
`const suma = (a,b) => return a+b` es lo mismo que `const suma = (a,b) => a+b`
Cuando tenemos un único parámetro los "()" son opcionales:
`const cuadrado = (a) => a*a` es lo mismo que `const cuadrado = a => a*a`

**ESTO YA LO VEREMOS, ahora lo he copiado de MDN**
    Diferencias y limitaciones: 
        No tiene sus propios enlaces a this o super y no se debe usar como métodos.
        No tiene argumentos o palabras clave new.target.
        No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
        No se puede utilizar como constructor.
        No se puede utilizar yield dentro de su cuerpo.