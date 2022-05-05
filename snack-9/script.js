// Crea due array che hanno un numero di elementi diversi
const arrayOne = [1,2,3,4,5,6];
const arrayTwo = [7,8,9,10,11,12,13,14,15,16];
let arrayShort;
let offset = 0;
// arrayShort è la copia dell'array più corto
// SE arrayOne > arrayTwo = arrayTwo più corto arrayShort = arrayTwo
// ALTRIMENTI SE arrayOne < arrayTwo = arrayOne più corto arrayShort = arrayOne
// ALTRIMENTI i due array hanno la stessa lunghezza
if (arrayOne.length > arrayTwo.length) {
    arrayShort = arrayTwo;
    offset = arrayOne.length - arrayShort.length;
} else if (arrayOne.length < arrayTwo.length) {
    arrayShort = arrayOne;
    offset = arrayTwo.length - arrayShort.length;
} else {
    alert("I due array hanno la stessa lunghezza");
}
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro
for (let i = 0 ; i < offset ; i++) {
    arrayShort.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arrayShort);