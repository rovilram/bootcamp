//Imprime todos los números del 1 al 1000 por consola, con la salvedad de todos aquellos números que sean múltiplos de 3 que en vez de imprimir el número, se imprimirá fizz y además, en lugar de los números que sean múltiplos de 5 se imprimirá buzz.


let i = 1;

while (i < 1001) {
    if (i % 15 === 0) {
        console.log("fish buzz");
    } else {
        if (i % 5 === 0) console.log("buzz");
        else {
            if (i % 3 === 0) console.log("fish");
            else console.log(i);
        }
    }

    i++;
}