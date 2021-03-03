//este es el objeto de configuración para nuestro proyecto firebase.


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB_o8JOfRqfTkDiiCafkp24uG_txP3GlI",
    authDomain: "bootcamp-urban-monsters.firebaseapp.com",
    projectId: "bootcamp-urban-monsters",
    storageBucket: "bootcamp-urban-monsters.appspot.com",
    messagingSenderId: "1060334652062",
    appId: "1:1060334652062:web:d746dcced167272f97c98f",
    databaseURL: "https://bootcamp-urban-monsters-default-rtdb.europe-west1.firebasedatabase.app/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function readMessages() {
    //acceder a la BD
    const database = firebase.database();



    //perdir datos

    //esto nos da la referencia a los datos
    const messagesRef = database.ref('prueba');

    //esto es el "fetch" que usa firebase para acceder a los datos
    messagesRef.on('value',
        //callback function que tiene el método on() para recibir los datos en response.
        (response) => {
            const data = response.val();
            //Pintar datos
            document
                .querySelector("#messagesBox")
                .textContent = data;
        });
}
//TODO: ver lo que ha hecho David, porque me he perdido
document
    .querySelector("#btn")
    .addEventListener("click", readMessages);