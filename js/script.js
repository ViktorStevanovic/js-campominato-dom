// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// Button PLAY creation
const headerElement = document.getElementById('my-header')
const buttonElement = document.createElement('button')
headerElement.appendChild(buttonElement)
buttonElement.classList.add('play-btn')
buttonElement.append('Play')


// Main content
const gameSection = document.getElementById('game-section')
const wrapper = gameSection.classList.add('wrapper')
const bombsArr = []



buttonElement.addEventListener('click',function(){
    gameSection.innerHTML = '';
    createBox();
    clearBombs();
    getBombs();
    // Bombs array
    // while (bombsArr.length < 16){
    //     const randomNumber = getRandomNumber ()

    //     // if(bombsArr.indexOf(randomNumber) === -1) bombsArr.push(randomNumber);       
    //     if(!bombsArr.includes(randomNumber)){
    //         bombsArr.push(randomNumber)
    //     }
    // }
    // console.log(bombsArr)
    console.log(bombsArr)

});

// chiedere a Riccardo perchè se su console log scrivo i mi esce il numero complessivo dei box


//--FUNCTIONS--
function createBox(){
    for(let i = 1; i <= 100; i++){
        const divElement = document.createElement('div')
        divElement.classList.add('box')
        const cellNumber = i
        divElement.append(cellNumber)
        
        divElement.addEventListener('click', function(){
            if(bombsArr.includes(cellNumber)){
                divElement.classList.add('bomb')
            }else {
                divElement.classList.add('clicked-box')
            }
        })
        gameSection.appendChild(divElement)

}}

function getRandomNumber(){
    return Math.floor(Math.random() * (100 - 1 + 1));
}

function getBombs(){
    while (bombsArr.length < 16){
        const randomNumber = getRandomNumber ()
    
        // if(bombsArr.indexOf(randomNumber) === -1) bombsArr.push(randomNumber);       
        if(!bombsArr.includes(randomNumber)){
            bombsArr.push(randomNumber)
        }
    } 
}
function clearBombs(){
    while(bombsArr.length > 0){
        bombsArr.pop()
    }
    return bombsArr
}
