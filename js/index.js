/** 
 * Prompt for user choice for weapon
 * SET variable to userChoice
 * Random computers weapon
 * Set variable to computerChoice
 * Determing winner by if-statements     
 * Show win/lose/draw message                            
 */


const userChoice = prompt("Choose weapon: rock, paper or scissors");     //Skapar prompt för att kunna välja sten sax eller påse, och att variabeln userChoice ska kopplas till svaret som sen kan anroppas på.

function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * 3);     // Ett tall mellan 0 - 2. Floor avrundar ner därför 3 inte kan väljas.
    const computerWeapons = ["rock", "paper", "scissors"];      //Array lista på sten sax eller påse som kan anroppas med computerWeapons.

    const selectComputerWeapon = computerWeapons [randomNumber];     //Säger att selectComputerWeapon är lika med computerWeapons som är ett random number.

    return selectComputerWeapon;     //Säger att datorn ska returnera värdet av selectComputerWeapon
}

//   if (randomNumber == 0) {
//       return "rock";
//   } else if (randomNumber == 1) {
//        return "paper";
//  } else if (randomNumber == 2) {
//       return "scissors";
//    }


//Kan också skriva:
//if (userChoice == "sten" && computerChoice == "sten")
//  console.log("Draw")

let computerChoice = selectComputerWeapon();        //Säger att computerChoice ska vara lika med selectComputerWeapon. Detta behövs för functionen nedan ska funka, eftersom vi anropar selectComputerWeapon längst ned.



                                                                               

function determineWinner() {                      //Funktion för att välja om den ska printa "You win", "You lose" elle "draw" beroende på userChoice och computerChoice
    if (userChoice == "rock") {
    if (computerChoice == "rock") {
        console.log("Draw");
    } else if (computerChoice == "paper") {
        console.log("You lose...");
    } else if (computerChoice == "scissors") {
        console.log("You win!");
    }
}
    } if (userChoice == "paper") {
    if (computerChoice == "rock") {
        console.log("You win!");
    } else if (computerChoice == "paper") {
        console.log("Draw");
    } else if (computerChoice == "scissors") {
        console.log("You lose...");
}
    } if (userChoice == "scissors") {
    if (computerChoice == "rock") {
        console.log("You lose...");
    } else if (computerChoice == "paper") {
        console.log("You win!");
    } else if (computerChoice == "scissors") {
        console.log ("Draw");
    }
}

selectComputerWeapon();               //Anropar datorn att kalla på selectComputerWeapon för att se datorns val av sten sax påse.

determineWinner();                      //Anropar functionen determineWinner för att jämföra userChoice och computerChoice för att välja en vinnare.

console.log("User choice: ", userChoice);
console.log("Computer choice: ", computerChoice);              //Gör en text log för att visa vad datorn och spelaren valde.

// const weaponRock = A;
// const weaponPaper = B;
// const weaponScissor = C;

// A > C
// A < B
// B > C
// B = B
// C = C
// A = A