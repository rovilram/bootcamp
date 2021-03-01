# JAVASCRIPT

Recursos: https://jskatas.org/
https://codewars.com

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
- **Template strings** Es lo mismo esto `` console.log(`hola ${nomUsuario}`) `` que esto `console.log("hola "+nomUsuario)`
  Admiten tabuladores y saltos de linea.
  Nos permite por ejemplo usar dentro un _operador ternario_

- **use strict** `"use strict";`
  Hace que una vez definido, el código debe cumplir una serie de cosas, como por ejemplo:
  - Hay que _declarar_ todas las variables antes de su uso.
  - No deja usar _delete_ de variables
  - el _arguments_ de las funciones no es válido,
    \*...
    El modo estricto se puede definir por ámbito (scope).

## BUCLES

Es necesario:

- Inicialización estado de partida
- Condición de parada
- Cambio en las condiciones.

WHILE:
`let i = 0; while (i<3) {console.log("Bitelchús"); i++}`

FOR:
`for (let i = 0; i < todosLosParrafos.length; i++) {todosLosParrafos[i].style.color="red";}`

FOREACH:
`array.forEach(parrafo => parrafo.style.color = "red");`
forEach admite una función con 3 parámetros (aunque los 2 últimos son opcionales). El primero es el _elemento_ al que se aplicará la función en cada iteración, el segundo el _índice_ de cada iteración y el tercero es el propio _array_ donde hemos aplicado forEach.
`array.forEach(element, index, array)`

## FUNCIONES

Son el equivalente sintáctico a los verbos (por ello ponerles nombres de verbo (y en inglés))
`function sayHi (name) { console.log("Hola", name; return "valor retorno"}`

Las funciones tienen una entrada (lo que hay entre `()`). Tienen un ámbito de bloque (lo que hay entre `{}`). La función devuelve lo que hay detrás del `return`

Podemos llamar a la función en nuestro código: `sayHi();`
Es importante que en JS no importa si llamamos a una función antes de haberla definido (Eso se llama _Hoisting_. en otros lenguajes eso no se puede hacer). Aún así la **buena práctica** es hacer _usar_ la función _después de definir_.

La entrada de la función (lo que hay entre `()`) son los parámetros (o argumentos). Esas variables se declaran en ese momento dentro de la función.

### Parámetros opcionales (Default Parameters)

Podemos definir los valores predefinidos de los parámetros en el inicio de la función, por si no los pasaran.
`function (num1, num2=3, num3=19) {}`
aunque realmente no es necesario pasar la misma cantidad de parámetros en la llamada de los que están definidos en la función.

### arguments

Es un objeto de _solo lectura_ que viene de serie en funciones que _no sean de tipo flecha_. Es "similar" a un array. Guarda todos los argumentos que se pasan en la función. **No está muy bien visto** hoy en día y no se usa a no ser que no se pueda hacer de otra forma con ES6.
`function func (a,b,c) {console.log(arguments[0]); console.log(arguments[1])}`

### function.length

Se puede saber el número de parámetros que espera una función en su declaración usando:
`function fun(a,b,c){}; console.log(fun.lenght)`

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
Es necesariamente una funcion anónima, pero la _referencia_ a la función anónima la podemos meter en una variable (o constante):
`const funcionA = () => {}` es lo mismo que `function funcionA () {}`
Si la función flecha tiene un return, y es de una única linea, no hace falta poner el return:
`const suma = (a,b) => return a+b` es lo mismo que `const suma = (a,b) => a+b`
Si una función flecha devuelve un _JSON_, siempre es obligatorio las llaves y el return:
`(number)=> { return { n:number } };`
Cuando tenemos un único parámetro los "()" son opcionales:
`const cuadrado = (a) => a*a` es lo mismo que `const cuadrado = a => a*a`

**ESTO YA LO VEREMOS, ahora lo he copiado de MDN**
Diferencias y limitaciones:
No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.

### Parámetros REST

Se usa cuando a la hora de escribir la función no sabemos cuantos parámetros van a ser necesarios.
`function (...theArgs) {}`
Dentro de la función va a aparecer un _array_ theArgs con todos los elementos que te pasan.

