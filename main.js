const click = document.querySelectorAll(".clicked");

function display(choice, computerChoice, Wins, Loses, Ties, result) {
    alert(`You chose ${choice} and computer chose ${computerChoice}. You ${result}\n
Wins: ${Wins},Loses: ${Loses},Ties:${Ties}`);
}

let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0,
    Ties: 0
};
function reset() {
    score.Wins = 0;
    score.Loses = 0;
    score.Ties = 0;
    alert("Score Reset Successful!")
}
function clicked(event) {
    let computerChoice = '';
    let number = Math.random();


    if (number < 1 / 3) {
        computerChoice = 'Rock';
    } else if (number < 2 / 3) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    let choice = event.target.innerText;
    if (choice == computerChoice) {
        score.Ties++;
        display(choice, computerChoice, score.Wins, score.Loses, score.Ties, 'Tie');
    } else if (choice == 'Reset') {
        reset();
    } else if ((choice == 'Paper' && computerChoice == 'Rock') || (choice == 'Rock' && computerChoice == 'Scissors') || (choice == 'Scissors' && computerChoice == 'Paper')) {
        score.Wins++;
        display(choice, computerChoice, score.Wins, score.Loses, score.Ties, 'Won');
    } else {
        score.Loses++;
        display(choice, computerChoice, score.Wins, score.Loses, score.Ties, 'Lose');
    }

    localStorage.setItem('score', JSON.stringify(score));

}

click.forEach(button => {
    button.onclick = clicked;
});