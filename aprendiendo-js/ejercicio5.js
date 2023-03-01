"use strict";

/*Muestre todos los numero divisores de un numero introducido por el usuario*/

let num1 = parseInt(prompt("Introduce el primer numero", 1));

for (let i = 1; i <= num1; i++) {
  if (num1 % i == 0) {
    console.log("Divisor: " + i);
  }
}
