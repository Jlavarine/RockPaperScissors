//global variables 👇
var chooseFighterBanner = document.querySelector('.choose-fighter');
var classicModeButton = document.querySelector('.classic-mode');
var difficultModeButton = document.querySelector('.difficult-mode');
var changeGameButton = document.querySelector('.change-game-button');
var resetGameButton = document.querySelector('.reset-game-button');
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
resetGameButton.addEventListener('click', resetScores);
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
  show(changeGameButton)
  show(resetGameButton);
};

function renderHomeView() {
  show(chooseGameBanner);
  show(classicModeButton);
  show(difficultModeButton);
  hide(chooseFighterBanner);
  hide(changeGameButton);
  hide(resetGameButton);
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
  showPlayerChoices();
  humanChoice.innerHTML = `<p class="selected">${currentGame.humanPlayer.token} selected:</p><img id="${currentGame.humanPlayerSelectedChoice}" src="assets/happy-${currentGame.humanPlayerSelectedChoice}.png" alt="happy ${currentGame.humanPlayerSelectedChoice}">`;
  computerChoice.innerHTML = `<p class="selected">${currentGame.computerPlayer.token} selected:</p><img id="${currentGame.computerPlayerSelectedChoice}" src="assets/happy-${currentGame.computerPlayerSelectedChoice}.png" alt="happy ${currentGame.computerPlayerSelectedChoice}">`;
  if(currentGame.selectedGameMode === 'classic') {
    setTimeout('resetBoardClassic()', 1500);
  } else if(currentGame.selectedGameMode === 'difficult') {
    setTimeout('resetBoardDifficult()', 1500);
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
    show(document.querySelector('.human-wins'));
    humanWinsCounter.innerText = `Wins: ${currentGame.humanPlayer.wins}`;
  } else if(currentGame.winner === 'Computer') {
    show(document.querySelector('.computer-wins'));
    computerWinsCounter.innerText = `Wins: ${currentGame.computerPlayer.wins}`;
  } else if(currentGame.winner === 'Draw') {
    show(document.querySelector('.game-draw'));
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

function resetScores() {
  currentGame.humanPlayer.wins = 0;
  currentGame.computerPlayer.wins = 0;
  humanWinsCounter.innerText = 'Wins: 0';
  computerWinsCounter.innerText = 'Wins: 0';
}
