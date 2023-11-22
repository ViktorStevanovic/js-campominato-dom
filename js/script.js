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


buttonElement.addEventListener('click',function(){
    gameSection.innerHTML = '';
    createBox();
});
// chiedere a Riccardo perchè se su console log scrivo i mi esce il numero complessivo dei box

function createBox(){

    for(let i = 1; i <= 100; i++){
        const divElement = document.createElement('div')
        divElement.classList.add('box')
        divElement.append(i)

        divElement.addEventListener('click', function(){
            divElement.classList.toggle('clicked-box')
            console.log(divElement.innerHTML)
        })
        gameSection.appendChild(divElement)

}}

const bombsArr = []

while (bombsArr.length < 16){
    const randomNumber = getRandomNumber ()
    // if(bombsArr.indexOf(randomNumber) === -1) bombsArr.push(randomNumber); Possible solution found on stack-overflow
    if(bombsArr.includes(randomNumber)){
        getRandomNumber()
    }
    bombsArr.push(randomNumber)
}



function getRandomNumber(){
    return Math.floor(Math.random() * (100 - 1 + 1));
    }
    console.log(bombsArr)