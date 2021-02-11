
function chauchat (cargador) {
    for (i=0; i<cargador; i++) {
        while (Math.random()<0.8) {
            console.log ("Illo, me he quedao pillá!");
        }
        console.log("pium!");
        if ((i+1)%3 === 0) console.log(" ");
    }
}


console.log("cargador de 3 balas");
chauchat(3);


console.log("cargador de 7 balas");
chauchat(7);

console.log("Cargador Array");


function chauchatArray (cargador) {

    console.log(cargador);
    balas=cargador.length;

    chauchat(7);

}

let cargador = [1,1,1,1,1,1,1];

chauchatArray(cargador);