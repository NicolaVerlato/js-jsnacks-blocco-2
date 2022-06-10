//  Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// creazione array
const longArray = [49, 30, 40, 39, 10, 40, 90, 70];
const shortArray = [12, 4, 2];
console.log(longArray);
console.log(shortArray);

// creazione variabile per numero random da inserire nel shortArray
let randomNumber = Math.floor(Math.random() * 100);

// creazione ciclo 
// finchè shortArray non ha lo stesso numero di elementi di longArray 
// pusha un numero casuale randomNumber
while(shortArray.length !== longArray.length) {
    shortArray.push(randomNumber);
}
// stampa in console il risultato
console.log(longArray);
console.log(shortArray);