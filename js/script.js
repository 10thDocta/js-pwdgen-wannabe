// ottengo il dato "name" tramite comando prompt
const name = prompt("Qual è il tuo nome");
document.getElementById('name').innerHTML = name;

// ottengo il dato "surname" tramite comando prompt
const surname = prompt("Qual è il tuo cognome");
document.getElementById('surname').innerHTML = surname;

// ottengo il dato "color" tramite comando prompt
const color = prompt("Qual è il tuo colore preferito");
document.getElementById('color').innerHTML = color;

// modifico l'elemento h2 con id=password concatenando le variabili precedenti
document.getElementById('password').innerHTML = name + surname + color + "19";