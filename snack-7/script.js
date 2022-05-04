// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome
const firstName = ["Mario","Luigi","Giuseppe"];
const lastName = ["Brambilla","Salvemini","Lopalco"];
let fullName = [];
for (let i = 0 ; i < 3 ; i++) {
    const randomFirstname = Math.floor(Math.random() * firstName.length);
    const randomLastname = Math.floor(Math.random() * lastName.length);
    fullName.push(firstName[randomFirstname] + " " + lastName[randomLastname]);
}
console.log(fullName);