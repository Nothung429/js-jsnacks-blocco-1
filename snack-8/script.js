// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const numbers = [23,78,90,46,67,61];
console.log(numbers);
let somma = 0
for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i] % 2 === 1) {
        somma = somma + numbers[i];
    }
}
console.log(somma);