const changeColor = (lightState, lights) => {
    let colors=["black", "green", "orange", "red"];
    if (lightState===0) {
        lights.forEach(light => {
            light.style.backgroundColor=colors[0];
        });
    } else {
        for (let i=0;i<lights.length;i++){
            if (lightState===i+1) {
                lights[i].style.backgroundColor=colors[i+1];
            } else {
                lights[i].style.backgroundColor=colors[0];
            }
        };
    }
    if (lightState===lights.length) lightState=1;
    else lightState++;
    return [lightState, lights];
}



const main = () => {
    let lights=document.querySelectorAll(".light");
    let lightState=0;
    [lightState,light]=changeColor(lightState, lights);

    document.addEventListener("click", (e) => {
        if (e.target.matches(".btn")) { 
            [lightState,lights]=changeColor(lightState, lights);
        };
    })

}


window.addEventListener("load", main)
/* window.onload = main;
 */