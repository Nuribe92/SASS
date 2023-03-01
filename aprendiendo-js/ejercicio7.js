'use strict'

/*Tabala de multiplicar de un numero introducido por pantalla*/

let num1 = parseInt(prompt("¿Tabla de que numero?", 1))
for(let i = 1;i < 10; i++){
    document.write(i+ " x " +num1+ "="+(i * num1) + "<br>");
}