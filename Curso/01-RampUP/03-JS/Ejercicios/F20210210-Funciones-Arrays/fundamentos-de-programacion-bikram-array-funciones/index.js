// Arrays
// 1.- Crea una variable de nombre 'arrayVacio' cuyo valor sea un array vacio
let arrayVacio = [];

// 2.- Crea una variable de nombre 'arrayNumeros' cuyo valor sea el array de numeros del 0 al 9 incluidos (0, 1, 2...)

let arrayNumeros = [];

for (let i = 0; i < 10; i++) {
    arrayNumeros[i] = i;
}

// 3.- Crea una variable de nombre 'arrayNumerosPares' cuyo valor sea el array de numeros pares del 0 al 9 (considerando al 0 par)

let arrayNumerosPares = [];

for (let i = 0; i < 10; i++) {
    if (esPar(i)) arrayNumerosPares[arrayNumerosPares.length] = i;
}

// 4.- Crea una variable de nombre 'arrayBidimensional' cuyo valor sea el siguiente array [[0, 1, 2], ['a', 'b', 'c']]

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];






// 5.- Crea la función 'suma' que acepte como argumentos dos números y devuelva como resultado su suma
// suma(20, 39)
// suma(100, 28)
// suma(17, 39)
// suma(52, 158)
// suma(86, 88)

function suma(num1, num2) {

    return num1 + num2;
}


// 6.- Crea la función 'potenciacion' que acepte como argumentos dos números y devuelva como resultado el primer número (a) elevado al segundo(b) a^b [Prohibido operador ** y math.exp]
// potenciacion(11, 2)
// potenciacion(35, 2)
// potenciacion(3, 9)
// potenciacion(44, 2)
// potenciacion(24, 5)

function potenciacion(num1, num2) {
    let resultado = 1;
    for (i = 0; i < num2; i++) {
        resultado *= num1;
    }
    return resultado;
}

// 7.- Crea la función 'separarPalabras' que acepte como argumento un string y devuelva un array de palabras
// Hola que tal?
// The Bridge for life
// A ver como separas esto

// function separarPalabras (string) {
//     //declaramos una variable para guardar la posición del primer caracter que no es espacio
//     spacePos=0;
//     //declaramos un array vacio para guardar el array de palabras que hay que devolver
//     arrayPalabras = [];

//     //recorremos el string en busca de espacios
//     for (let i=0; i<string.length+1;i++) {
//         if (string[i]===" "||string[i]===undefined ){
//             //si encontramos un espacio, tenemos que guardar el texto entre espacios en una nueva cadena
//             newString="";
//             //recorremos de nuevo desde el espacio anterior hasta el espacio nuevo (i) y vamos concatenando caracteres
//             for (let j=spacePos; j<i;j++) {
//                 newString += string[j];
//             }
//             //añadimos este newString al array de palabras
//             arrayPalabras[arrayPalabras.length] = newString;
//             //cambiamos la posición del último espacio encontrado
//             spacePos=i+1;
//         }
//     }
//     //esto lo usaba para meter la última palabra al string. He cambiado el primer bucle para detectar cuando acaba la palabra y ya no es necesaria esta parte.
//     // newString="";
//     // for (let i=spacePos;i<string.length;i++)
//     // {
//     //     newString+=string[i];
//     // }
//     // arrayPalabras[arrayPalabras.length] = newString;

//     return arrayPalabras;
// }



function separarPalabras(string) {
    //declaramos una variable para guardar la posición del primer caracter que no es espacio
    let spacePos = 0;
    //declaramos un array vacio para guardar el array de palabras que hay que devolver
    let arrayPalabras = [];

    //recorremos el string en busca de espacios
    let newString = "";
    for (let i = 0; i < string.length + 1; i++) {
        if (string[i] === " " || string[i] === undefined) {

            arrayPalabras[arrayPalabras.length] = newString;
            newString = "";
            //cambiamos la posición del último espacio encontrado
            spacePos = i + 1;
        }
        else newString += string[i];
    }
    return arrayPalabras;
}

console.log(separarPalabras("hola como lo llevas?"));

// 8.- Crea la función 'repetirString' que acepta como argumento un string y un número, y retorna el primer string concatenado el número dado de veces
// convertir ja en jajajajajajajaja
// escribir estoy castigado 10 veces


function repetirString(string, num) {
    let resultado = "";
    for (i = 0; i < num; i++) {
        resultado += string;
    }
    return resultado;
}


// 9.- Crea la función 'esPrimo' que acepte como argumento un número y devuelva true si es primo y false si no lo es
// El número 859 es primo
// El número 887 es primo
// El número 1271 no es primo
// El número 884 no es primo

