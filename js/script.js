console.log('JS OK');


// PRENDO L'ELEMENTO DAL DOM

const listElement= document.getElementById('numbers-list');

// PREPARIAMO IL CICLO


for (let i = 1; i <= 100; i++) {
// contenuto base 

let content = i;

// consideriamo multipli 

if (i % 15 === 0) content = 'fizzbuzz';
else if (i % 3 === 0) content = 'fizz';
else if (i % 5 === 0) content = 'buzz';


//stampo in pagina

listElement.innerHTML += `<li class="${content}">${content}</li>`;
}