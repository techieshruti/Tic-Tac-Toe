//container
const container = document.createElement("div");
document.body.appendChild(container);
container.style.backgroundColor = "#ffffffff";
container.style.width = "100%";
container.style.height = "100vh";
container.style.height = "100vh";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.flexDirection = "column";

// headings
const heading1 = document.createElement("h1");
container.appendChild(heading1);
heading1.textContent = "Welcome to TIC-TAC-TOE";
heading1.style.marginTop = "2rem";
heading1.style.marginBottom = "1rem";
heading1.style.fontSize = "3rem";
heading1.style.color = "#253d63";

// =============== start screen ============
// =========================================

const startscreen = document.createElement("div");
container.appendChild(startscreen);
startscreen.style.marginLeft = "2rem";
startscreen.style.fontSize = "1.5rem";
// startscreen.style.display = "none";

// paragraph
const para = document.createElement("p");
startscreen.appendChild(para);
para.textContent =
  " Tic-Tac-Toe is a classic 2-player strategy game where players take turns placing their symbol (X or O) on a 3x3 grid. The goal is to be the first to get three of your symbols in a row — horizontally, vertically, or diagonally.";

const heading2 = document.createElement("h2");
startscreen.appendChild(heading2);
heading2.textContent = "🧩 Game Rules";
heading2.style.margin = "1rem 0 1rem 2rem";

// unordered list
const ruleList = document.createElement("ul");
startscreen.appendChild(ruleList);
ruleList.style.margin = "0 0 2rem 4rem";
ruleList.style.lineHeight = "2.3rem";
ruleList.innerHTML = `
<li>The game is for 2 players.</li>
  <li>Player 1 chooses either X or O.</li>
  <li>Player 2 is automatically assigned the remaining symbol.</li>
  <li>Players take alternate turns placing their symbol in an empty cell.</li>
  <li>The first player to align three of their symbols wins the game.</li>
  <li>If all cells are filled without a winner, it's a draw.</li>
`;

//prompt function for user names and replace player 1 with user name
const player1Name = prompt("Enter Player 1's name:"); 
const player2Name = prompt("Enter Player 2's name:");

if (player1Name && player2Name) {
  para.innerHTML = `Welcome <span style="color:#e63946; font-weight: bold;">${player1Name}</span> and <span style="color:#457b9d; font-weight: bold;">${player2Name}</span>! Let's play Tic-Tac-Toe!`;
} else {
  para.textContent = "Welcome Player 1 and Player 2! Let's play Tic-Tac-Toe!";
}

// userchoice
const userChoiceText = document.createElement("p");
userChoiceText.textContent = `${player1Name}: Choose your symbol`;
startscreen.appendChild(userChoiceText);

const buttonX = document.createElement("button");
buttonX.textContent = "X";
startscreen.appendChild(buttonX);
styleSymbolButton(buttonX);

const buttonO = document.createElement("button");
buttonO.textContent = "O";
startscreen.appendChild(buttonO);
styleSymbolButton(buttonO);

let player1 = "";
let player2 = "";

buttonX.addEventListener("click", (e) => {
  const playerChoice = e.target.textContent.toUpperCase();
  player1 = playerChoice;
  player2 = playerChoice === "X" ? "X" : "O";
  clickSoundPlay();
});
buttonO.addEventListener("click", (e) => {
  const playerChoice = e.target.textContent.toUpperCase();
  player1 = playerChoice;
  player2 = playerChoice === "X" ? "O" : "X";
  clickSoundPlay();
});

// buton styles function
function styleSymbolButton(btn) {
  btn.style.padding = "1rem 2rem";
  btn.style.margin = "1rem";
  btn.style.fontSize = "1.2rem";
  btn.style.border = "none";
  btn.style.borderRadius = "1rem";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#253d63";
  btn.style.color = "#fff";
  btn.style.boxShadow = "1px 1px 15px #1a3766ff";

  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "green";
    btn.style.transition = "0.5s ease-in";
    btn.style.boxShadow = "1px 1px 15px #113f0cff";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#253d63";
    btn.style.transition = "0.5s ease-in";
    btn.style.boxShadow = "1px 1px 15px #1a3766ff";
  });
}

// startgame button
const btn = document.createElement("button");
startscreen.appendChild(btn);
btn.textContent = "Start Game";
styleSymbolButton(btn);

