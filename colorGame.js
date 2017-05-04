//DECLARING VARIABLES
var numSquares = 12;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");
var expertBtn = document.querySelector("#expertBtn");



//easy click event
easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    expertBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 12; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i]
        } 
        else {
            squares[i].style.background = "none";
        }
    }
});

//medium click event
mediumBtn.addEventListener("click", function() {
    mediumBtn.classList.add("selected");
    expertBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 12; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i]
        }
        else{
            squares[i].style.background = "none";
        }          
    }
});

//hard click event
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    expertBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");

    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 12; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i]
        }
        else{
            squares[i].style.background = "none";
        }    
    }
});

//expert click event
expertBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    expertBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    easyBtn.classList.remove("selected");
    numSquares = 12;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 12; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i]
        }
        else{
            squares[i].style.background = "none";
        }    
    }
});

//reset button click event
resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

//looping through squares
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    // add initial colors to squares

    //add listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}
//FUNCTION DECLARATION
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < numSquares; i++) {
    //change each color to match given color
    squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    //repeat NUM times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red for 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);

    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}