let num1 = parseInt(prompt("Introduce el primer numero", 0));
let num2 = parseInt(prompt("introduce el segundo numero", 0))

document.write("<h1>Desde "+num1+" a "+ num2 + "estan estos numeros:</h1>")
for(let i = num1; i <= num2; i++){
    document.write(i + "<br>")
}