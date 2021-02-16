
//guardamos el elemento que va a disparar el evento
/* const pos00 = document.getElementById("position0_0"); */
//con la función addEventListener llamamos al evento y a la reacción (callback)
/*  pos00.addEventListener("click", putToken);
    function putToken() {
    document.getElementById("position0_0").innerHTML="X";
} */
//HACER PARA TODAS LAS CASILLAS (usando bucles o otra funcion para seleccionar elementos)
const pos00 = document.querySelectorAll(".casilla");

console.log("AA", pos00);

//usando una función anónima en linea
let currentToken = "X";
function putToken(token, position) {
    document.getElementById(position).innerHTML = token;
    document.getElementById(position).style.backgroundColor = "#999";
    currentToken = (currentToken === "X") ? "O" : "X";
}
for(let i=0; i<pos00.length;i++) 
{       pos00[i].addEventListener("click", function () {
        console.log("click");
        putToken(currentToken, this.id);
    });
}
