class Game {
  constructor() {
    this.humanPlayer = new Player('Human', '👨');
    this.computerPlayer = new Player('Computer', '💻');
    this.humanPlayerSelectedChoice = 'scissors'; // 'rock' or 'paper' or 'scissors'
    this.computerPlayerSelectedChoice = 'scissors'; // 'rock' or 'paper' or 'scissors'
    this.selectedGameMode = 'classicMode';
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
    }
    this.difficultGameRules = {};
  }
  checkWinnerClassic() {
    if(this.humanPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type && this.computerPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].beats) {
      console.log(`Human wins! (rock)`)
    } else if(this.humanPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type && this.computerPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type) {
      console.log(`Tie Game`)
    } else if(this.humanPlayerSelectedChoice === this.classicGameRules[this.humanPlayerSelectedChoice].type && this.computerPlayerSelectedChoice !== this.classicGameRules[this.humanPlayerSelectedChoice].beats) {
      console.log(`Computer Wins`)
    }
      // whatever object has now been selected by comparing if  is === to what the human player has selected i need to now compare if what
      // the computer has selected is in my(human's) objects beat key

      // if (this.humanPlayerSelectedChoice('') === this.classicGameRules[this.humanPlayerSelectedChoice]) {

    // determine the winner of this classic round by looking at both the humanPlayer's
    // selected choice and computerPlayer's selected choice and  see which wins based off the rules of the gamemode.
  };
  checkWinnerDifficult() {
    // determine the winner of this class ic round by looking at both the humanPlayer's
    // selected choice and computerPlayer's selected choice and  see which wins based off the rules of the gamemode.
  };
  resetBoard() {

  };
};
