/* **Warrior**:

    `constructor(life, power)`: Establece el valor de las propiedades _life_ y _power_

    `attack`: Devuelve el valor de _power_ del guerrero

    `defend(damage)`: resta el valor del parámetro recibido _damage_ al valor de la propiedad _life_. Después, imprime el valor de la vida restante.
 */

 class Warrior {

    constructor (name, life, power) {
        this.name = name;
        this.life = life;
        this.power = power;
    }

    attack () {
        return this.power;
    }

    defend (damage) {
        this.life -= damage;
        console.log(`VIDA RESTANTE DE ${this.name}: ${this.life}`);
    }
 }


/*  **Maya: extiende de la clase Warrior**

    `constructor`: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

    `drinkColaCao`: Suma 10 al poder. */

class Maya extends Warrior{
    constructor (name, life, power) {
        super(name, life, power);
    }

    drinkColaCao () {
        this.power += 10;
        console.log(`${this.name} Tiene vida ${this.life} y fuerza ${this.power}`);
    }
}

/* **Aztec: extiende de la clase Warrior**

`constructor`: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

`drinkNesquik`: Suma 10 a la vida. */

class Aztec extends Warrior {
    constructor (name, life, power) {
        super(name, life, power);
    }

    drinkNesquik () {
        this.life += 10;
        console.log(`${this.name} Tiene vida ${this.life} y fuerza ${this.power}`);

    }
}

// 3. Realiza la siguiente cadena de intercambio de golpes.

const azteca = new Aztec("azteca",20,2);
const maya = new Maya("maya",20,2);


while (azteca.life>0 && maya.life>0)
{//     - Azteca bebe nesquik
console.log("azteca bebe nesquick");
azteca.drinkNesquik();
//     - Maya bebe Cola Cao
console.log("maya bebe colacao");
maya.drinkColaCao();
//     - Maya ataca a azteca. Azteca defiende.
console.log("Maya ataca a azteca");
azteca.defend(maya.attack());
//     - Azteca ataca a maya. Maya defiende.
console.log("Azteca ataca a maya");
maya.defend(azteca.attack());}