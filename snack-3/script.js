let somma = 0;
for (let i=0 ; i<10 ; i++) {
    const numberGen = Number(prompt("Inserisci un numero"));
    console.log(numberGen);
    somma += numberGen;
}
console.log(somma);