/*
Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9

Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese otro numero"));
let num3 = parseInt(prompt("ingrese otro numero"));

if(num1>num2 && num1>num3){
    document.write("El " + num1 + " es el numero mas grande");
}
else if(num2>num1 && num2>num3){
    document.write("El " + num2 + " es el numero mas grande");
}
else if(num3>num1 && num3>num2){
    document.write("El " + num3 + " es el numero mas grande");
}