//  Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// con ciclo for
let somma = 0;
// creazione ciclo per chiedere all'utente i numeri 5 volte
// for(let i = 1; i <= 5; i++) {
//      // chiedo i numeri all'utente
//     const userNumbers = parseInt( prompt('Dimmi un numero') );

//     // ad ogni giro aggiungo il numero che mi darà lutente
//     somma += userNumbers;
// }

// // stampo il risultato in pagina
// console.log(somma);


// con ciclo while
// creo una variabile per il conteggio
let i = 0;

// finchè il conteggio non arriva a 5 continua a chiedere un numero all'utente
//  e sommalo con il numero precedentemente inserito
while(i < 5) {
    let userNumbers = parseInt( prompt('Dimmi un numero') );
    somma += userNumbers;

    i++;
}

// stampo il risultato in console
console.log(somma);
