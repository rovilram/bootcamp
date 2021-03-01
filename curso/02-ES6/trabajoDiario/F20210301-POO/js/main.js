//así se hacía hasta ES6 (con funciones constructoras)
function Horse(name = "UNNAMED") {
    this.name = name; //esta propiedad se deja como pública (esto es mala práctica)
    let speed = 0; //
    this.run = function () {
        speed++;
        return "corre caballito";
    }
    this.getSpeed = function () {
        return "velocidad:" + speed;
    }
}

const babieca = new Horse("babieca"); //instanciamos la clase


console.log(babieca.name) //lo podemos ver desde fuera.
console.log(babieca.run());
console.log(babieca.getSpeed());

const rocinante = new Horse("rocinante");
console.log(rocinante.name);
console.log(rocinante.getSpeed());


//La instanciación de objetos también se puede hacer con objetos literales
const otherHorse = {
    name: "pepe",
    lifePoints: 10,
    smoke: function () {
        this.lifePoints--;
    }
};

otherHorse.smoke();
console.log("otherHorse-lifePoints", otherHorse.lifePoints);

//instanciación usando clases *a partir de ES6*
class HorseES6 {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run() {
        this.speed++;
    }
    getSpeed() {
        return this.speed;
    }
}



const horses = [];
horses.push(new HorseES6(babieca));
horses.push(new HorseES6(rocinante))
console.log(horses[1].name.name)
console.log(horses[1].getSpeed())
horses[1].run();
console.log(horses[1].getSpeed())

//vamos a hacer un caballo vitaminado (meara) con herencia

class Meara extends HorseES6 {
    
    #propiedadPrivada; //para que la propiedad sea privada (es de ES2020 no funciona aun en todos los navegadores)
    constructor(name, color) {
        super(name); //va a importar el constructor de la clase Padre
        this.#propiedadPrivada="nanai";
        //a continuación modificamos con lo que queramos extender
        this.speed = 5;
        //o añadir
        this.color = color;
    }

    getPropiedadPrivada() {
        return this.#propiedadPrivada;
    }

    //modificamos un método padre
    run() {
        this.speed += 3;
    }

}


const meara = new Meara("caballito Molón", "blanco");
console.log("accedo a la propiedad privada del meara", meara.getPropiedadPrivada());
console.log("Nombre del Meara:", meara.name)
console.log("Velocidad inicial Meara:", meara.getSpeed())
console.log("Color del meara:", meara.color)
meara.run();
console.log("ahora a velocidad vale:", meara.getSpeed())
