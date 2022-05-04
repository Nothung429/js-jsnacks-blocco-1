// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
const chooseNumber = Number(prompt("Inserisci un numero"));
if ( chooseNumber % 2 === 1) {
    const somma = chooseNumber + 1;
    alert(somma);
} else {
    alert(chooseNumber);
}