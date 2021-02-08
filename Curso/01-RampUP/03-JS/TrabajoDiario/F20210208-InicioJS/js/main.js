// Hola mundo en una página web. Escribiendo en el body
document.write("Hola Mundo");
// Hola mundo en la consola. No se refleja en ninguna parte del html
console.log("Hola Mundo");


//Variables y constantes
const PI = 3.14;
const CURRENT_YEAR = 2021;

let message; //está declarada pero no asignada. se queda "undefined"
message = "Hello Word";

workingDay=true;

console.log(typeof workingDay);


if(CURRENT_YEAR>2000) {
    console.log("nos engañaron");
} 
else {
    console.log("aun no has llegado");
}