btn.addEventListener("click", () => {
  clickSoundPlay();
  if (player1 === "" && player2 === "") {
    drawSoundPlay();
        customAlert("Please choose your symbol!!");
    return;
  }
  currentPlayer = player1;
  startscreen.style.display = "none";
  gameScreen.style.display = "block";
});

// =============== Game screen =============
// =========================================

const gameScreen = document.createElement("div");
container.appendChild(gameScreen);
gameScreen.style.width = "100%";
gameScreen.style.height = "100vh";
gameScreen.style.display = "grid";
gameScreen.style.justifyItems = "center";
gameScreen.style.display = "none";

// game grid
const gridBox = document.createElement("div");
gameScreen.appendChild(gridBox);
gridBox.style.display = "grid";
gridBox.style.gridTemplateColumns = "1fr 1fr 1fr";
gridBox.style.gridTemplateRows = "1fr 1fr 1fr";
gridBox.style.gap = "1rem";
gridBox.style.maxWidth = "300px";
gridBox.style.margin = "3rem";
gridBox.style.width = "100%";
gridBox.style.aspectRatio = "1 / 1";

// global variable
let currentPlayer = "";
let board = Array(9).fill("");
let gameActive = true;
let cells = []; // Store all cell elements
let winningCells = [];

// Cursor label
const cursorLabel = document.createElement("div");
gameScreen.appendChild(cursorLabel);
cursorLabel.style.position = "absolute";
cursorLabel.style.pointerEvents = "none";
cursorLabel.style.background = "#253d63";
cursorLabel.style.color = "#fff";
cursorLabel.style.padding = "4px 8px";
cursorLabel.style.fontSize = "0.9rem";
cursorLabel.style.borderRadius = "6px";
cursorLabel.style.boxShadow = "0 0 8px rgba(0,0,0,0.3)";
cursorLabel.style.zIndex = "9999";
cursorLabel.style.display = "none"; // hide by default

document.addEventListener("mousemove", (e) => {
  if (!gameActive) return;

  cursorLabel.style.left = e.pageX + 15 + "px";
  cursorLabel.style.top = e.pageY + 15 + "px";
  cursorLabel.textContent =
    currentPlayer === player1 ? player1Name : player2Name;
  cursorLabel.style.display = "block";
});

// grid cells
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  gridBox.appendChild(cell);

  cell.style.display = "flex";
  cell.style.justifyContent = "center";
  cell.style.alignItems = "center";
  cell.style.backgroundColor = "#851e1cff";
  cell.style.borderRadius = "1rem";
  cell.style.cursor = "pointer";
  cell.style.fontSize = "3rem";
  cell.style.color = "#fff";
  cell.style.boxShadow = "2px 2px 10px #943a39ff";
  cells.push(cell);

  // icon "O"
  const circle = document.createElement("i");
  cell.appendChild(circle);
  circle.classList.add("fa-solid", "fa-o");
  circle.style.display = "none";

  // icon "X"
  const cross = document.createElement("i");
  cell.appendChild(cross);
  cross.classList.add("fa-solid", "fa-x");
  cross.style.display = "none";

  // MouseOver Event
  cell.addEventListener("mouseover", () => {
    const index = Array.from(cells).indexOf(cell);
    if (winningCells.includes(index)) return;
    cell.style.backgroundColor = "#c39531ff";
    cell.style.boxShadow = "2px 2px 10px #9a7527ff";
    cell.style.transition = "0.5s ease-in";
    cell.style.color = "black";
  });
  // MouseOut Event
  cell.addEventListener("mouseout", () => {
    const index = Array.from(cells).indexOf(cell);
    if (winningCells.includes(index)) return;
    cell.style.backgroundColor = "#851e1cff";
    cell.style.transition = "0.5s ease-in";
    cell.style.boxShadow = "2px 2px 10px #943a39ff";
    cell.style.color = "#fff";
  });

  // MouseClick on cell logic

  cell.addEventListener("click", () => {
    clickSoundPlay();
    const index = cells.indexOf(cell);
    // cells are filled
    if (!gameActive || board[index] !== "") {
      return;
    }
    board[index] = currentPlayer;

    // if cells are empty
    if (currentPlayer === "X") {
      cross.style.display = "block";
    } else {
      circle.style.display = "block";
    }

    // winning combinations
    function checkWinner() {
      const winCombos = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
      ];

      for (let i = 0; i < winCombos.length; i++) {
        const combo = winCombos[i]; // e.g., [0, 1, 2]
        const a = combo[0];
        const b = combo[1];
        const c = combo[2];

        if (
          board[a] === currentPlayer &&
          board[b] === currentPlayer &&
          board[c] === currentPlayer
        ) {
          return combo; // currentPlayer has won
        }
      }
      return false; // no win found
    }

    // winner
    const winningCombo = checkWinner();
    if (winningCombo) {
      winningCells = winningCombo; // Store winning cells globally
      winningCombo.forEach((index) => {
        const cell = cells[index];
        cell.style.backgroundColor = "#c39531ff";
        cell.style.boxShadow = "2px 2px 10px #9a7527ff";
        cell.style.transition = "0.5s ease-in";
        cell.style.color = "black";
      cursorLabel.style.display = "none"; // hide cursor label
      });
      gameActive = false; // ✅ Prevent further clicks
      clapSoundPlay();  
      setTimeout(() => {
        //player name in alert
        const playerName = currentPlayer === player1 ? player1Name : player2Name;
        // ✅ Defer alert until after DOM paints  
        customAlert(`Yeah ${playerName} wins!`);
      }, 1000);
      return;
    }
    
    // Check for draw
    if (board.every((cell) => cell !== "")) {
      gameActive = false; // ✅ Prevent further clicks
      
      // ✅ Defer alert until after DOM paints
  setTimeout(() => {
    customAlert("It's a draw! No more moves available.");
  }, 1000);
      drawSoundPlay();
      // Highlight all cells
      cells.forEach((cell) => {
        cell.style.backgroundColor = "#5d5d5aff";
        cell.style.boxShadow = "2px 2px 10px #111111ff";
        cell.style.color = "white";
        cell.style.disable = true; // Disable further clicks
      }); 
    }

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
}

