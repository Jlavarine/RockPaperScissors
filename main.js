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
var humanChoice = document.querySelector('.human-choice');
var computerChoice = document.querySelector('.computer-choice');
var alienImg = document.getElementById('alien');
var lizardImg = document.getElementById('lizard');
var banners = document.querySelectorAll('.banner')
var allChoices = document.querySelectorAll('.choice-icon')
var currentGame = new Game();
// event listeners 👇
classicModeButton.addEventListener('click', selectClassicGameMode);
difficultModeButton.addEventListener('click', selectDifficultGameMode);
changeGameButton.addEventListener('click', renderHomeView);
playerChoices.addEventListener('click', selectChoice);
// functions 👇
function selectClassicGameMode() {
  currentGame.selectedGameMode = 'classic';
  show(playerChoices);
  hide(alienImg);
  hide(lizardImg);
  renderGameView();
};

function selectDifficultGameMode() {
  currentGame.selectedGameMode = 'difficult';
  show(playerChoices);
  showAll(allChoices);
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
  hideAll(banners);
};

function selectChoice() {
  if(event.target.id) {
    currentGame.humanPlayerSelectedChoice = event.target.id;
    currentGame.humanPlayer.takeTurn();
    currentGame.selectComputerChoice();
    renderSelectedChoices();
    currentGame.checkWinner();
    displayWinner();
  };
};

function show(element) {
  element.classList.remove('hidden');
};

function showAll(type) {
  for(i = 0; i < type.length; i++) {
    show(type[i]);
  };
};

function hide(element) {
  element.classList.add('hidden');
};

function hideAll(type) {
  for(i = 0; i < type.length; i++) {
    hide(type[i]);
  };
};

function renderSelectedChoices() {
  if(currentGame.selectedGameMode === 'classic') {
    showPlayerChoices();
    humanChoice.innerHTML = `<p class="selected">${currentGame.humanPlayer.token} selected:</p><img id="${currentGame.humanPlayerSelectedChoice}" src="assets/happy-${currentGame.humanPlayerSelectedChoice}.png" alt="happy ${currentGame.humanPlayerSelectedChoice}">`;
    computerChoice.innerHTML = `<p class="selected">${currentGame.computerPlayer.token} selected:</p><img id="${currentGame.computerPlayerSelectedChoice}" src="assets/happy-${currentGame.computerPlayerSelectedChoice}.png" alt="happy ${currentGame.computerPlayerSelectedChoice}">`;
    setTimeout('resetBoardClassic()', 2000);
  } else if(currentGame.selectedGameMode === 'difficult') {
    showPlayerChoices();
    humanChoice.innerHTML = `<p class="selected">${currentGame.humanPlayer.token} selected:</p><img id="${currentGame.humanPlayerSelectedChoice}" src="assets/happy-${currentGame.humanPlayerSelectedChoice}.png" alt="happy ${currentGame.humanPlayerSelectedChoice}">`;
    computerChoice.innerHTML = `<p class="selected">${currentGame.computerPlayer.token} selected:</p><img id="${currentGame.computerPlayerSelectedChoice}" src="assets/happy-${currentGame.computerPlayerSelectedChoice}.png" alt="happy ${currentGame.computerPlayerSelectedChoice}">`;
    setTimeout('resetBoardDifficult()', 2000);
  };
};

function showPlayerChoices() {
  show(humanChoice);
  show(computerChoice);
  hide(playerChoices);
};

function displayWinner() {
  hideAll(banners);
  if(currentGame.winner === 'Human') {
    show(humanWinsBanner);
    humanWinsCounter.innerText = `Wins: ${currentGame.humanPlayer.wins}`;
  } else if(currentGame.winner === 'Computer') {
    show(computerWinsBanner);
    computerWinsCounter.innerText = `Wins: ${currentGame.computerPlayer.wins}`;
  } else if(currentGame.winner === 'Draw') {
    show(gameDrawBanner);
  };
};

function resetGame() {
  hide(humanChoice);
  hide(computerChoice);
  currentGame.resetBoard();
  hideAll(banners);
  show(chooseFighterBanner);
  show(playerChoices);
}

function resetBoardClassic() {
  resetGame()
  showAll(allChoices);
  hide(alienImg);
  hide(lizardImg);
};

function resetBoardDifficult() {
  resetGame();
  showAll(allChoices);
};
