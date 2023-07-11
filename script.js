function openRule() {
    document.querySelector("#game-rule").style.display = "block"
}

function closeRule() {
    document.querySelector("#game-rule").style.display = "none";
}


//local storage
let yourScore = localStorage.getItem("yourScoreSaved") || 0;
document.querySelector(".your-score").innerText = yourScore;
let computerScore = localStorage.getItem("computerScoreSaved") || 0;
document.querySelector(".computer-score").innerText = computerScore;

// storing the input in an array by user and computer
let input = [];
function inputTool(score) {
    if (score === 5) {
        input.push("rock");
    }
    else if (score === 10) {
        input.push("paper");
    }
    else {
        input.push("scissor");
    }
}



//genrating random computer score
let compScore = [5, 10, 15];
function random() { return Math.floor(Math.random() * 3); }

function rockScore() {
    let yourscore = document.querySelector(".your-score").innerText = 5;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    inputTool(yourscore);
    inputTool(computerscore);
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
    winningDesgin();
}
function scissorScore() {
    let yourscore = document.querySelector(".your-score").innerText = 15;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    inputTool(yourscore);
    inputTool(computerscore);
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
    winningDesgin();

}
function paperScore() {
    let yourscore = document.querySelector(".your-score").innerText = 10;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    inputTool(yourscore);
    inputTool(computerscore);
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
    winningDesgin();
}

function winningDesgin() {
    let windesign = document.querySelector(".winning-template");
    windesign.style.width = "40%";
    windesign.style.flexDirection = "row";



    windesign.innerHTML = `<div class="choosen-option-logo">
    <span class="choosen-option-text">YOU PICKED</span>
    <div class="${input[0]}">
        <img src="./assets/${input[0]}.png" alt="userpicked" class="game-tool-logo">
    </div>
</div>
<div class="winlose">
    <p class="changing-text">${winningDecide()}</p><br>
    <p class="constant-winning-text">AGAINST PC</p> <button class="play-again" onclick="playAgain()">PLAY
        AGAIN</button>
</div>
<div class="choosen-option-logo">
    <span class="choosen-option-text">PC PICKED</span>
    <div class="${input[1]}">
        <img src="./assets/${input[1]}.png" alt="computerpicked" class="game-tool-logo">
    </div>
</div>`
}

let winningDecide = function () {
    if (input[0] < input[1]) {
        document.querySelector(".next-button").style.display = "block";
        return "YOU WIN";
    }
    else if (input[0] > input[1]) {
        return "YOU LOST"
    }
    else {
        return "TIE UP";
    }
}

// let winningDecide2 = function () {
//     if (input[0] < input[1]) {
//         return "AGAINST PC";
//     }
//     else if (input[0] > input[1]) {
//         return "AGAINST PC"
//     }
//     else {
//         return " ";
//     }
// }

//game reset
function playAgain() {
    localStorage.setItem("yourScoreSaved", 0);
    localStorage.setItem("computerScoreSaved", 0);
    window.location.href = "./index.html";
}

