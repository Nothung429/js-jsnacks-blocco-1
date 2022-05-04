const firstWord = prompt("Inserisci la prima parola");
const lengthFirst = firstWord.length;
console.log(lengthFirst);
const secondWord = prompt("Inserisci la seconda parola");
const lengthSecond = secondWord.length;
console.log(lengthSecond);
if (lengthFirst > lengthSecond) {
    console.log(firstWord);
} else if (lengthFirst < lengthSecond) {
    console.log(secondWord);
} else {
    console.log("sono di uguale lunghezza");
}