function customAlert(message){
  // Overlay background
  const overlay = document.createElement("div");
  overlay.id = "custom-alert";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "999";

// custom alert
const alertBox = document.createElement("div");
overlay.appendChild(alertBox);
alertBox.textContent = message;
alertBox.style.backgroundColor="#fff"
alertBox.style.padding="2rem 4rem";
alertBox.style.textAlign="center";
alertBox.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
alertBox.style.borderRadius="1rem"
alertBox.style.fontSize = "1.5rem";
alertBox.style.color = "#333";

// Dismiss on click
  alertBox.style.cursor = "pointer";
  alertBox.addEventListener("click", () => {
    overlay.remove();
  });

  document.body.appendChild(overlay);
}

const clickSound = new Audio("sounds/click.mp3");
function clickSoundPlay() {
  clickSound.currentTime = 0;
  clickSound.play();
}

const clapSound = new Audio("sounds/clapping.mp3");
function clapSoundPlay() {
  clapSound.currentTime = 0;
  clapSound.play();
}

const drawSound = new Audio("sounds/failed.mp3");
function drawSoundPlay() {
  drawSound.currentTime = 0;
  drawSound.play();
}

const bottombtns = document.createElement("div");
gameScreen.appendChild(bottombtns);
bottombtns.style.display = "flex";
bottombtns.style.justifyContent = "center";
bottombtns.style.width = "100vw";

const resetBtn = document.createElement("button");
bottombtns.appendChild(resetBtn);
resetBtn.textContent = "Home Screen";
resetBtn.style.display = "flex";
styleSymbolButton(resetBtn);

//========================================
//===========restart game============
//========================================
const restartBtn = document.createElement("button");
bottombtns.appendChild(restartBtn);
restartBtn.textContent = "Restart Game";
restartBtn.style.display = "flex";
styleSymbolButton(restartBtn);
restartBtn.addEventListener("click", () => {
  clickSoundPlay();
  // Reset board data
  board = Array(9).fill("");
  gameActive = true;
  winningCells = [];

  // Reset cell UI
  cells.forEach((cell) => {
    cell.style.backgroundColor = "#851e1cff";
    cell.style.boxShadow = "2px 2px 10px #943a39ff";
    cell.style.color = "#fff";
    cell.querySelector(".fa-x").style.display = "none";
    cell.querySelector(".fa-o").style.display = "none";
  });
});
