'use strict'

/*si un numero es impar o par
1.ventana prompt
2.si no es valido que nos pida de nuevo el numero*/

let num = parseInt(prompt("Introduce un numero", 0));
while(isNaN(num)){
    num = parseInt(prompt("Introduce un numero", 0))
}
if(num % 2 == 0){
    alert("es un numero par");
}else{
    alert("es impar");
}