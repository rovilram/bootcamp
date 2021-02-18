const changeColor = (lightState, lights, colors) => {
    if (lightState === 0) { //Estado inicial (tdas las luces en negro)
        lights.forEach(light => {
            light.style.backgroundColor = colors[0];
        });
    } else { //en los demás estados
        //recorremos todas las luces para ir cambiando su color dependiendo del estado
        for (let i = 0; i < lights.length; i++) {
            if (lightState === i + 1) {//cuando el estado corresponde a una determinada luz
                //el color de cada luz está guardado en la posición i+1 del array de colores.
                lights[i].style.backgroundColor = colors[i + 1];
            } else {
                //sino la luz se pone en negro
                lights[i].style.backgroundColor = colors[0];
            }
        };
    }
    //si el estado ha llegado a su máximo (= al número de luces lo devuelve al estado 1 (no al 0 ya que ese solo es para el inicio))
    if (lightState === lights.length) lightState = 1;
    else lightState++;  //en otro caso aumentamos el valor del estado
    return [lightState, lights];
}

const drawLights = (num, wrapper) => {
    let div; //va a guardar los distintos div que vamos creando en el siguiente bucle
    for (let i = 0; i < num; i++) {//bucle para hacer tantos div como hayamos dicho
        //creamos el elemento  y lo rellenamos con una id consecutiva
        div = document.createElement("div");
        div.className = "light";
        div.id = "light" + i;
        //hacemos el append del elemento en el wrapper que llegó como argumento
        wrapper.appendChild(div);
    }
}

const getColors = (lightNum) => {
    //metemos ya unos cuantos colores predefinidos
    const colorsArray = ["black", "green", "orange", "red"];
    //si se necesitan más colores los generamos
    if (lightNum > 3) {
        for (let i = 0; i < lightNum; i++) {
            //calculamos cada componente aparte
            let red = Math.ceil(Math.random() * 255);
            let green = Math.ceil(Math.random() * 255);
            let blue = Math.ceil(Math.random() * 255);
            //y las metemos juntas en un string que de el color rgb
            let color = `rgb(${red}, ${green}, ${blue})`;
            //metemos el color en el array
            colorsArray.push(color);
        }
    }

    return colorsArray;
}

const resetState = (lights) => {
    let lightState = 0; //devolvemos a 0 el contador de estado
    //quitamos las luces del DOM
    lights.forEach(element => { element.remove(); });
    return lightState;
}

const main = () => {
    var lights = {};
    //objeto donde vamos a guardar el lightsWrapper donde añadir las luces
    const lightsWrapper = document.getElementById("lightsWrapper");
    //hace el seguimiento del estado:
    //0 es el inicial (todo en negro)
    //máximo es el número de luces
    let lightState = 0;
    //array donde vamos a guardar los colores posibles de cada luz (hay tantas como luces+1 (la primera es el negro))
    let colors;
    document.addEventListener("click", (e) => {

        if (e.target.id === "changeStateBtn") { //botón de cambiar estado luces
            [lightState, lights] = changeColor(lightState, lights, colors);
        }

        else if (e.target.id === "resetStateBtn") {//botón RESET
            lightState = resetState(lights);
        }

        else if (e.target.id === "lightNumberBtn") { //botón añadir luces
            //hacemos un reset primero de las luces que ya hay. Necesitamos hacer un querySelector antes para que pueda hacer el reset
            lights = document.querySelectorAll(".light");
            lightState = resetState(lights);
            //Tomamos el número de luces a añadir
            let lightNum = document.getElementById("lightNumber").value;
            //dibujamos las nuevas luces
            drawLights(lightNum, lightsWrapper);
            //calculamos los colores necesarios para todas las luces
            colors = getColors(lightNum);
            //obtenemos los nodos de las luces del DOM
            lights = document.querySelectorAll(".light");
            //Las ponemos en el estado inicial.
            [lightState, light] = changeColor(lightState, lights, colors);
        }
    })

}


window.addEventListener("load", main)
/* window.onload = main;
 */