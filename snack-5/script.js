// Crea un array vuoto
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
const sixNumbers = [];
for (let i = 0 ; i < 6 ; i++) {
    const number = Number(prompt("Inserisci un numero"));
    if ( i % 2 === 1) {
        sixNumbers.push(number);
    } else {
        console.log("è pari");
    }
}
console.log(sixNumbers);