let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock paper scissore


};
const drawGame = () => {
    // console.log("game is draw.");
    msg.innerText = "Game was Draw. Play again.";
    //   msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, ComputerChoice) => {
    if (userWin) {
        // 
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `you win! Your ${userChoice} beats ${ComputerChoice}`
            // msg.style.backgroundColor = "red";
    } else {
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText = `You lost. ${ComChoice} beats your ${userChoice}`;
        //  msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    console.log("user choice =", userChoice);


    const ComputerChoice = genComputerChoice();
    console.log("comp choice =", ComputerChoice);

    if (userChoice === ComputerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = ComputerChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            userWin = ComputerChoice === "scissors" ? false : true;
        } else {
            ComputerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id")
            //console.log("choice was clicked", userChoiceId);
        playGame(userChoiceId);

    });
});