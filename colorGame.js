let numberOfColors = 6;
let colors = [];
let pickedColor;
let squares = document.getElementsByClassName("square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#response");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.getElementsByClassName("mode");

init();

function init() {
  // modeButtons event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? numberOfColors = 3: numberOfColors = 6;
      reset();
    });
  }

  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again!";
      }
    });
  }

  reset();
}

function reset() {
  colors = generateColors(numberOfColors);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  // choose a random element of colors array
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateColors(numberOfColors) {
  let array = [];
  for (i = 0; i < numberOfColors; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    array[i] = "rgb(" + red + ", " + green + ", " + blue + ")";
  }
  return array;
}