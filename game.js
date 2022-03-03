class Game {
  constructor() {
    this.humanPlayer = new Player('Human', '👨');
    this.computerPlayer = new Player('Computer', '💻');
    this.humanPlayerSelectedChoice = 'rock'; // 'rock' or 'paper' or 'scissors'
    this.computerPlayerSelectedChoice = 'alien'; // 'rock' or 'paper' or 'scissors'
    this.selectedGameMode = 'difficultMode';
    // this.humanPlayer = new Player('Human', '👨');
    // this.computerPlayer = new Player('Computer', '💻');
    // this.humanPlayerSelectedChoice = humanPlayer.selectedChoice; // 'rock' or 'paper' or 'scissors'
    // this.computerPlayerSelectedChoice = computerPlayer.selectedChoice; // 'rock' or 'paper' or 'scissors'
    // this.selectedGameMode = humanPlayer.selectedGameMode;
    this.classicGameRules = {
      rock: {
        type: 'rock',
        losesAgainst: 'paper',
        beats: 'scissors'
      },
      paper: {
        type: 'paper',
        losesAgainst: 'scissors',
        beats: 'rock'
      },
      scissors: {
        type: 'scissors',
        losesAgainst: 'rock',
        beats: 'paper'
      }
    };
    this.difficultGameRules = {
      rock: {
        type: 'rock',
        losesAgainst: ['paper', 'alien'],
        beats: ['scissors', 'lizard']
      },
      paper: {
        type: 'paper',
        losesAgainst: ['scissors', 'lizard'],
        beats: ['rock', 'alien']
      },
      scissors: {
        type: 'scissors',
        losesAgainst: ['rock', 'alien'],
        beats: ['paper', 'lizard']
      },
      lizard: {
        type: 'lizard',
        losesAgainst: ['rock', 'scissors'],
        beats: ['paper', 'alien']
      },
      alien: {
        type: 'alien',
        losesAgainst: ['paper', 'lizard'],
        beats: ['scissors', 'rock']
      },
    };
  }
  checkWinnerClassic() {
    if(this.humanPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type && this.computerPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].beats) {
      console.log(`Human wins!`);
      this.humanPlayer.wins += 1;
    } else if(this.humanPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type && this.computerPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type) {
      console.log(`Tie Game`);
    } else if(this.humanPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type && this.computerPlayerSelectedChoice !== this.classicGameRules[this.humanPlayerSelectedChoice].beats) {
      console.log(`Computer Wins`);
      this.computerPlayer.wins += 1;
    }
  };
  checkWinnerDifficult() {
    if(this.humanPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].type && (this.computerPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].beats[0] || this.computerPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].beats[1])) {
      console.log(`Human wins!`);
      this.humanPlayer.wins += 1;
    } else if(this.humanPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].type && this.computerPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].type) {
      console.log(`Tie Game`);
    } else if(this.humanPlayerSelectedChoice === this.difficultGameRules[this.humanPlayerSelectedChoice].type && (this.computerPlayerSelectedChoice !== this.difficultGameRules[this.humanPlayerSelectedChoice].beats[0] || this.computerPlayerSelectedChoice !== this.difficultGameRules[this.humanPlayerSelectedChoice].beats[1])) {
      console.log(`Computer Wins`);
      this.computerPlayer.wins += 1;
    }
  };
  resetBoard() {
    this.humanPlayerSelectedChoice = '';
    this.computerPlayerSelectedChoice = '';
    this.selectedGameMode = '';
    console.log('reset')
  };
};