### Spread operator

Nos sirve para introducir un objeto _iterable_ en otro.
`parts = ["shoulder, "knees"]; lyrics = ["head", ...parts, "and", "toes"];`
**cuidado** si pasamos como iterable un string, nos va a trocear el string:
`parts = "shoulder"; lyrics = ["head", ...parts, "and", "toes"];` //dará ["s", "h", "o", "u", "l", etc....]
Con esto podemos clonar un array, de forma que no tengamos problemas al asignar un array al otro, ya que esto lo hace por referencia.
`const array2=[...array1];`

### Destructuring assigment

Me va a hacer asignaciones de variables a los valores de un array.
`let [a,b]=[1,2]; console.log(a); console.log(b)`
Si le ponemos un array con más valores en la asignación destructuring solo asignara las variables existentes, pero no dará error.
Si le ponemos más variables que tamaño del array, las variables restantes serán _undefined_
También lo podemos hacer con objetos: `let {a, b} ={a:10, b:20};` No influye el orden, asigna la variable por el nombre de la propiedad

Podemos combinar el **spread operator** y el **destructuring**:
`let [a1,b1, ...resto] = [10,20,30,40,50]; console.log(a1,b1); console.log(resto);`
con eso va a asignar a1 y b2 y con lo demás va a hacer un array resto.
Igual lo podemos hacer con objetos: `let {a2,b2,...rest2} = {a2:10, b2:20, c2:30, v4:40};`

### Array helpers

Los helpers son ayudas para hacer una serie de tareas de uso común. Los array helpers son funciones que van a hacer ciertas operaciones comunes en arrays(**Solo para arrays**). Todas esas funciones van a devolver un array, cosa que el forEach no hace.

#### map

**no es lo mismo** que el objeto **Map**. ver para que es porque puede ser útil.
Por ejemplo para multiplicar por dos todos los elementos del array haríamos algo como esto:
`numbers.forEach(numbers2= numbers2.map (number=> number*number); => {array[index]=number*2;});`
y lo podemos hacer con map:
`numbers= numbers.map (number=> number*2);`
Si la asignación de la hacemos a otro array, directamente hacemos un _array nuevo_ (no es una referencia como cuando asignamos dos arrays normalmente):
`numbers2 = numbers.map(number=>number*2)`Es un array completamente nuevo, no una referencia a numbers.
Los parámetros de map son los mismos que forEach (number, index, array)

#### filter

Nos sirve para separar unos valores de los de un array, metiéndolos en un nuevo array
Sus parámetro es una función flecha que recoge una expresión booleana, además de los dos parámetros opcionales index y array.
Va a pasar esa expresión a todos los elementos y va a devolver los que cumplan dicha expresión.
Así para sacar los números pares de un array y meterlo en otro: `let numEven = numbers.filter((number) => number % 2 === 0);`

#### reduce

No devuelve un array, devuelve _un solo valor_ resultante de procesar todos los elementos con la función que pasemos como parámetro.
Los parámetros de la función son el acumulador y el elemento (y los otros dos igual que las otras 2 funciones.)
Así para hacer un sumatorio:
`let total = numbers3.reduce((sum, number)=> sum+number);`

## ASINCRONÍA

JS es un lenguaje de programación **síncrono**: hace una operación detrás de otra en un cierto orden.
Aún siendo síncrono, tiene _capacidad_ de manejar la _asincronía_
NOTA: Para los lenguajes de programación que sí son asíncronos, ver esto: https://es.wikipedia.org/wiki/Problema_de_la_cena_de_los_fil%C3%B3sofos
JS es un **monohilo**: solo puede realizar una cosa a la vez y en orden.

como es monohilo siempre va a ir orden a orden y siempre va a acabar la orden que le ha llegado primero.

### PROMISES

