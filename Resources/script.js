let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
   creatBoard(16);
   document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagName != "BUTTON"){
        click = !click;
        let draw = document.querySelector("#draw");
        if (click){
            draw.innerHTML = "Now You can Draw";
        }
        else{
            draw.innerHTML = "You're Not allowed To Draw" 
        }
    }
   })
   let btn_popup = document.querySelector("#popup");
   btn_popup.addEventListener("click", function(){
    let size = getsize();
    creatBoard(size);
   })
})

function creatBoard(size){
    let container = document.querySelector(".container");

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorsquare);
    container.insertAdjacentElement("beforeend", square);
}

}
function getSize() {
    let input = prompt("What will be the size of the container?");
    let message = document.querySelector(".message");
    if (input === null) {
        message.innerHTML = "No size provided. Please provide a number between 1 and 100.";
    } else if (input === "") {
        message.innerHTML = "Please provide a number.";
    } else if (input < 1 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100.";
    } else {
        message.innerHTML = "Now you can play.";
        return input;
    }
}


function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
         } else {
            this.style.backgroundColor = 'black';
        }
    }
}


function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white");
}
