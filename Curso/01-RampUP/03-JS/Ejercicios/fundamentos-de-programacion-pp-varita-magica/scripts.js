//Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.


let links=document.querySelectorAll("a");


links.forEach(el => {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); //hace que no se propague el evento y no haga lo que tengamos definido en article o section...

    })
})
//Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

let img = document.querySelectorAll("img");

img.forEach(element => {
    element.addEventListener("click", (e)=> {
        e.target.src="assets/magic-1.gif";
        console.log(e);
    })
});

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let p = document.querySelectorAll("p");

p.forEach(el => {
    el.addEventListener("click", (e) => {
        e.target.style.color="#00ff00";
        e.target.style.backgroundColor="red";
    })
})
//2.3 Bloques de article o section: Cambia el color de fondo.
let articleAndSection = document.querySelectorAll("article, section");

articleAndSection.forEach(el=> {
    el.addEventListener("click", (e) => {
        e.target.style.backgroundColor="blue";
        
        console.log(e.target.outerHTML);
    });
})


