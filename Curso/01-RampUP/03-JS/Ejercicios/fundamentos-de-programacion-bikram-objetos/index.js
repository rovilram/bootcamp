// - [ ] 1.- Crea un **objeto** de nombre **Coche** que tenga las propiedades: **marca, modelo, matricula**

const Coche = {
    marca:"",
    modelo: "",
    matricula: ""
}

// - [ ] 2.- Crea un **objeto** de nombre **Casa** que tenga las propiedades: **codPostal, calle, portal, piso**


const Casa = {
        codPostal:"",
        calle:"",
        portal:"",
        piso:""
}


// - [ ] 3.- Crea un **objeto** de nombre **FullStackDeveloper** que tenga las propiedades: **array lenguajes, array proyectos**

const FullStackDeveloper = {
    lenguajes:[],
    proyectos: []
}

// - [ ] 4.- Crea un **objeto** de nombre **Perro** que tenga las propiedades: **nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)**

const Perro = {
    nombre: "",
    raza: "", 
    color: "",
    edad: "",
    ladrar: ()=> {
        console.log("guau");
    },
    popo: ()=>{
        return Math.random()*3;
    }

}

// - [ ] 5.- Dado un **objeto** de nombre **Portatil** obtén el valor de la propiedad **marca con .marca** guardándolo en la variable **marcaPortatil**
marcaPortatil = Portatil.marca;

// - [ ] 6.- Dado un **objeto** de nombre **Portatil** obtén el valor de la propiedad **marca con ["marca"]** guardándolo en la variable **marcaPortatil2**
marcaPortatil2=Portatil["marca"];

// - [ ] 7.- Dado un **objeto** de nombre **Concierto** obtén el valor de la propiedad **array grupos** guardándolo en la variable **grupos**
grupos=Concierto.grupos;


// - [ ] 8.- Dado un **objeto** de nombre **Led** obtén el valor de las propiedades **rojo, verde y azul** guardándolo en la variable **array RGB[Rojo, Verde, Azul]**
let RGB = [Led.rojo, Led.verde, Led.azul];

// - [ ] 9.- Dado un **objeto** de nombre **Portatil** modifica el valor de la propiedad **modelo** por el valor **P345**
Portatil.modelo="P345";
// - [ ] 10.- Dado un **objeto** de nombre **Concierto** añade el valor **Guns N' Roses** a la propiedad **cartelera**
Concierto.cartelera[Concierto.cartelera.length]="Guns N' Roses";
// - [ ] 11.- Dado un **objeto** de nombre **Concierto** modifica el valor de la propiedad **fecha** por el valor **new Date() (fecha de hoy)**
Concierto.fecha = new Date();
// - [ ] 12.- Dado un **objeto** de nombre **Impresora** modifica el valor de la propiedad **imprimiendo** por el valor **objeto con propiedades: nombreArchivo, copias, numPaginas**
Impresora.imprimiendo={
    nombreArchivo: "",
    copias: "",
    numPaginas: ""
}

// - [ ] 13.- Crea un **objeto** de nombre **Noticia** que tenga las propiedades: **titular, cuerpo**
Noticia = {
    titular:"",
    cuerpo:""
}

// - [ ] 14.- Crea un **objeto** de nombre **Persona** que tenga las propiedades: **nombre, apellidos, edad**
Persona = {
    nombre:"",
    apellidos:"",
    edad:""
}

// - [ ] 15.- Crea un **objeto** de nombre **Avion** que tenga las propiedades: **numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando'**
Avion = {
    numPasajeros: "",
    despegar: () => {
        console.log("despegando");
    },
    volar: () => {
        console.log("llegando al destino");
    },
    aterrizar: () => {
        console.log("aterrizando");
    }

}

// - [ ] 16.- Crea un **objeto** de nombre **Paquete** que tenga las propiedades: **array contenido con todos los objetos que contenga el paquete**
Paquete = {
    contenido: []
}

// - [ ] 17.- Crea un **objeto** de nombre **Pais** que tenga las propiedades: **numHabitantes, continente, gentilicio**
Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: ""
}

// - [ ] 18.- Dado un **objeto** de nombre **O_Error** obtén el valor de la propiedad **codigo** guardándolo en la variable **codError**
codError=O_Error.codigo;

// - [ ] 19.- Dado un **objeto** de nombre **Grupo** obtén el valor de la propiedad **array integrantes** guardándolo en la variable **integrantes**
integrantes=Grupo.integrantes;
// - [ ] 20.- Dado un **objeto** de nombre **Impresora** obtén el valor de la propiedad **objeto tinta{rojo, verde, azul}** guardándolo en la variable **nivelesTinta**
nivelesTinta=Impresora.tinta;
// - [ ] 21.- Dado un **objeto** de nombre **Pantalla** obtén el valor de la propiedad **array bidimensional pixeles** guardándolo en la variable **pixeles**
pixeles=Pantalla.pixeles;
// - [ ] 22.- Dado un **objeto** de nombre **Movil** obtén el valor de la propiedad **especificaciones con ["especificaciones"]** guardándolo en la variable **especificaciones**
especificaciones=Movil["especificaciones"];

// - [ ] 23.- Dado un **objeto** de nombre **Grupo** modifica el valor de la propiedad **numIntegrantes** por el valor **5**
Grupo.numIntegrantes = 5;
// - [ ] 24.- Dado un **objeto** de nombre **Pantalla** modifica el valor de la propiedad **dimensiones** por el valor **1920x1080**
Pantalla.dimensiones ="1920x1080";
// - [ ] 25.- Dado un **objeto** de nombre **Led** modifica el valor de la propiedad **encendido** por el valor **false si vale true y true si vale false**
Led.encendido = !Led.encendido;
// - [ ] 26.- Dado un **objeto** de nombre **Movil** modifica el valor de la propiedad **temperatura** por el valor **20º**
Movil.temperatura="20º";