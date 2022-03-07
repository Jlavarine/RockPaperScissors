class Game {
  constructor() {
    this.humanPlayer = new Player('Human', '👨');
    this.computerPlayer = new Player('Computer', '💻');
    this.humanPlayerSelectedChoice = '';
    this.computerPlayerSelectedChoice = '';
    this.selectedGameMode = '';
    this.classicGameRules = {
      rock: {
        losesAgainst: 'paper',
        beats: 'scissors'
      },
      paper: {
        losesAgainst: 'scissors',
        beats: 'rock'
      },
      scissors: {
        losesAgainst: 'rock',
        beats: 'paper'
      }
    };
    this.difficultGameRules = {
      rock: {
        losesAgainst: ['paper', 'alien'],
        beats: ['scissors', 'lizard']
      },
      paper: {
        losesAgainst: ['scissors', 'lizard'],
        beats: ['rock', 'alien']
      },
      scissors: {
        losesAgainst: ['rock', 'alien'],
        beats: ['paper', 'lizard']
      },
      lizard: {
        losesAgainst: ['rock', 'scissors'],
        beats: ['paper', 'alien']
      },
      alien: {
        losesAgainst: ['paper', 'lizard'],
        beats: ['scissors', 'rock']
      },
    };
    this.winner = '';
  };
  selectComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var choicesDifficult = ['rock', 'paper', 'scissors', 'lizard', 'alien'];
    if(this.selectedGameMode === 'difficult') {
      return this.computerPlayerSelectedChoice = choicesDifficult[Math.floor(Math.random() * choicesDifficult.length)];
    } else if(this.selectedGameMode === 'classic') {
      return this.computerPlayerSelectedChoice = choices[Math.floor(Math.random() * choices.length)];
    };
  };

  checkWinnerClassic() {
    if(this.computerPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].beats) {
      this.winner = 'Human';
      this.humanPlayer.wins += 1;
    } else if(this.computerPlayerSelectedChoice === this.humanPlayerSelectedChoice) {
      this.winner = 'Draw';
    } else if(this.computerPlayerSelectedChoice !== this.classicGameRules[this.humanPlayerSelectedChoice].beats) {
      this.winner = 'Computer';
      this.computerPlayer.wins += 1;
    };
  };

  checkWinnerDifficult() {
    if(this.computerPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].beats[0] || this.computerPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].beats[1]) {
      this.humanPlayer.wins += 1;
      this.winner = 'Human';
    } else if(this.computerPlayerSelectedChoice === this.humanPlayerSelectedChoice) {
      this.winner = 'Draw';
    } else if(this.computerPlayerSelectedChoice !== this.difficultGameRules[this.humanPlayerSelectedChoice].beats[0] || this.computerPlayerSelectedChoice !== this.difficultGameRules[this.humanPlayerSelectedChoice].beats[1]) {
      this.computerPlayer.wins += 1;
      this.winner = 'Computer';
    };
  };

  checkWinner() {
    if(this.selectedGameMode === 'classic') {
      this.checkWinnerClassic();
    } else if (this.selectedGameMode === 'difficult') {
      this.checkWinnerDifficult();
    };
  };

  resetBoard() {
    this.humanPlayerSelectedChoice = '';
    this.computerPlayerSelectedChoice = '';
  };
};
