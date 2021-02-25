const cambiaParrafo = () => {

    const todosLosParrafos = document.getElementsByTagName("p");

    /* con bucle for
        for (let i = 0; i < todosLosParrafos.length; i++) {
            todosLosParrafos[i].style.color="red";
        }
    */
    console.log(todosLosParrafos); //HTMLCollection: no tiene forEach
    console.log(Array.from(todosLosParrafos)); //Array
    /* con forEach */
    Array.from(todosLosParrafos)
        .forEach(parrafo => parrafo.style.color = "red");
}

const cambiaDiv = () => {
    const primerParrafo = document.querySelector("div");
    primerParrafo.style.color = "yellow";
}

const cambiaDivs = () => {
    //esta forma de escribir que viene después es la forma *óptima*
    document.querySelectorAll("div")
        .forEach((el, index, array) => {
            el.style.textDecoration = "underline overline";
            console.log(`Soy el div número ${index + 1} de ${array.length}
    y soy un "div" ${index % 2 === 0 ? "impar" : "par"}`);
        })
}


document
    .getElementById("changeBtn")
    .addEventListener("click", cambiaParrafo);

document
    .getElementById("changeBtn")
    .addEventListener("click", cambiaDiv);

document
    .getElementById("changeBtn")
    .addEventListener("click", cambiaDivs);


//Default Parameter

//Hacemos una función que si recibe:
// Solo un número: hace su cuadrado
// Solo dos números: hace su suma
// tres números: hace la resta de los dos primeros elevado al tercero
function loca(num1, num2 = 0, num3 = 1) { //decidimos el valor que van a tener los parametros si no nos vienen definidos en la llamada
    if (num2 === 0 && num3 === 1) {
        return num1 * num2;
    }

    if (num2 !== 0 && num3 === 0) {
        return num1 + num2;
    }
    return Math.pow(num1 - num2, num3)
}

// 20210223

function sum(...theNumbers) {
    let total = 0;
    theNumbers.forEach(number => total += number)
    return total;
}

console.log(sum(1, 5, 9, 6, 9))

//spread operator

let parts = ["shoulder", "knees"];
let lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics);


parts = "shoulder";
lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics);

array = [parts];
parts = "shoulder";
lyrics = ["head", ...array, "and", "toes"];
console.log(lyrics);


const words1 = ["hola", "mundo"];
const words2 = words1;
words2[1] = "familia";
console.log(words1[1]);

words3 = ["hola", "mundo"];
words4 = [...words1];
words4[1] = "familia";
console.log(words3[1]);

let o1 = { g: 10, h: 10 }
o1 = { ...o1, i: 10, j: 10 };
console.log(o1);

//destructuring
//con array
let num1 = 1;
let num2 = 2;
console.log(num1, num2);
[num1, num2] = [3, 4];
console.log(num1, num2);
//con objeto. no influye el orden
let { a, b } = { a: 10, b: 20 };
console.log(a, b);
let { c, d } = { c: 10, d: 20 };
console.log(c, d);

//spread operator y destructuring juntos
let [a1, b1, ...resto] = [10, 20, 30, 40, 50];

console.log(a1, b1);
console.log(resto);

let { a2, b2, ...rest2 } = { a2: 10, b2: 20, c2: 30, v4: 40 };
console.log(a2, b2);
console.log(resto);

// 20210224
//Vamos a hacer hacer el cuadrado del contenido del array
let numbers = [1, 2, 3, 9, 7, 6];
numbers.forEach((number, index, array) => {
    array[index] = number * number;
});
console.log(numbers);
//con map()
let numbers2 = [1, 2, 3, 9, 7, 6];
numbers2 = numbers2.map(number => number * number);
console.log("Cuadrados", numbers2);
//usamos filter para recoger los números pares.
const numbers3 = [1,2,3,4,5,6,7];
let numEven = numbers3.filter((number) => number % 2 === 0);
console.log("Pares",numEven);


//reduce
//Hacemos un sumatorio
let total = numbers3.reduce((sum, number)=> sum+number);
console.log(total);

//hacemos un sumatorio de los pares concatenando los helpers
let totalEven = numbers3.filter((number) => number %2 ===0).reduce((sum, number) => sum+number);
console.log(totalEven);


