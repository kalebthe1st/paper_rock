const start = document.getElementById("start");

start.addEventListener("click", game());
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        return "Draw " + playerSelection + " equals " + computerSelection
    }
    else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            // heading.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            pla++;
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
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
            return "scissors"
            break;

        // include as many cases as you like

        default:
            return "rock"
            break;
    }
}
function score() {
    if (com > pla) {
        return ("The winner is computer by a score of " + com + " - " + pla);

    }
    else {
        return ("You win by a score of " + pla + " - " + com);

    }
}

function game() {
    com = 0;
    pla = 0;

    const player = document.querySelector('#player');
    player.textContent = pla;
    const computer = document.querySelector('#com');
    computer.textContent = com;
    const playerIcon = document.querySelector('.player-icon');
    const comIcon = document.querySelector('.com-icon');
    const heading = document.querySelector('h3');



    const btn = document.querySelectorAll('button');

    let choiceplayer = "";

    // we use the .forEach method to iterate through each button
    btn.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            if (button.id !== "start") {

                choiceplayer = (button.id);

                playerSelection = choiceplayer.toLowerCase();
                computerSelection = getComputerChoice();




                playerIcon.innerHTML = `<i class="fa fa-hand-${playerSelection}-o" aria-hidden="true"></i>`;

                comIcon.innerHTML = `<i class="fa fa-hand-${computerSelection}-o" aria-hidden="true"></i>`;

                const scoreInfo = playRound(playerSelection, computerSelection);
                if (com === 5 || pla === 5) {
                    heading.textContent = score();
                    com = 0;
                    pla = 0;
                }
                else {
                    heading.textContent = scoreInfo;
                }
                player.textContent = pla;
                computer.textContent = com;
            }
            else if (button.id === 'start') {
                com = 0;
                pla = 0;
                player.textContent = pla;
                computer.textContent = com;

            }
        });


    });


}


// }