function esPrimo(num) {
    let primo = true;
    for (i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return primo;
}

// 10.- Crea la función 'ordenarArray' que acepte como argumento un array de números y devuelva un array ordenado de menor a mayor
// Ordenar [118, 125, 124, 131, 108, 117, 125, 115, 122, 110]
// Ordenar [167, 257, 270, 201, 280]
// Ordenar [42, 42, 42, 43, 42, 42, 42, 43, 42]
// Ordenar [175, 122, 156, 165, 120, 121, 192, 151, 226, 208, 169]
// Ordenar [60, 58, 70, 45, 63, 64, 44, 72, 59]


function ordenarArray(array) {

    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            let num1 = array[i];
            let num2 = array[i + 1];
            if (num1 > num2) {
                array[i] = num2;
                array[i + 1] = num1;
            }
        }
    }
    return array;
}

//11.- Crea la función 'obtenerPares' que acepte como argumento un array de números y devuelva un array con los elementos que sean pares

function obtenerPares(array) {
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) arrayPares[arrayPares.length] = array[i];
    }
    return arrayPares;
}

//12.- Crea la función 'pintarArray' que acepte como argumento un array y devuelva una cadena de texto Array: [0, 1, 2] String: '[0, 1, 2]'

function pintarArray(array) {
    string = "["
    for (let i = 0; i < array.length - 1; i++) {
        string += array[i] + ", "
    }
    string = string + array[array.length - 1] + "]";
    return string;
}


//13.- Crea la función 'arrayMapi' que acepte como argumento un array y una función y retorne un array en el que se haya aplicado la función a cada elemento del primer array

function arrayMapi(array, funcion) {
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = funcion(array[i]);
    }
    return newArray;
}

//14.-Crea la función 'eliminarDuplicados' que acepte como argumento un array y deberá devolver un array en el que se hayan eliminado los duplicados

function eliminarDuplicados(array) {
    let duplicado=false;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (array[i] === newArray[j]) duplicado = true;
        }
        if (!duplicado) newArray[newArray.length] = array[i];
        duplicado=false;
    }
    return newArray;
}

//15.- Crea una variable de nombre 'arrayNumerosNeg' cuyo valor sea el array de numeros del 0 al -9 incluidos (0, -1, -2...)
let arrayNumerosNeg=[]
for (let i=0; i>-10;i--) {
    arrayNumerosNeg[arrayNumerosNeg.length] = i;
}

//16.- Crea una variable de nombre 'holaMundo' cuyo valor sea un array con las palabras 'Hola' y 'Mundo'
let holaMundo = ["Hola", "Mundo"];


//17.- Crea una variable de nombre 'loGuardoTodo' cuyo valor sea un array con los valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];


//18.- Crea una variable de nombre 'arrayDeArrays' cuyo valor sea el siguiente array [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//19.- Crea la función 'multiplicacion' que acepte como argumentos dos números y devuelva como resultado su multiplicacion

function multiplicacion(num1, num2) {
    return num1 * num2;
}


//20.- Crea la función 'division' que acepte como argumentos dos números y devuelva como resultado su division

function division(num1, num2) {
    return num1 / num2;
}

//21.- Crea la función 'esPar' que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(num) {
    if (num % 2 === 0) return true;
    else return false;
}

//22.- Crea una variable de nombre 'arrayFunciones' que tenga el valor de un array con las funciones: suma, resta y multiplicacion (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

let arrayFunciones = [
    function suma(num1, num2){
        return num1+num2;
    },
    function resta(num1, num2) {
        return num1-num2;
    },
    function multiplicacion(num1, num2){
        return num1*num2;
    }];

//23.- Crea la función 'ordenarArray2' que acepte como argumento un array de números y devuelva un array ordenado de mayor a menor

function ordenarArray2(array) {
    newArray = ordenarArray(array);
    return newArray;
}

//24.- Crea la función 'obtenerImpares' que acepte como argumento un array de números y devuelva un array con los elementos que sean impares
function obtenerImpares (array){
    let arrayImpares = [];
    for (let i = 0; i < array.length; i++) {
        if (!esPar(array[i])) arrayImpares[arrayImpares.length] = array[i];
    }
    return arrayImpares; 
}


//25.- Crear la función 'sumarArray' que acepte como argumento un array numérico y devuelva el resultado de la suma de los elementos

function sumarArray(array) {
    let sumatorio=0;
    for (let i=0;i<array.length;i++) {
        sumatorio+=array[i];
    }
    return sumatorio;
}


//26.- Crear la función 'multiplicarArray' que acepte como argumento un array numérico y devuelva el resultado de la multiplicación de los elementos

function multiplicarArray (array) {
    let producto=1;
    for (let i=0; i<array.length;i++) {
        producto*=array[i];
    }
    return producto;
}