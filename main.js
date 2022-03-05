//global variables 👇
var chooseFighterBanner = document.querySelector('.choose-fighter');
var humanWinsTextBanner = document.querySelector('.human-wins');
var computerWinsBanner = document.querySelector('.computer-wins');
var gameDrawBanner = document.querySelector('.game-draw');
var classicModeButton = document.querySelector('.classic-mode');
var difficultModeButton = document.querySelector('.difficult-mode');
var changeGameButton = document.querySelector('.change-game-button');
var humanWinsCounter = document.querySelector('.human-wins-counter');
var computerWinsCounter = document.querySelector('.computer-wins-counter');
var chooseGameBanner = document.querySelector('.choose-game');
var playerChoices = document.querySelector('.player-choices');
// var difficultIcons = document.querySelector('.difficult-choices');
var rockImg = document.getElementById('rock');
var paperImg = document.getElementById('paper');
var scissorsImg = document.getElementById('scissors');
var alienImg = document.getElementById('alien');
var lizardImg = document.getElementById('lizard');

var playerChoicesArray = [rockImg, paperImg, scissorsImg, alienImg, lizardImg]
var classicIconsArray = [rockImg, paperImg, scissorsImg];
var difficultIconsArray = [rockImg, paperImg, scissorsImg, alienImg, lizardImg]

var currentGame = new Game();
var humanPlayer = currentGame.humanPlayer;
var computerPlayer = currentGame.computerPlayer;
// event listeners 👇
classicModeButton.addEventListener('click', selectClassicGameMode);
difficultModeButton.addEventListener('click', selectDifficultGameMode);
changeGameButton.addEventListener('click', renderHomeView);
playerChoices.addEventListener('click', selectChoice)
// functions 👇
function selectClassicGameMode() {
  currentGame.selectedGameMode = 'classic'
  show(playerChoices);
  hide(alienImg);
  hide(lizardImg);
  renderGameView();
};

function selectDifficultGameMode() {
  currentGame.selectedGameMode = 'difficult'
  show(playerChoices);
  renderGameView();
};

function renderGameView() {
  hide(chooseGameBanner);
  hide(classicModeButton);
  hide(difficultModeButton);
  show(chooseFighterBanner);
  show(changeGameButton);
};

// not working
// where to invoke?
function displayWins() {
  humanWinsCounter.innerText = `Wins: ${currentGame.humanPlayer.wins}`;
  computerWinsCounter.innerText = `Wins: ${currentGame.computerPlayer.wins}`;
};


function selectChoice() {
  if(event.target.id === 'rock') {
    console.log('rock clicked!')
    currentGame.humanPlayerSelectedChoice = 'rock'
    currentGame.selectComputerChoice()
    renderSelectedChoices()
    currentGame.checkWinner()
    displayWins()
  } else if (event.target.id === 'paper') {
    console.log('paper clicked!')
    currentGame.humanPlayerSelectedChoice = 'paper'
    currentGame.selectComputerChoice()
    renderSelectedChoices()
    currentGame.checkWinner()
    displayWins()
  } else if (event.target.id === 'scissors') {
    console.log('scissors clicked!')
    currentGame.humanPlayerSelectedChoice = 'scissors'
    currentGame.selectComputerChoice()
    renderSelectedChoices()
    currentGame.checkWinner()
    displayWins()
  } else if (event.target.id === 'lizard') {
    console.log('lizard clicked!')
    currentGame.humanPlayerSelectedChoice = 'lizard'
    currentGame.selectComputerChoice()
    renderSelectedChoices()
    currentGame.checkWinner()
    displayWins()
  } else if (event.target.id === 'alien') {
    console.log('alien clicked!')
    currentGame.humanPlayerSelectedChoice = 'alien'
    currentGame.selectComputerChoice()
    renderSelectedChoices()
    currentGame.checkWinner()
    displayWins()
  }
}

// function selectChoice() {
//   for(var i = 0; i < playerChoicesArray.length; i++)
//   if(event.target.id === playerChoicesArray[i]) {
//     debugger;
//     console.log(`${playerChoicesArray[i]} clicked!`)
//     currentGame.humanPlayerSelectedChoice = `${playerChoicesArray[i]}`
//   }
// }

function renderHomeView() {
document.location.reload(true)
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function hideIcons(array) {
  for(i = 0; i < array.length; i++) {
    hide(array[i])
  };
};

function renderSelectedChoices() {
  if(currentGame.selectedGameMode === 'classic') {
    hideIcons(classicIconsArray);
    show(document.getElementById(`${currentGame.humanPlayerSelectedChoice}`))
    show(document.getElementById(`${currentGame.computerPlayerSelectedChoice}`))
  } else if(currentGame.selectedGameMode === 'difficult') {
    console.log("else if")
    hideIcons(difficultIconsArray);
    show(document.getElementById(`${currentGame.humanPlayerSelectedChoice}`))
    show(document.getElementById(`${currentGame.computerPlayerSelectedChoice}`))
  };
};
