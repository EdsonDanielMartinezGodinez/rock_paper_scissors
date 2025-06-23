let rondas = 0;
let humanscore = 0;
let computerscore = 0;
let draws = 0;
const roca = document.getElementById("rockb");
const papel = document.getElementById("paper");
const tijera = document.getElementById("tijerab");
const user = document.querySelector(".player");
const btns = document.querySelector(".botones");
const bot = document.querySelector(".bot");
const marks = document.querySelector(".round");
const played = document.getElementById("partida");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const tie = document.getElementById("tie");

const wins = document.createElement("p")
const textBot = document.createElement("p");
const textHuman = document.createElement("p");
const retryButton = document.createElement("button");

retryButton.textContent = "Retry?";
retryButton.style.color = "white";

btns.addEventListener("click" , (e) => {
    if (rondas >= 5) return;
    let targets = e.target;
    let choiceBoton = "";
    let humanSelection;
    let computerSelection;
    switch(targets.id){
        case "rockb":
            choiceBoton = "Rock";
            computerSelection = getcomputerchoice();
            humanSelection = gethumanchoice(choiceBoton);
            playRound(humanSelection,computerSelection);
            break;
        case "tijerab":
            choiceBoton = "Scissors";
            computerSelection = getcomputerchoice()
            humanSelection = gethumanchoice(choiceBoton);
            playRound(humanSelection,computerSelection);
            break;
        case "paperb":
            choiceBoton = "Paper";
            computerSelection = getcomputerchoice()
            humanSelection = gethumanchoice(choiceBoton);
            playRound(humanSelection,computerSelection);
            break;
    }
    played.textContent = "";
    played.textContent +=`Round ${rondas}`
    player.textContent = "";
    player.textContent +=`Human ${humanscore}`
    computer.textContent = "";
    computer.textContent +=`Computer ${computerscore}`
    tie.textContent = "";
    tie.textContent +=`Tie ${draws}`;
    if(rondas == 5){
    user.appendChild(retryButton);
    if(humanscore > computerscore){
        wins.textContent = "The humanity wins the game";
        wins.style.color = "green";
        wins.style.border= "2px solid green";
        wins.style.padding = "10px";
    }else if(humanscore < computerscore){
        wins.textContent = "The bots wins the game";
        wins.style.color = "red";
        wins.style.border= "2px solid red";
        wins.style.padding = "10px";
    }else{
        wins.textContent = "Draw between human and computer";
        wins.style.color = "black";
        wins.style.border= "2px solid black";
        wins.style.padding = "10px";
    }
    }
    }
);
retryButton.addEventListener("click",() =>{
    location.reload();
});

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
    textBot.textContent = `Bot chooses ${choiceC}`;
    bot.appendChild(textBot);  
    return choiceC;
}


function gethumanchoice(humanoption) {
    let hchoice = humanoption;
    if (hchoice == "Rock" || hchoice == "Paper" || hchoice == "Scissors") {
        textHuman.textContent = `You chooses ${hchoice}`;
        user.appendChild(textHuman);
        return hchoice;
    }
}

function playRound(humanchoice, computerchoice) {
    if (humanchoice == "Scissors" && computerchoice == "Rock" || humanchoice == "Paper" && computerchoice == "Scissors" || humanchoice == "Rock" && computerchoice == "Paper") {
        rondas += 1;
        computerscore += 1;
        wins.textContent = "Bot Wins";
        wins.style.color = "red";
        wins.style.border= "2px solid red";
        wins.style.padding = "10px"; 
        marks.appendChild(wins);
        return computerscore;
    } else if (humanchoice == "Rock" && computerchoice == "Scissors" || humanchoice == "Scissors" && computerchoice == "Paper" || humanchoice == "Paper" && computerchoice == "Rock") {
        rondas += 1;
        humanscore += 1;
        wins.textContent = "Human Wins";
        wins.style.color = "green";
        wins.style.border= "2px solid green";
        wins.style.padding = "10px";
        marks.appendChild(wins);
        return humanscore;
    } else if (humanchoice == "Scissors" && computerchoice == "Scissors" || humanchoice == "Paper" && computerchoice == "Paper" || humanchoice == "Rock" && computerchoice == "Rock") {
        rondas += 1;
        draws += 1;
        marks.appendChild(wins);
        wins.textContent = "Draw";
        wins.style.color = "black";
        wins.style.border= "2px solid black";
        wins.style.padding = "10px";
    }
}



/*function playGame() {
    let rondas = 0
    do{
        let humanSelection = gethumanchoice();
        let computerSelection = getcomputerchoice();
        playRound(humanSelection, computerSelection)
        rondas += 1; 
    }while(rondas < 5);
    if (rondas == 5) {
        return humanscore > computerscore ? console.log("The human wins the round") : console.log("The Computer wins the round");
    }else if(humanscore == computerscore ){
        return console.log("Draw between human and computer");
    }
}

console.log(playGame())*/