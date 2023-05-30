console.log('JS OK');


// PRENDO L'ELEMENTO DAL DOM

const blackboardElement= document.querySelector('.blackboard');

// PREPARIAMO IL CICLO

for(let i = 1; i <= 100; i++){
    console.log(i);
    blackboardElement.innerText += i + ' '; 
}