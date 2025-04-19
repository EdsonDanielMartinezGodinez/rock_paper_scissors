function getcomputerchoice() {
    let choice = Math.random() * 100;
    if (choice <= 33.3) {
        choiceC = "Rock";
    }
    else if (choice > 33.3 && choice <= 66) {
        choiceC = "Paper";
    }
    else if (choice > 66 && choice <= 99) {
        choiceC = "Scissors";
    }
    console.log(choiceC);
    return choiceC;
}

function gethumanchoice() {
    let hchoice = prompt(`Enter one of these choice´s: "Rock","Paper","Scissors"`);
    let htrim = hchoice.trim();
    hchoice = htrim;
    let minus = hchoice.slice(1).toLowerCase();
    let maximus = hchoice.at(0).toUpperCase();
    hchoice = maximus + minus;
    if (hchoice == "Rock" || hchoice == "Paper" || hchoice == "Scissors") {
        console.log(hchoice);
        return hchoice;
    } else {
        alert("Invalid  character");
    }  
}

let humanscore = 0;
let computerscore = 0;

function playRound(humanchoice, computerchoice) {
    if (humanchoice == "Scissors" && computerchoice == "Rock" || humanchoice == "Paper" && computerchoice == "Scissors" || humanchoice == "Rock" && computerchoice == "Paper") {
        console.log("Computer wins");
        computerscore += 1;
        return computerscore;
    } else if (humanchoice == "Rock" && computerchoice == "Scissors" || humanchoice == "Scissors" && computerchoice == "Paper" || humanchoice == "Paper" && computerchoice == "Rock") {
        console.log("Player Wins");
        humanscore += 1;
        return humanscore;
    } else if (humanchoice == "Scissors" && computerchoice == "Scissors" || humanchoice == "Paper" && computerchoice == "Paper" || humanchoice == "Rock" && computerchoice == "Rock") {
        return console.log("Draw");
    }

}


function playGame() {
    let rondas = 0
    let humanSelection = gethumanchoice();
    let computerSelection = getcomputerchoice();
    playRound(humanSelection, computerSelection)
    rondas += 1;
    humanSelection = gethumanchoice();
    computerSelection = getcomputerchoice();
    playRound(humanSelection, computerSelection)
    rondas += 1
    humanSelection = gethumanchoice();
    computerSelection = getcomputerchoice();
    playRound(humanSelection, computerSelection);
    rondas += 1;
    humanSelection = gethumanchoice();
    computerSelection = getcomputerchoice();
    playRound(humanSelection, computerSelection);
    rondas += 1;
    humanSelection = gethumanchoice();
    computerSelection = getcomputerchoice();
    playRound(humanSelection, computerSelection);
    rondas += 1;
    if (rondas == 5) {
        return humanscore > computerscore ? console.log("The human wins the round") : console.log("The Computer wins the round");
    }else if(humanscore == computerscore ){
        return console.log("Draw between human and computer");
    }
}

console.log(playGame())