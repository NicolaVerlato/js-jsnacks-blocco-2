// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

const userSumNumbers = [];

let sum = 0;
while(sum < 50) {
    userNumber = parseInt(prompt('dimmi un numero'));

    sum += userNumber;

    userSumNumbers.push(userNumber);
}
console.log(sum);