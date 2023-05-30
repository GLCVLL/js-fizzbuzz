console.log('JS OK');


// PRENDO L'ELEMENTO DAL DOM

const blackboardElement= document.querySelector('.blackboard');

// PREPARIAMO IL CICLO

blackboardElement.innerText = '';

for (let i = 1; i <= 100; i++) {
    //scambio con fizzbuzz
  if (i % 3 === 0 && i % 5 === 0) {
    blackboardElement.innerText += "fizzbuzz";
  } else if (i % 3 === 0) {
    blackboardElement.innerText += "fizz"; // scambio con fizz
  } else if (i % 5 === 0) {
    blackboardElement.innerText += "buzz"; //scambio con buzz
  } else {
    blackboardElement.innerText += i;
  }
}