

function playerClick(button) {
    playerChoice = button.value
    //alert(playerChoice)
    gamePlay();
}

//compares player vs computer to get winner
const playRound = function (playerSelection, computerSelection) {
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return ('player');
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return ('computer');
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return ('player');
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return ('computer');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return ('player');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return ('computer');
    }
    else if (playerSelection == computerSelection) {
        return ("tied");
    }
}

/* computer random selection */
function computerSelection() {
    let play = (Math.floor((Math.random() * 3) + 1));
    if (play == 1) {
        //console.log("rock by computer")
        return ('rock');
    }
    else if (play == 2) {
        //console.log("paper by computer")
        return ("paper");
    }
    else if (play == 3) {
        //console.log("scissors by computer")
        return ('scissors')
    }
};


let cscore = 0;
let pscore = 0;
let tied = 0;
let gameWinner = 0;
let counter = 0;
let playerChoice;



//play one round of game
function gamePlay() {

    let computerChoice = computerSelection();
    let winner = playRound(playerChoice, computerChoice); //decide winner and assign to winner
    document.getElementById('player').innerHTML = playerChoice;//post players choice
    document.getElementById('computer').innerHTML = computerChoice;
    score(winner);  //update score talley

}

//update score talley and display gamewinner at 5 wins 
function score(winner) {

    if (winner == 'player') {
        pscore = pscore + 1;
        document.getElementById('pscore').innerHTML = pscore;
        console.log(pscore + '...........s')

        if (pscore == 5) {
            gameWinner = `Player WON!!! 
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;  
            Your Score: ${pscore}    
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
            Computer Score: ${cscore}   
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
            Tied: ${tied} `
            document.getElementById('gameWinner').innerHTML = gameWinner;
            pscore = 0, cscore = 0, tied = 0
            document.getElementById('cscore').innerHTML = cscore;
            document.getElementById('pscore').innerHTML = pscore;
            document.getElementById('tied').innerHTML = tied;

        }
        return pscore;

    }
    else if (winner == 'computer') {
        cscore = cscore + 1;
        document.getElementById('cscore').innerHTML = cscore;

        if (cscore == 5) {
            gameWinner = `Sorry You Loose. Computer Wins!! 
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
            Your Score: ${pscore}  
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp; 
            Computer Score: ${cscore}  
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
            Tied: ${tied} `
            document.getElementById('gameWinner').innerHTML = gameWinner;
            cscore = 0, pscore = 0, tied = 0
            document.getElementById('cscore').innerHTML = cscore;
            document.getElementById('pscore').innerHTML = pscore;
            document.getElementById('tied').innerHTML = tied;
            //document.getElementById('gameWinner').innerHTML = gameWinner;

        }
        return cscore;
    }
    else if (winner == 'tied') {
        tied = tied + 1;
        document.getElementById('tied').innerHTML = tied;
        if (tied == 5) {
            gameWinner = `We have a DRAW!!!
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
            Tied: ${tied}    
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
            Your Score: ${pscore}    
            \&nbsp;&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
            Computer Score: ${cscore} `
            document.getElementById('gameWinner').innerHTML = gameWinner;
            cscore = 0, pscore = 0, tied = 0
            document.getElementById('cscore').innerHTML = cscore;
            document.getElementById('pscore').innerHTML = pscore;
            document.getElementById('tied').innerHTML = tied;
            //document.getElementById('gameWinner').innerHTML = gameWinner;

        }
        return tied;
    }

}

