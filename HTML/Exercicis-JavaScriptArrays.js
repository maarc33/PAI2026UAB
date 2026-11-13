//Exercici Arrays 2.1.1
// Definim una taula buida
let taula = [];

// Afegim els valors a la taula
taula[0] = "Hola";
taula[1] = "Adeu";

// Mostrem el contingut de la taula per consola
console.log(taula);
// Afegim el valor "Nom" a la posició 2
taula[2] = "Nom";

// Mostrem el contingut de la taula
console.log(taula);

// Modifiquem el valor de la posició 1
taula[1] = ", ";

// Mostrem el contingut de la taula
console.log(taula);

// Aquest programa suma dos elements de la taula i guarda el resultat a la posició 6.

// Definim una taula amb els elements indicats

taula = [23, 45, 98, 73];

// Sumem els elements de les posicions 0 i 2
console.log(taula[0] + taula[2]);

// Guardem la suma a la posició 6
taula[6] = taula[0] + taula[2];

// Mostrem el contingut de la taula
console.log(taula);