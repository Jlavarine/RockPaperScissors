# **🪨📄✄Rock, Paper, Scissors🪨📄✄**

This web app allows users to play rock,paper,scissors with a computer player. The user has a choice of either Classic Mode or Difficult Mode(which gives the user 5 options to choose from instead of the normal 3). Rock, Paper, Scissors was a learning assignment for the Front End Development program at Turing School of Software and Design. The following contributors had approximately 5 weeks experience using JavaScript, HTML and CSS.

# **Contributors**

[Jacob Lavarine](https://github.com/Jlavarine)

# **Technologies Used**

- JavaScript
- HTML
- CSS

# **Local Set up Instructions**
- Fork this repo to create your own copy.
- Clone your newly-forked repo. Make sure SSH is selected.
- Type cd Rock, Paper, Scissors to move into the root directory.
- Use a text editor of your choice to make changes to the file.
- See you changes in the browser by running open index.html in your terminal.
- The application is also accessible via this deploy link: [Rock, Paper, Scissors](https://github.com/Jlavarine/RockPaperScissors)


# **Instructions For Use**
- Upon the browser loading the user will the two buttons for either game mode displayed, as well as a human-player side(with win count), and a computer-player side(with win count).
- The user can click either the _“Classic”_ or _"Difficult"_ button depending on which rules you would like to play by.
## Game Mode Buttons Demo
![Game Mode Buttons](https://media.giphy.com/media/he1BXvZ41NO2IbIay2/giphy.gif)
- The user then will see the associated icons for the game mode selected. The user will choose their selection by
clicking on the icon of their choice. The computer-player will then have a choice randomly selected for them.
- Once both users have their choices, the icons of the choices will display, a banner will show who won, and the winner of the round will see their win counter increase by one.
## Classic Mode Icon Demo
![Show Choice Icons](https://media.giphy.com/media/Ho7MhtgS80YMbWhf5e/giphy.gif)
- The board will then reset and the user can continue playing as many times as they would like.
- If the user would like to try the other mode, they can click on the _"Change Game?"_ button which will bring them to the main view and from there they can select the other game mode.
## Change Button Demo
![Change Game Button](https://media.giphy.com/media/FKvlw1WC6YutQh1NCG/giphy.gif)
- Both game modes function the same way. Once a choice is selected the computer-player will then have a choice randomly selected for them. Once both users have their choices, the icons of the choices will display, a banner will show who won, and the winner of the round will see their win counter increase by one.
## Win Counter Demo
![Win Counter](https://media.giphy.com/media/0fVwQ590SRhTZVDKUq/giphy.gif)

# **Code Architecture**

This project consists of 5 primary files - Game.js, Player.js, Main.js, index.html, styles.css and ancillary files containing images.

- Game.js and Player.js are the two class files that interact with the data model.
- Main.js houses our JavaScript functionality

# **Future Updates**

- In the future I would like to add the option for local storage, so that if the user wanted to store their wins they could.
- As of right now, the win counter will reset on page load.
