'use strict'

/*Mostrar todos los numeros impares que hay entre dos numero introducidos por el usuario*/

let num1 = parseInt(prompt("Introduce el primer numero", 0));
let num2 = parseInt(prompt("Introduce el segundo numero", 0));

while(num1 < num2){
    num1++;
    if(num1 % 2 != 0){
        console.log("el "+num1+ " es impar")
    }
}