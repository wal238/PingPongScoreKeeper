const playerOneBtn = document.querySelector('#p1Button');
const playerOneScoreDisplay = document.querySelector('#p1Score');
const playerTwoScoreDisplay = document.querySelector('#p2Score');
const playerTwoBtn = document.querySelector('#p2Button');
const maxScore = document.querySelector('#playto');
const reset = document.querySelector('#resetButton');


let max = 4;
let playerOneScore = 0;
let playerTwoScore = 0;
let gameState = true;

//gets the max score
maxScore.addEventListener('change', function(){
    max = parseInt(this.value);
});
//updates PlayerOne's Score
playerOneBtn.addEventListener('click', function() {
    if (gameState) {
        playerOneScore++;
        playerOneScoreDisplay.innerHTML = playerOneScore;
    }
    if(checkWinner(playerOneScore)) {
        playerOneScoreDisplay.style.color="rgb(11, 218, 81)";
        playerTwoScoreDisplay.style.color="red";
        playerOneBtn.disabled=true;
        playerTwoBtn.disabled=true;
        gameState = false;
    }
});
//updates PlayerTwo's score;
playerTwoBtn.addEventListener('click', function() {
    if (gameState) {
    playerTwoScore++;
    playerTwoScoreDisplay.innerHTML = playerTwoScore;
    } 
    if (checkWinner(playerTwoScore)) {
        playerTwoScoreDisplay.style.color="rgb(11,218,81)";
        playerOneScoreDisplay.style.color="red";
        playerOneBtn.disabled=true;
        playerTwoBtn.disabled=true;
        gameState = false;
    }
});
//resets everything
reset.addEventListener('click', function() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreDisplay.innerHTML = playerOneScore;
    playerTwoScoreDisplay.innerHTML = playerTwoScore;
    playerOneScoreDisplay.style.color="black";
    playerTwoScoreDisplay.style.color="black";
    playerOneBtn.disabled=false;
    playerTwoBtn.disabled=false;
    maxScore.value = 4;
    max = 4;
    gameState = true;

});
//Checks the winner
const checkWinner = function(num) {
    if (num === max) {
        return true;
    } else {
        return false;
    }
};
