// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome
const firstName = ["Mario","Luigi","Giuseppe"];
const lastName = ["Brambilla","Salvemini","Lopalco"];
const fullName = [];
for (let i = 0 ; i < firstName.length ; i++) {
    fullName.push(firstName[i] + lastName[i]);
}
console.log(fullName);