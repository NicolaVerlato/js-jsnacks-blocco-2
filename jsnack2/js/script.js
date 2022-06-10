// Calcola la somma e la media dei primi 10 numeri.

let sum = 0;
let media;

// inizio il ciclo di numeri da 1 a 10
for(let i = 1; i <= 10; i++) {
    let thisNumber = i;
    console.log(thisNumber);

    // calcolo la somma
    sum += thisNumber;

    // calcolo la media
    media = sum / thisNumber;
}
console.log(sum);
console.log(media);