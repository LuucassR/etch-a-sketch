let rows = 16;
let columns = 16;
const container = document.createElement("div");
container.classList.add("grid");
document.body.appendChild(container);

function generateDivs(rows, cols){
  const squareSize = 960 / rows
  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < cols; k++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.opacity = "0"; // opacidad inicial
      square.style.width =  `${squareSize}px`
      square.style.height =  `${squareSize}px`
      container.appendChild(square);
    }
  }
}

function getRandomInt(){
  return Math.floor(Math.random() * 256);
}


  generateDivs(rows, columns)

// function changeColorOnMouseOver(){
//   const squares = container.querySelectorAll(".square")
//   squares.forEach(square =>
//     square.addEventListener("mouseover", () => {
//         square.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
//         let currentOpacity = parseFloat(square.style.opacity);
//         square.style.opacity = (currentOpacity - 0.1).toString();
//  })
// }

function changeColorOnMouseOver() {
  const squares = container.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
      // Disminuir opacidad gradualmente
      let currentOpacity = parseFloat(square.style.opacity);
      if (currentOpacity < 1) {
        square.style.opacity = (currentOpacity + 0.1).toString();
      }
    });
  });
}

changeColorOnMouseOver()

const btn = document.querySelector(".changeAndReset")

btn.addEventListener("click", () => {
  const element = document.querySelector(".grid")
  while (element.firstChild){
    element.removeChild(element.firstChild)
  }

  let userInput = parseInt(prompt("Number of squares per side (now is 16): "));
  generateDivs(userInput, userInput)
  changeColorOnMouseOver()
})
