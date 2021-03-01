/* "use strict";

//Se mantiene el orden de como se manden iniciar.
setTimeout(() => {
    console.log("Hola 1")
}, 100);

setTimeout(() => {
    console.log("Hola 2")
}, 100);


setTimeout(() => {
    console.log("Hola 3")
}, 90)



setTimeout(() => {
    setTimeout(() => {
        console.log("Hola 4")
    }, 200 * Math.random())
    setTimeout(() => {
        console.log("Hola 5")
    }, 200 * Math.random())

}, 100);
 */

//CON PROMESA: Permitimos definir el orden exacto en el que queremos tener la respuesta, tarde lo que tarde cada una de la orden en llegar.
setTimeout(() => {




    let helloCounter = 0;
    function sayHello() {
        helloCounter++;
        console.log(`Holaaaa ${helloCounter}`);
    }
    //queremos decir "Hola 6" antes de "Hola 7 y "Hola 8"
    const myPromise = new Promise((resolveFunction) => {
        //aquí va el código asíncrono que no sabemos cuando va a ocurrir (en este caso lo simulamos cun un seTimeout )
        setTimeout(() => {
            resolveFunction();
        }, Math.random() * 100)
    })


    //llamamos  la promesa (y por lo tanto el código asíncrono)
    myPromise.then(() => sayHello());
    //en .then () ponemos una función que ocurrirá en el momento en el que se ejecute lo asíncrono





}, 300);