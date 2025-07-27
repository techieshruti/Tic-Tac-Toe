//container
const container = document.createElement("div");
document.body.appendChild(container);
container.style.backgroundColor = "#c7d6e3ff";
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
heading1.style.fontSize = "4rem";

// =============== start screen ============
// =========================================
 
const startscreen=document.createElement("div");
container.appendChild(startscreen);

// paragraph
const para = document.createElement("p");
startscreen.appendChild(para);
para.textContent=" Tic-Tac-Toe is a classic 2-player strategy game where players take turns placing their symbol (X or O) on a 3x3 grid. The goal is to be the first to get three of your symbols in a row — horizontally, vertically, or diagonally.";
para.style.fontSize="2rem"
para.style.margin="2rem"

const heading2=document.createElement("h2");
startscreen.appendChild(heading2);
// 
const ul =document.createElement("ul");
startscreen.appendChild(ul);
const li=document.createElement("li");
startscreen.appendChild(li);
li.style.margin="3rem"
li.style.fontSize="1.5rem";
li.textContent="The game is for 2 players.";

// =============== Game screen =============
// =========================================

// game grid
const gridBox = document.createElement("div");
// container.appendChild(gridBox);
gridBox.style.display = "grid";
gridBox.style.gridTemplateColumns = "1fr 1fr 1fr";
gridBox.style.gridTemplateRows = "1fr 1fr 1fr";
gridBox.style.gap = "1rem";
gridBox.style.maxWidth = "300px";
gridBox.style.margin = "1rem";
gridBox.style.width = "100%";
gridBox.style.aspectRatio = "1 / 1";

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
  cell.style.fontSize="3rem";
  cell.style.color="#fff";
  cell.style.boxShadow = "2px 2px 10px #943a39ff";

  // icons
  const circle = document.createElement("i");
  cell.appendChild(circle);
  circle.id=circle;
  circle.classList.add("fa-solid","fa-o");
  circle.style.display="none";

  const cross = document.createElement("i");
  cell.appendChild(cross);
  cross.id=cross;
  cross.classList.add("fa-solid","fa-x");
  cross.style.display="none";

// MouseOver Event
  cell.addEventListener("mouseover", ()=>{
    cell.style.backgroundColor="#c39531ff";
    cell.style.boxShadow="2px 2px 10px #9a7527ff"
    cell.style.transition="0.5s ease-in";
    cell.style.color="black";
  });
// MouseOut Event
  cell.addEventListener("mouseout", ()=>{
    cell.style.backgroundColor="#851e1cff";
    cell.style.transition="0.5s ease-in"
  cell.style.boxShadow = "2px 2px 10px #943a39ff";
    cell.style.color="#fff";  
});

let choice=circle.id;
// MouseClick Event
cell.addEventListener("click", ()=>{
    if(choice === circle.id){
        circle.style.display="block";
    } else{
        cross.style.display="block";
    }
});
}
