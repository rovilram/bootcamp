/* 
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

 */

//cargador con 7 balas




let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

function chauchat(cargador) {

    console.log("Este es mi cargador:", cargador);

    for (i = 0; i < cargador.length; i++) {
        //     while (Math.random() < 0.8) {
        //         console.log("Illo, me he quedao pillá!");
        //     }
        console.log(cargador[i]);
        if ((i + 1) % 3 === 0) console.log(" ");
    }
}
//console.log("CON LA PRIMERA FUNCIÓN")
//chauchat(cargador);




function chauchat2(cargador) {
    let hotCont = 1, //contador para saber cuando se ha calentado la chauchat
        disparo = 0; //contador para recorrer el cargador
    //console.log("chauchat2", "Este es mi cargador:", cargador);
    while (disparo < cargador.length) //recorro el cargador mientras no lleguemos a su final
    {
        if (Math.random() < 0.7) //nos da la probabilidad de que se quede pillada
        {
            console.log("Illo, me he quedao pillá!");
        }
        else { //sino se queda pillada dispara (y cambia de "cartucho" del cargador)
            console.log(cargador[disparo]);
            disparo++;
        }
        if (hotCont === 3) //si se calienta (cada 3 disparos o intentos) hace una parada.
        {
            hotCont = 0;//reinicio el contador
            console.log(" ");
        }
        hotCont++;//aumento en 1 el contador.
    }

}
//console.log("CON LA SEGUNDA FUNCIÓN")
//chauchat2(cargador);



function chauchat3(disparos) {
    let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];
    if (Math.random()<0.8) {
        console.log("Illo, me he quedao pillá!");
    } else {
        for (i=0; i<disparos;i++) {
            if (i>cargador.length-1) console.log("clak. Mierda no hay más balas")
            else console.log(cargador[i]);
            if ((i+1)%3===0) console.log(" ")
        }
    }
}

console.log("CON LA TERCERA FUNCIÓN");
chauchat3(17);