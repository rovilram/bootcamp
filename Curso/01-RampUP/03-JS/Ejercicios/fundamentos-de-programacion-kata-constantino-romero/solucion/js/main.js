const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood",
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl",
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore",
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner",
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger",
        }
    ]
}


function imprimeTitulo(titulo) {
    let response="";
    response=`<p>${titulo}</p>`;
    return response;
}
function imprimeInput(id, name, value){
    return `<input id=${id} name=${name} type="radio" value=${value}>`
     
}
function imprimeLabel(label) {
    let response ="";
    response += `<label>${label}</label><br>`;
    return response;
}

function imprimeRespuestas (respuestas) {
    let response="";

    for (let i=0;i<respuestas.length;i++) {
       respuesta=respuestas[i];
       response += imprimeInput(respuesta.id, respuesta.name, respuesta.value);
       response += imprimeLabel(respuesta.label);
    }
    return response;
}

function imprimePregunta(pregunta) {
    let response="<form>";
    response += imprimeTitulo(pregunta.titulo);
    response += imprimeRespuestas(pregunta.respuestas);
    response += "</form>";
    document.write(response);
    

}

imprimePregunta(pregunta);