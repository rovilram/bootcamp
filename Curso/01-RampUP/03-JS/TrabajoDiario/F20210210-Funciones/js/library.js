//hoy vamos a llamar las funciones en castellano, aunque debemos escribirlas al igual que las variables en inglés.

function saludarA(person) {
    console.log("Hola " + person);
}

saludarA("Roberto");

// let myName = prompt("¿Cual es tu nombre?");
// saludarA(myName);

//Funciones del navegador que nos pueden ser útiles.
// let respuesta = prompt("Dime algo");
// let respuesta = confirm("me dice solo Vale / Cancelar") //respuesta es true/false
// alert("Texto")// no devuelve nada.

function multiplicaDosNumeros(numero1, numero2) {
    return numero1 * numero2;
}
let resultado1 = multiplicaDosNumeros(110, 233)
console.log(resultado1);

function multiplicaDosNumerosBucle(numero1, numero2) {
    let resultado = 0; //inicializarlo para que sea numérico. Sino va a dar NaN

    if (numero1 > 0) {
        for (let i = 0; i < numero1; i++) {
            resultado += numero2;
        }
    }
    else {
        for (let i = numero1; i < 0; i++) {
            resultado -= numero2;
        }
    }
    return resultado;
}

console.log(multiplicaDosNumerosBucle(2, 3));
console.log(multiplicaDosNumerosBucle(-2, 3));
console.log(multiplicaDosNumerosBucle(-2, -3));
