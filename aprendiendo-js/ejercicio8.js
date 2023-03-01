'use strict'

/*
Una calculador
que pidas 2 numero por patalla
que metemos uno mal que nos lo vuelva a pedir
en el body de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplacar y dividir esas dos cifras
*/
let num1 = parseInt(prompt("Introduce el primer numero", 0));
let num2 = parseInt(prompt("Introduce el segundo numero", 0));

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Introduce el primer numero", 0));
    num2 = parseInt(prompt("Introduce el segundo numero", 0));
}   

let result = "la Suma es: " +(num1 + num2)+"<br>" +
            "la Resta es: " +(num1 - num2)+"<br>"+
            "la Multiplicacion es: " +(num1 * num2)+"<br>"+ 
            "la Division es: " +(num1 / num2)+"<br>";

document.write(result);


