//empezamos a ejectuar una vez que se ha cargado todo el DOM


window.addEventListener("load", () => {



    //Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.


    let links = document.querySelectorAll("a");


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
        element.addEventListener("click", (e) => {
            e.target.src = "assets/magic-1.gif";
            e.stopPropagation();
        })
    });

    //2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    let p = document.querySelectorAll("p");

    p.forEach(el => {
        el.addEventListener("click", (e) => {
            e.target.style.color = "#00ff00";
            e.target.style.backgroundColor = "red";
            e.stopPropagation();
        })
    })
    //2.3 Bloques de article o section: Cambia el color de fondo.
    let articleAndSection = document.querySelectorAll("article, section");

    articleAndSection.forEach(el => {
        el.addEventListener("click", (e) => {
            e.target.style.backgroundColor = "blue";
        });
    })


    //ESTA OTRA PARTE LA HAGO CON DELEGACIÓN DE EVENTOS
    /* Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
    3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
    3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    3.3 Bloques de article o section: Color de fondo distinto al de párrafo. */
    let srcImgMouseover;
    let colorPMouseover;
    let backgroundColorMouseover;
    let backgroundColorSection;
    document.addEventListener("mouseover", (e) => {
        if (e.target.tagName.toLowerCase() === "img") {
            srcImgMouseover = e.target.src;
            e.target.src = "assets/abracadabra.gif";
        }
        if (e.target.tagName.toLowerCase() === "p") {
            colorPMouseover = e.target.style.color;
            e.target.style.color = "orange";
            backgroundColorMouseover = e.target.style.backgroundColor;
            e.target.style.backgroundColor = "grey";
        }
        if ((e.target.tagName.toLowerCase() === "article") ||
            (e.target.tagName.toLowerCase() === "section")) {
            backgroundColorSection = e.target.style.backgroundColor;
            e.target.style.backgroundColor = "violet";
        }
    })

    document.addEventListener("mouseout", (e) => {
        if (e.target.tagName.toLowerCase() === "img") {
            e.target.src = srcImgMouseover;
        }
        if (e.target.tagName.toLowerCase() === "p") {
            e.target.style.color = colorPMouseover;
            e.target.style.backgroundColor = backgroundColorMouseover;
        }
        if ((e.target.tagName.toLowerCase() === "article") ||
            (e.target.tagName.toLowerCase() === "section")) {
            e.target.style.color = colorPMouseover;
            e.target.style.backgroundColor = backgroundColorMouseover;
        }

    })
})