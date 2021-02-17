const changeColor = (lightState, light) => {
    
    if (lightState === 0) {
        light.className="light";
        light.classList.add("colorBlack");
    }
    if (lightState === 1) {
        light.className="light";
        light.classList.add("colorGreen");
    }
    if (lightState === 2) {
        light.className="light";
        light.classList.add("colorOrange");
    }
    if (lightState === 3) {
        light.className="light";
        light.classList.add("colorRed");
        lightState=0; //lo pasamos a 0 porque ya no hay más colores.
    }
    lightState++; //aumentamos el color para el siguiente click
    return [lightState, light];
}



const main = () => {
    let light1=document.querySelector(".light");
    let lightState=0;
    [lightState,light1]=changeColor(lightState, light1);

    document.addEventListener("click", (e) => {
        if (e.target.matches(".btn")) { 
            [lightState,light1]=changeColor(lightState, light1);
        };
    })

}




window.addEventListener("load", main)
/* window.onload = main;
 */