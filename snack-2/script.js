// L’utente inserisce due parole in successione, con due prompt
// Il software stampa prima la parola più corta, poi la parola più lunga
const firstWord = prompt("Inserisci la prima parola");
const lengthFirst = firstWord.length;
console.log(lengthFirst);
const secondWord = prompt("Inserisci la seconda parola");
const lengthSecond = secondWord.length;
console.log(lengthSecond);
if (lengthFirst < lengthSecond) {
    console.log(firstWord , secondWord);
} else if (lengthFirst > lengthSecond) {
    console.log(secondWord , firstWord);
} else {
    console.log("sono di uguale lunghezza");
}