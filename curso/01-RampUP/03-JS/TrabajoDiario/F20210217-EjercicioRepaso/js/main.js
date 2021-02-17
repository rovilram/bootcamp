let enabledButton = false;

const btn = document.getElementById("btn");
const img = document.getElementById("image");

/* //Ponemos el estado inicial.
btn.className += " off";
btn.innerText = "OFF"; //InnerText no interpreta si hay algo html dentro, solo lo escribe. ES LA BUENA PRÁCTICA. */

//También podemos hacer una función inicializadora (una especie de contstructor)
function init (initialState, initialClass, initialText, initialImg) 
{
    enabledButton = initialState;
    btn.className += initialClass;
    btn.innerText = initialText;
    img.src= initialImg;
}

init (enabledButton, " off", "OFF", "img/Balrogs.jpg"); 

btn.addEventListener("click", changeState);

function changeState() {
    if (enabledButton) {
        enabledButton = false;
        btn.classList.add("off");
        btn.classList.remove("on");
        // btn.className="on"; // si usamos .className pisamos lo que hubiera anteriormente.
        btn.innerHTML = "OFF"; //mejor usar innerText ya que no vamos a querer meter elementos HTML en otro de esta forma. Mejor crear nodos con .createElement()
        img.src="img/Balrogs.jpg";

    }
    else {
        enabledButton = true;
        btn.classList.add("on");
        btn.classList.remove("off");
        btn.innerText = "ON"; //InnerText no interpreta si hay algo html dentro, solo lo escribe. ES LA BUENA PRÁCTICA.
        img.src="img/gandalf.jpeg";
    }
    return enabledButton;
}