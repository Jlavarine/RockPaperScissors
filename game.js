class Game {
  constructor() {
    this.humanPlayer = new Player('Human', '👨');
    this.computerPlayer = new Player('Computer', '💻');
    this.humanPlayerSelectedChoice = humanPlayer.selectedChoice; // 'rock' or 'paper' or 'scissors'
    this.computerPlayerSelectedChoice = computerPlayer.selectedChoice; // 'rock' or 'paper' or 'scissors'
    this.selectedGameMode = humanPlayer.selectedGameMode;
    this.classicGameRules = {
      {type: rock,
       losesAgainst: paper,
       beats: scissors
     },
      {type: paper,
       losesAgainst: scissors,
       beats: rock
     },
      {type: scissors,
       losesAgainst: rock,
       beats: paper
      }
    }
    // access type,losesAgainst,and beats using bracket notation
    // humanPlayer.selectedChoice ("") === this.classicGameRules.type[""]
    this.difficultGameRules =
  }
  checkWinnerClassic() {
    // determine the winner of this class ic round by looking at both the humanPlayer's
    // selected choice and computerPlayer's selected choice and  see which wins based off the rules of the gamemode.
  };
  checkWinnerDifficult() {
    // determine the winner of this class ic round by looking at both the humanPlayer's
    // selected choice and computerPlayer's selected choice and  see which wins based off the rules of the gamemode.
  };
  resetBoard() {

  };
};
module.exports = Game;
