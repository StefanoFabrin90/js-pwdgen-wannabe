
// ottenere il nome
// salvo in variabile
// mostro output a schermo
// selezione elemento html
// assegnare valore all'elemento

// name
const nome = prompt ('Inserire il proprio nome');
console.log ('nome');

// cognome
const cognome = prompt ('Inserire il proprio cognome');
console.log ('cognome');

// colore
const colore = prompt ('Inserire il proprio colore preferito');
console.log ('colore');


// html + valore all'elemento
document.getElementById ('result').innerHTML = `${nome} ${cognome} ${colore} 21`