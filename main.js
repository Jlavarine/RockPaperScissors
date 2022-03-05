//global variables 👇
var chooseFighterBanner = document.querySelector('.choose-fighter');
var humanWinsBanner = document.querySelector('.human-wins');
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

function renderHomeView() {
  show(chooseGameBanner);
  show(classicModeButton);
  show(difficultModeButton);
  hide(chooseFighterBanner);
  hide(changeGameButton);
  hide(playerChoices);
  hideWinnerBanners();
};

function hideWinnerBanners() {
  hide(humanWinsBanner);
  hide(computerWinsBanner);
  hide(gameDrawBanner);
};


function selectChoice() {
  if(event.target.id) {
    console.log(`${event.target.id} clicked!`)
    currentGame.humanPlayerSelectedChoice = event.target.id
    currentGame.humanPlayer.takeTurn()
    currentGame.selectComputerChoice()
    renderSelectedChoices()
    currentGame.checkWinner()
    displayWinnerBanner()
    displayWins()
    // setInterval(renderGameView(), 1200)
  }
}


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
    // setTimeout('resetBoard()', 1000)
  } else if(currentGame.selectedGameMode === 'difficult') {
    hideIcons(difficultIconsArray);
    show(document.getElementById(`${currentGame.humanPlayerSelectedChoice}`))
    show(document.getElementById(`${currentGame.computerPlayerSelectedChoice}`))
  }
};

function displayWinnerBanner() {
  hide(humanWinsBanner)
  hide(computerWinsBanner)
  hide(gameDrawBanner)
  hide(chooseFighterBanner)
  if(currentGame.winner === 'Human') {
    show(humanWinsBanner);
  } else if(currentGame.winner === 'Computer') {
    show(computerWinsBanner);
  } else if(currentGame.winner === 'Draw') {
    show(gameDrawBanner);
  };
};

function displayWins() {
  humanWinsCounter.innerText = `Wins: ${currentGame.humanPlayer.wins}`;
  computerWinsCounter.innerText = `Wins: ${currentGame.computerPlayer.wins}`;
};

// function resetBoardClassic() {
//   hide(document.getElementById(`${currentGame.humanPlayerSelectedChoice}`))
//   hide(document.getElementById(`${currentGame.computerPlayerSelectedChoice}`))
//   currentGame.resetBoard();
//   hide(humanWinsBanner)
//   hide(computerWinsBanner)
//   hide(gameDrawBanner)
//   show(rockImg)
//   show(paperImg)
//   show(scissorsImg)
// };


// function resetBoard() {
//   currentGame.resetBoard();
//   hide(humanWinsBanner)
//   hide(computerWinsBanner)
//   hide(gameDrawBanner)
//   show(chooseFighterBanner)
//   // show(rockImg)
//   // show(paperImg)
//   // show(scissorsImg)
// }

// Maybe refactor the selectChoice function and decide what parts need to stay and which are better
// suited to be in another function

// // change this later(better name)
// function showSelectedChoiceActions() {
//   currentGame.selectComputerChoice()
//   renderSelectedChoices()
//   currentGame.checkWinner()
//   displayWinnerBanner()
//   displayWins()
// };
