function game() {
    com = 0;
    pla = 0;

    function getComputerChoice() {
        number = 3

        function random(number) {
            return Math.floor(Math.random() * number);
        }
        choice = random(number);
        switch (choice) {
            case 0:
                return "paper"
                break;

            case 1:
                return "scissor"
                break;

            // include as many cases as you like

            default:
                return "rock"
                break;
        }
    }

    for (let i = 0; i < 5; i++) {

        computerSelection = getComputerChoice();
        let choiceplayer = prompt('Enter rock, paper or scissor', '');
        playerSelection = choiceplayer.toLowerCase();

        function playRound(playerSelection, computerSelection) {

            if (playerSelection === computerSelection) {

                return "Draw " + playerSelection + " equals " + computerSelection
            }
            else {
                if (playerSelection === "rock" && computerSelection === "scissor") {
                    pla++;
                    return "You win! " + playerSelection + " beats " + computerSelection;
                } else if (playerSelection === "scissor" && computerSelection === "paper") {
                    pla++;
                    return "You win! " + playerSelection + " beats " + computerSelection;
                } else if (playerSelection === "paper" && computerSelection === "rock") {
                    pla++;
                    return "You win! " + playerSelection + " beats " + computerSelection;
                } else {
                    com++;
                    return "You lose! " + computerSelection + " beats " + playerSelection;
                }
            }
        }
        console.log(playRound(playerSelection, computerSelection))
    }
    if (com > pla) {
        console.log("The winner is com by a score of " + com);

    }
    else if (pla > com) {
        console.log("You win by a score of " + pla);

    }
    else {
        console.log("It's a draw");
    }
}