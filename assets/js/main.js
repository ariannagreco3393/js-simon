/* 

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati. 

*/

//visualizzare in pagina 5 numeri casuali



function randomNumbers() {
    const numbersElement = document.querySelector('.numbers')
//console.log(numberElement);
    for (let i = 0; i < 5; i++) {
    let randomNumbers = (Math.floor(Math.random() * 10));

    numbersElement.innerHTML += randomNumbers
    console.log(randomNumbers);  
}
}

randomNumbers()


function eliminaRandom() {
    const numbersElement = document.querySelector('.numbers')
    numbersElement.innerHTML = ' '
 
}

setTimeout (eliminaRandom, 3000);


setTimeout (userNumber, 4000);

function userNumber() {
    prompt('inserisci i numeri che hai visto')
}

