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
var classicIcons = document.querySelector('.classic-choices');
var difficultIcons = document.querySelector('.difficult-choices');
var rockImg = document.querySelector('.rock');
var paperImg = document.querySelector('.paper');
var scissorsImg = document.querySelector('.scissors');
var alienImg = document.querySelector('.alien');
var lizardImg = document.querySelector('.lizard');
var classicIconsArray = [rockImg, paperImg, scissorsImg];
var difficultIconsArray = [rockImg, paperImg, scissorsImg, alienImg, lizardImg]


var currentGame = new Game();
var humanPlayer = currentGame.humanPlayer;
var computerPlayer = currentGame.computerPlayer;
// event listeners 👇
classicModeButton.addEventListener('click', selectClassicGameMode);
difficultModeButton.addEventListener('click', selectDifficultGameMode);
changeGameButton.addEventListener('click', renderHomeView);
// functions 👇
function selectClassicGameMode() {
  currentGame.selectedGameMode = 'classic'
  show(classicIcons);
  renderGameView();
};

function selectDifficultGameMode() {
  currentGame.selectedGameMode = 'difficult'
  show(difficultIcons);
  renderGameView();
};

function renderGameView() {
  hide(chooseGameBanner);
  hide(classicModeButton);
  hide(difficultModeButton);
  show(chooseFighterBanner);
  show(changeGameButton);
}


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
    show(document.querySelector(`.${currentGame.humanPlayerSelectedChoice}`))
    show(document.querySelector(`.${currentGame.computerPlayerSelectedChoice}`))
  } else if(currentGame.selectedGameMode === 'difficult') {
    hideIcons(difficultIconsArray);
    show(document.querySelector(`.${currentGame.humanPlayerSelectedChoice}`))
    show(document.querySelector(`.${currentGame.computerPlayerSelectedChoice}`))
  }
}



// function renderSelectedChoices() {
//     if(currentGame.selectedGameMode === 'classic') {
//       for(i = 0; i < classicIconsArray.length; i++) {
//         hide(classicIconsArray[i])
//         show(document.querySelector(`.${currentGame.humanPlayerSelectedChoice}`))
//         show(document.querySelector(`.${currentGame.computerPlayerSelectedChoice}`))
//       }
//       } else if(currentGame.selectedGameMode === 'difficult') {
//         for(i = 0; i < difficultIconsArray.length; i++) {
//           // hide(classicIconsArray[0])
//           // hide(classicIconsArray[1])
//           // hide(classicIconsArray[2])
//           hide(difficultIconsArray[i])
//           show(document.querySelector(`.${currentGame.humanPlayerSelectedChoice}`))
//           show(document.querySelector(`.${currentGame.computerPlayerSelectedChoice}`))
//         }
//       }
//     }
