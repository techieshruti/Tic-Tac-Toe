//container
const container = document.createElement("div");
document.body.appendChild(container);
container.style.backgroundColor="#adb7c0ff";
container.style.width="100%";
container.style.height="100vh";
container.style.height="100vh";
container.style.display="flex"
container.style.justifyContent="center"
container.style.flexDirection="column"

// headings
const heading1 = document.createElement("h1");
container.appendChild(heading1);
heading1.textContent="TIC-TAC-TOE"

// game grid
const gridBox = document.createElement("div");
container.appendChild(gridBox);
gridBox.style.display="grid";
gridBox.style.gridTemplateColumns="1fr 1fr 1fr";
gridBox.style.gridTemplateRows="1fr 1fr 1fr";
gridBox.style.backgroundColor="red";
gridBox.style.padding="1rem"
gridBox.style.maxWidth="500px"
gridBox.style.margin="1rem"
gridBox.style.width = "100%";
gridBox.style.aspectRatio = "1 / 1";