class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.selectedGameMode = '';
    this.selectedChoice = '';
  };
  selectGameMode() {
    // based on which gamemode button is clicked:
    // display the appropriate gameMode icons
    // store selected game mode in this.selectedGameMode
  };
  selectComputerChoice() {
    // random generator to have the computer select one of three options: rock,paper,Scissors
    // that choice is then stored in this.selectedChoice for the computer
  };
  takeTurn() {
    // player clicks one of the images to select its choice.
    // that choice is then stored in this.selectedChoice for the human
  };
};
module.exports = Player;
