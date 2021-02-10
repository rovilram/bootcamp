// 5.- Crea la función 'suma' que acepte como argumentos dos números y devuelva como resultado su suma
// suma(20, 39)
// suma(100, 28)
// suma(17, 39)
// suma(52, 158)
// suma(86, 88)

function suma (num1, num2) {

    return num1+num2;
}


// 6.- Crea la función 'potenciacion' que acepte como argumentos dos números y devuelva como resultado el primer número (a) elevado al segundo(b) a^b [Prohibido operador ** y math.exp]
// potenciacion(11, 2)
// potenciacion(35, 2)
// potenciacion(3, 9)
// potenciacion(44, 2)
// potenciacion(24, 5)

function potenciacion (num1,num2)
{
    let resultado=1;
    for (i=0;i<num2;i++) {
        resultado*=num1;
    }
    return resultado;
}

// 8.- Crea la función 'repetirString' que acepta como argumento un string y un número, y retorna el primer string concatenado el número dado de veces
// convertir ja en jajajajajajajaja
// escribir estoy castigado 10 veces


function repetirString(string, num) {
    let resultado="";
    for (i=0;i<num;i++) {
        resultado += string;
    }
    return resultado;
}


// 9.- Crea la función 'esPrimo' que acepte como argumento un número y devuelva true si es primo y false si no lo es
// El número 859 es primo
// El número 887 es primo
// El número 1271 no es primo
// El número 884 no es primo

function esPrimo (num)
{
    for (i=2; i<num; i++) {
        if (num%i === 0) return false;
    }
    return true;
}


//19.- Crea la función 'multiplicacion' que acepte como argumentos dos números y devuelva como resultado su multiplicacion

function multiplicacion(num1, num2) {
    return num1*num2;
}


//20.- Crea la función 'division' que acepte como argumentos dos números y devuelva como resultado su division

function division (num1,num2) {
    return num1/num2;
}

//21.- Crea la función 'esPar' que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar (num) {
    if (num%2 === 0) return true;
    else return false;
}
