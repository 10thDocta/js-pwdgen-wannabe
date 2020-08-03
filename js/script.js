const name = prompt("Qual è il tuo nome");
document.getElementById('name').innerHTML = name;

const surname = prompt("Qual è il tuo cognome");
document.getElementById('surname').innerHTML = surname;

const color = prompt("Qual è il tuo colore preferito");
document.getElementById('color').innerHTML = color;

document.getElementById('password').innerHTML = name + surname + color + "19";