/** 
 * Prompt for user choice for weapon
 * SET variable to userChoice
 * Random computers weapon
 * Set variable to computerChoice
 * Determing winner by if-statements     
 * Show win/lose/draw message                            
 */


const userChoice = prompt("Choose weapon: rock, paper or scissors");
    console.log(userChoice);

const randomNumber = Math.floor(Math.random() * 3); // Ett tall mellan 0 - 10
    console.log (randomNumber);

let computerChoice;

if (randomNumber == 0) {
    computerChoice = "rock";
} else if (randomNumber == 1) {
    computerChoice = "paper";
} else if (randomNumber == 2) {
    computerChoice = "scissors";
}

//Kan också skriva:
//if (userChoice == "sten" && computerChoice == "sten")
//  console.log("Draw")

console.log("User choice: ", userChoice);
console.log("Computer choice: ", computerChoice);

if (userChoice == "rock") {
    if (computerChoice == "rock") {
        console.log("Draw");
    } else if (computerChoice == "paper") {
        console.log("You lose...");
    } else if (computerChoice == "scissors") {
        console.log("You win!");
    }
} 

if (userChoice == "paper") {
    if (computerChoice == "rock") {
        console.log("You win!");
    } else if (computerChoice == "paper") {
        console.log("Draw");
    } else if (computerChoice == "scissors") {
        console.log("You lose...");
    }
}

if (userChoice == "scissors") {
    if (computerChoice == "rock") {
        console.log("You lose...");
    } else if (computerChoice == "paper") {
        console.log("You win!");
    } else if (computerChoice == "scissors") {
        console.log ("Draw");
    }
}      

// const weaponRock = A;
// const weaponPaper = B;
// const weaponScissor = C;

// A > C
// A < B
// B > C
// B = B
// C = C
// A = A