`const myPromise = new Promise(function(resolve){}, function(rejectFunction) {});`
Va a recibir un parámetro que es una función (que es la operación asíncrona que no sabemos cuando va a acabar), que a su vez va a tener como poco un parámetro que va a ser la función resolvedora la función que va a realizarse cuando el evento asíncrono se realice.
Luego hacemos la llamada a la promesa y definimos en .then() la función que va a e
`myPromise.then(() => sayHello("Hola 6"));`
con .catch () definimos la función que ocurriría cuando no ocurre el evento asíncrono. Que será el segundo parámetro de la promesa (rejectFunction)

### FETCH

Nos va a hacer las promises necesarias para entrar a un API por ejemplo.
`fetch('url').then()`
TODO: Investigar sobre promises y fetch

## PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

Vamos a tener objetos, donde se definirán sus características (_propiedades_) y sus procesos (_métodos_).
Van a estar **encapsulados**, de forma que un objeto no va a poder tocar las características de otro. Para ello cada objeto va a tener métodos a través de los cuales se van a poder modificar sus propiedades.

Por ejemplo el objeto _caballo_ va a tener la propiedad _velocidad_, y el método _correr_ que va a poder modificar la velocidad (y que puede ser llamado por otro objeto (por ejemplo _jinete_)).

Dentro de un método vamos a poder llamar a las propiedades del propio objeto usando **this**: `this.speed`

Vamos a tener unos moldes (_clases_) a partir de la cual vamos a crear nuevo a objetos. Para ello empleamos el _operador_ **new**. Con ella **instanciamos** una clase (una instancia es lo mismo que un objeto).

```javascript
function Horse() {
  this.speed = 0;
  this.run = function () {
    this.speed++;
  };
}
```

Esta función Horse() es una función constructora.

Todas las instancias de una clase van a ser _iguales_ (van a tener iguales métodos y propiedades), pero pueden tener distintos valores de ellas. (**modularidad** del código).
Los demás objetos van a poder ver todos los métodos y propiedades que nosotros decidamos públicos. Esta es la _interfaz_ de nuestro objeto. (_las propiedades no deberían ser accesibles públicamente_ debe accederse a ellos con métodos _get_ y _set_)

Para hacer que una propiedad no sea visible desde el exterior (no sea pública) tenemos que declararla dentro del objeto (con let por ejemplo), y no referenciarlo con _this_.

```javascript
function Horse() {
  let speed = 0;
  this.run = function () {
    let.speed++;
  };
}
```

Las propiedades de cada objeto individual van a ser independientes de las de otros objetos instanciados del mismo molde (clase).
Los métodos de los objetos van a ser **referencias** a los métodos de la clase.

Con la **herencia** vamos a poder instanciar objetos que tienen los métodos y propiedades de una determinada clase, pero además se _extiende_ con otros propios. Además los métodos y propiedades heredados pueden estar _modificados_ respecto a la clase de la que se hereda (redefine lo heredado _overriding_).

La _herencia múltiple_ (heredar de dos clases distintas) no tienen sintaxis propia para ello, aunque se puede hacer. No lo vamos a ver aquí.

Cuando redefinimos un método, vamos a hacer que dos objetos vayan a actuar de forma distinta ante la llamada a un método. Eso es el **polimorfismo**. Van a hacer cosas distintas ante una misma llamada. Tienen distinto comportamiento ante un mismo mensaje.
Está ligado a la herencia, y a redefinir un método heredado.
El polimorfismo ocurre en _tiempo de ejecución_. En tiempo de programación nosotros no sabemos que tipo de objeto va a tener una variable. Cuando se ejecuta, por ejemplo vamos a seleccionar que un caballo sea un caballo normal o un pura sangre, que ante el método _correr_ va a correr más rápido.

La herencia hasta ES6 se hacía usando los _prototipos_. _A partir de ES6_ se usan las **clases**.

Intermedio a la instanciacion usando funciones constructoras y usando clases, se puede instarciar un objeto usando objetos literales.
```javascript
const otherHorse = {
  name: "pepe",
  lifePoints: 10,
  smoke: function () {
    this.lifePoints--;
  },
};
```
Esta forma no nos permite hacer varias copias del molde, ni heredar, etc...
Es como lo veníamos haciendo hasta ahora.

a partir de ES6 cuando queremos varios objetos de un mismo molde, empleamos las **CLASES**

