/* 

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati. 

*/


//visualizzare in pagina 5 numeri casuali
//1. selezionare elemento della DOM dove inserire i numeri casuali
const numbersElement = document.querySelector('.numbers')
//2. creare un array per salvare i 5 numeri
const randomNumbers = []
//3. generare i 5 numeri casuali (che non si ripetono)

while (randomNumbers.length !== 5) {
    const number = Math.floor(Math.random() * 100)
    if (!randomNumbers.includes(number)) {
        randomNumbers.push(number)  
    }
}

//console.log((randomNumbers));

numbersElement.innerHTML = `Memorizza questi numeri: ${randomNumbers}`


//da qui in poi parte un timer di 30 secondi
//1. utilizzo set timeout
//2. dopo 30 secondi utente deve inserire uno alla volta i numeri inseriti
setTimeout (() => {
    //rimuovi i numeri per nasconderli all'utente
    numbersElement.innerHTML = ''

    const userAttempts = []

    for (let i = 0; i < 5; i++) {
       const userNumber = Number(prompt('inserisci uno dei numeri che hai visto prima'))
       console.log(userNumber); 

// dopo che ha inserito i 5 numeri il software deve dire se sono inclusi in quelli generati

       if (randomNumbers.includes(userNumber) && !userAttempts.includes(userNumber)) {
           userAttempts.push(userNumber)
       }
    }

    console.log(userAttempts);

    alert(`hai indovinato ${userAttempts.length} / ${randomNumbers.length} -
    i numeri indovinati sono ${userAttempts}`)

}, 3000);





