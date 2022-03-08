class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.selectedGameMode = '';
    this.selectedChoice = '';
  };
  takeTurn() {
    return this.selectedChoice;
  };
  computerPick() {
    currentGame.selectComputerChoice()
  }
};
