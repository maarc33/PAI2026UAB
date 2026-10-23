// Exercici 13.1
//Pedir un número al usuario//
let numero = Number(prompt("Introdueix un número: "));
//si es negativo
if (numero <0) {
    console.log("el número llegit és negatiu");
}

//Exercici 13.2
//Pedir un número al usuario//
numero = Number (prompt("Introdueix un número: "));
//si es parell
if (numero % 2 == 0) {
    console.log("el número és parell")
}

//Exercici 13.3
//Pedir un número al usuario
numero = Number (prompt("Introdueix un número: "));
//si es parell o senar
if(numero % 2== 0){
    console.log("el número es parell")
}
else if(numero % 2== 1){
    console.log("el número es senar")
}

// Exercici 13.4
// Pedir dos números al usuario//
let num1 = Number (prompt("Introdueix un número: "));
let num2 = Number (prompt("introdueix un altre número: "));
//2 if's un per cada número
if (num1>num2) {
    console.log("el número més gran és: " +num1)
}
if (num2>num1) {
    console.log("el número més gran és: " +num2)
}
else if (num1==num2) {
    console.log("els números són iguals")
}