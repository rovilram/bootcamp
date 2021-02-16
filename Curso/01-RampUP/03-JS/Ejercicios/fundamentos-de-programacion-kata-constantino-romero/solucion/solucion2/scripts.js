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
};

const imprimeTitulo = (question) => {
    let title = document.createElement("p");
    let titleText = document.createTextNode(question.titulo);
    title.appendChild(titleText);
    return title;
};

const imprimeLabel = (answer) => {
    let label=document.createElement("label");
    let labelText = document.createTextNode(answer.label);
    label.appendChild(labelText);
    label.for=answer.id;
    return label;
};

const imprimeInput = (answer) => {
    let input=document.createElement("input");
    input.id=answer.id;
    input.name=answer.name;
    input.type="radio";
    input.value=answer.id;
    return input;
};

const imprimeRespuesta = (answer) => {
    respuestaArray=[];
    respuestaArray[respuestaArray.length]=imprimeInput(answer);
    respuestaArray[respuestaArray.length]=imprimeLabel(answer);
    br=document.createElement("br");
    respuestaArray[respuestaArray.length]=br;
    return respuestaArray;
};

const imprimeRespuestas = (question) => {
    const respuestasArray = [];
    for (let i=0;i<question.respuestas.length;i++){
        let respuestaArray = imprimeRespuesta(question.respuestas[i]);
        for (j in respuestaArray) {
            respuestasArray[respuestasArray.length]= respuestaArray[j];
        };
    }
    return respuestasArray;
};
//el carácter \n es un carácter que imprime un salto de línea
const imprimePregunta = (question) => {
 //   return ("<form>\n" + imprimeTitulo(question) + "\n" + imprimeRespuestas(question) + "\n</form>");

    formulario = document.createElement("form");
    formulario.className="preguntas";
    formulario.appendChild(imprimeTitulo(pregunta));
    let respuestasArray=imprimeRespuestas(pregunta);
    for (i in respuestasArray) {
        formulario.appendChild(respuestasArray[i]);
    }
    return formulario;

};

// document.querySelector('article').innerHTML = imprimePregunta(pregunta);
document.body.appendChild(imprimePregunta(pregunta));