const firstNumber = Number(prompt("Inserisci il primo numero"));
console.log(firstNumber);
const secondNumber = Number(prompt("Inserisci il secondo numero"));
console.log(secondNumber);
if (firstNumber > secondNumber) {
    alert("il primo numero è maggiore del secondo")
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    alert("il secondo numero è maggiore del primo")
    console.log(secondNumber);
} else {
    alert("i due numeri hanno lo stesso valore")
}