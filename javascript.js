const start = document.getElementById("start");

start.addEventListener("click", game());
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
function score() {
    if (com > pla) {
        console.log("The winner is computer by a score of " + com + " - " + pla);

    }
    else {
        console.log("You win by a score of " + pla + " - " + com);

    }
}

function game() {
    com = 0;
    pla = 0;

    const heading = document.querySelector('#player');
    heading.textContent = `${pla} - ${com}`;



    const btn = document.querySelectorAll('button');

    let choiceplayer = "";

    // we use the .forEach method to iterate through each button
    btn.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            if (button.id !== "start") {

                choiceplayer = (button.id);
                alert(choiceplayer);
                playerSelection = choiceplayer.toLowerCase();
                computerSelection = getComputerChoice();


                console.log(playRound(playerSelection, computerSelection))
                heading.textContent = `${pla} - ${com}`;


                if (com === 5 || pla === 5) {
                    score();
                    com = 0;
                    pla = 0;
                }

            }
            else if (button.id === 'start') {
                com = 0;
                pla = 0;
            }
        });


    });


}


// }