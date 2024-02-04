let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

let userChoicepara = document.querySelector("#user-score");
let compChoicepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const drawGame = () =>{
    // console.log("Game is Drow");
    msg.innerText = "Game Was Draw. Play again !";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin , userChoice , compChoice) =>{

    if(userWin === true){
        // console.log("you Win !");
        userScore++;
        userChoicepara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        // console.log("Comp win !");
        compScore++;
        compChoicepara.innerText = compScore;
        msg.innerText = `Comp Win ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
} 

const playGame = (userChoice) =>{

    // console.log("user choice = ", userChoice);

    //comp genrated choice

    const compChoice = genCompChoice();

    // console.log("comp choice = ",compChoice);

    //Draw Game 
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            //paper and Scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock and scissors
            userWin = compChoice === "scissors" ?false : true; 
        }else{
            // user = scissors
            // comp = rock and paper

            userWin = compChoice === "rock" ? false : true;

        }

        showWinner(userWin , userChoice, compChoice);

    }
};

choices.forEach((choice) => {

    // console.log(choices);
    
    choice.addEventListener("click", () => {
     
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    })
});