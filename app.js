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
heading1.textContent = "TIC-TAC-TOE";
heading1.style.margin = "3rem";
heading1.style.fontSize = "4rem";

// game grid
const gridBox = document.createElement("div");
container.appendChild(gridBox);
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

  //
  // icons
  const circle = document.createElement("i");
  cell.appendChild(circle);
  circle.classList.add("fa-solid","fa-o");
  circle.style.display="none";
  const cross = document.createElement("i");
  cell.appendChild(cross);
  cross.classList.add("fa-solid","fa-x");

  // cell.addEventListener("mouseover", (){    });
}
