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
// event listeners 👇
classicModeButton.addEventListener('click', selectClassicGameMode);
difficultModeButton.addEventListener('click', selectDifficultGameMode);
changeGameButton.addEventListener('click', renderHomeView);
// functions 👇
function selectClassicGameMode() {
  show(classicIcons);
  renderGameView();
};

function selectDifficultGameMode() {
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

function displayWinner() {

};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};
