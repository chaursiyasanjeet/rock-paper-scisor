function openRule() {
    document.querySelector("#game-rule").style.display = "block"
}

function closeRule() {
    document.querySelector("#game-rule").style.display = "none";
}

//after winning 
function playAgain() {
    localStorage.clear();
    window.location.href = "./index.html";
}

//local storage
let yourScore = localStorage.getItem("yourScoreSaved") || 0;
document.querySelector(".your-score").innerText = yourScore;
let computerScore = localStorage.getItem("computerScoreSaved") || 0;
document.querySelector(".computer-score").innerText = computerScore;

//genrating random computer score
let compScore = [5, 10, 15];
function random() { return Math.floor(Math.random() * 3); }

function rockScore() {
    let yourscore = document.querySelector(".your-score").innerText = 5;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
}
function scissorScore() {
    let yourscore = document.querySelector(".your-score").innerText = 15;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
}
function paperScore() {
    let yourscore = document.querySelector(".your-score").innerText = 10;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
}

