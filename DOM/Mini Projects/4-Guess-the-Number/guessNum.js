// console.log(parseInt(Math.random()*100+1));
let random = (parseInt(Math.random()*100+1));


const submit = document.getElementById('subt')

const userInput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');



const p = document.createElement('p');



let prevGuess = [];

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault()
        const userGuess = parseInt(userInput.value);
        // console.log(userGuess);

        validateGuess(userGuess);
    })
}


function validateGuess(guess) {
// validation iff value <=100

if(isNaN(guess)){
    alert(`Please Enter a Valid Number`);
}else if(guess<1){
    alert(`Please Enter a Number >1`);

}else if(guess>100){
    alert(`Please Enter a Number <100`);

}else{
    prevGuess.push(guess);
    if(numGuess>=10){
        displayGuess(guess);
        displayMsg(`Game Over. Random number was ${random}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
    
}


function checkGuess(guess) {
    // value ===== random num or not or high or low

    if(guess === random){
        displayMsg('Correct Guess... You Won')
    }else if(guess<random){
        displayMsg('Too Low Number')
        
    }else if(guess>random){
        displayMsg('Too High Number')
        
    }
    
}
function displayGuess(guess) {
    // update remaing ,, previous guess
    userInput.value = ''
    guessSlot.innerHTML +=`${guess} , `
    numGuess++;

    remaining.innerHTML= `${11-numGuess}`
    
}

function displayMsg(msg) {
    // print the msg

    LowHigh.innerHTML = `<h2>${msg}</h2>`
    
}


function endGame(game) {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h1 id="restart">Restart</h1>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector('#restart');
    newGameButton.addEventListener('click', function (e) {
      random = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled','');
      startOver.removeChild(p);
      displayMsg("Game Restarted")
  
      playGame = true;
    });
  }

