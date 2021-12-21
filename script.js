


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
//console.log(playRound(playerSelection(), computerSelection()));

/*
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
// console.log(computerSelection())
/* Player input/selection*/

function playerSelection() {
    let playerInput = window.prompt("Select Rock, Paper, Scissors. ");
    return (playerInput.toLowerCase());
}
//console.log(playerSelection())

let cscore = 0;
let pscore = 0;
let tied = 0;
let gameWinner = 0;
let counter = 0;

function game() {

    //while loop to play 5 rounds
    function rounds() {
        while (counter < 5) {
            gamePlay();
            counter = counter + 1;
        }
        endWinner(pscore, cscore);
    }
    function endWinner(pscore, cscore) {
        if (pscore == cscore) {
            gameWinner = "Congratulations, you Draw!"
            return gameWinner;
        } else if (pscore < cscore) {
            gameWinner = "Computer Kicked ass, you suck!";
            return gameWinner;
        } else {
            gameWinner = "Congratulations, you WON!"
            return gameWinner;
        }
    }

    rounds();

    //play one round of game
    function gamePlay() {

        let computerChoice = computerSelection();
        let playerChoice = playerSelection();
        let winner = playRound(playerChoice, computerChoice);

        document.getElementById('player').innerHTML = playerChoice;
        document.getElementById('computer').innerHTML = computerChoice;
        document.getElementById('winner').innerHTML = winner;

        //update score
        function score(winner) {
            if (winner == 'player') {
                pscore = pscore + 1;
                //console.log("me updated pscore");
                document.getElementById('pscore').innerHTML = pscore;
                return pscore;
            }
            else if (winner == 'computer') {
                cscore = cscore + 1;
                document.getElementById('cscore').innerHTML = cscore;
                return cscore;
            }
            else if (winner == 'tied') {
                tied = tied + 1;
                document.getElementById('tied').innerHTML = tied;
                return tied;
            }
        }


        score(winner);
    }
    document.getElementById('gameWinner').innerHTML = gameWinner;

}
//gamePlay();
game();









/*check who won and return winner*/
/*
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
        return ("You Tied");
    }
}
/* computer random selection */
/*
function computerSelection() {
    let play = (Math.floor((Math.random() * 3) + 1));
    if (play == 1) {
        console.log("rock by computer")
        return ('rock');
    }
    else if (play == 2) {
        console.log("paper by computer")
        return ("paper");
    }
    else if (play == 3) {
        console.log("scissors by computer")
        return ('scissors')
    }
};

/* Player input/selection*/
/*
function playerSelection() {
    let playerInput = window.prompt("Select Rock, Paper, Scissors. ");

    return (playerInput.toLowerCase());

}
/* To play one round of game gamePlay*//*
function game() {

    while (playerScore < 3 && computerScore < 3) {
        gamePlay();
    } if (playerScore === 2) {
        console.log("Congratulations, you win!");
    } else if (computerScore === 2) {
        console.log("Wow you got beat by a computer, embarrassing");
    }
    function gamePlay() {

        let computerChoice = computerSelection();
        let playerChoice = playerSelection();
        let winner = playRound(playerChoice, computerChoice);

        document.getElementById('player').innerHTML = playerChoice;
        document.getElementById('computer').innerHTML = computerChoice;
        document.getElementById('winner').innerHTML = winner;

        //get 
        let cscore = 0;
        let pscore = 0;
        function score(winner) {
            if (winner == 'player') {
                pscore = pscore + 1;
                return pscore;
            }
            else if (winner == 'computer') {
                cscore = cscore + 1;
                return cscore++;
            }
            else {
                return "tied";
            }
        }
        score(winner);



        document.getElementById('pscore').innerHTML = pscore;
        document.getElementById('cscore').innerHTML = cscore;
        /*return (
        "Computer chose: " + computerChoice + "\n " + "Player chose: " + playerChoice + " " + "Results: " + winner
        );*/
/*}


//gamePlay();
/*   game();
}
*/