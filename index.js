// Dice Role Function


if (window.performance.navigation.type === 1) {
  diceTest();
}

function diceTest() {



// Dice Math

var playerOneDice = Math.floor(Math.random()*6) + 1;
var playerTwoDice = Math.floor(Math.random()*6) + 1;

// Selecting Images

var imageSelector1 = document.querySelector(".img1");
var imageSelector2 = document.querySelector(".img2");

// Changing Images

imageSelector1.setAttribute("src","images/dice" + playerOneDice + ".png");
imageSelector2.setAttribute("src","images/dice" + playerTwoDice + ".png");

// Changing Title

var title = document.querySelector("h1")

if (playerOneDice > playerTwoDice) {
  title.innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!"}
else if (playerOneDice < playerTwoDice) {title.innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>"}
else if (playerOneDice === playerTwoDice) {title.innerHTML = "Draw!"}

}

// ALTERNATIVE CODE

// Player One Dice Rolls


// if (playerOneDice === 1){imageSelector1.setAttribute("src","images/dice1.png")
//   }
// else if (playerOneDice === 2){imageSelector1.setAttribute("src","images/dice2.png")
//   }
// else if (playerOneDice === 3){imageSelector1.setAttribute("src","images/dice3.png")
//   }
// else if (playerOneDice === 4){imageSelector1.setAttribute("src","images/dice4.png")
//   }
// else if (playerOneDice === 5){imageSelector1.setAttribute("src","images/dice5.png")
//     }
// else if (playerOneDice === 6){imageSelector1.setAttribute("src","images/dice6.png")
//   }
//
// // Player Two Dice Rolls
//
// if (playerTwoDice === 1){imageSelector2.setAttribute("src","images/dice1.png")
//   }
// else if (playerTwoDice === 2){imageSelector2.setAttribute("src","images/dice2.png")
//   }
// else if (playerTwoDice === 3){imageSelector2.setAttribute("src","images/dice3.png")
//   }
// else if (playerTwoDice === 4){imageSelector2.setAttribute("src","images/dice4.png")
//   }
// else if (playerTwoDice === 5){imageSelector2.setAttribute("src","images/dice5.png")
//     }
// else if (playerTwoDice === 6){imageSelector2.setAttribute("src","images/dice6.png")
//   }



  var title = document.querySelector("h1")

if (playerOneDice > playerTwoDice) {
    title.innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!"}
else if (playerOneDice < playerTwoDice) {title.innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>"}
else if (playerOneDice === playerTwoDice) {title.innerHTML = "Draw!"}
