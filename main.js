const click = document.querySelectorAll(".clicked");



function display(choice, computerChoice, Wins, Loses, Ties, result) {
    document.querySelector('.score')
        .innerHTML=`Wins: ${Wins},Loses: ${Loses},Ties:${Ties}
        <br>Your Choice: ${choice}<br> Computer Choice: ${computerChoice}<br>
        It's a ${result}`;
}

let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0,
    Ties: 0
};

function colorChange(result){
    document.body.style.backgroundColor=result;
}

function reset() {
    score.Wins = 0;
    score.Loses = 0;
    score.Ties = 0;
    document.querySelector('.score')
        .innerHTML="Wins: 0,Loses: 0,Ties:0";
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
        colorChange('grey');
        display(choice, computerChoice, score.Wins, score.Loses, score.Ties, 'Tie');
    } else if (choice == 'Reset') {
        reset();
        colorChange('#f4f4f4');
    } else if ((choice == 'Paper' && computerChoice == 'Rock') || (choice == 'Rock' && computerChoice == 'Scissors') || (choice == 'Scissors' && computerChoice == 'Paper')) {
        score.Wins++;
        colorChange('green');
        display(choice, computerChoice, score.Wins, score.Loses, score.Ties, 'Win');
    } else {
        score.Loses++;
        colorChange('red');
        display(choice, computerChoice, score.Wins, score.Loses, score.Ties, 'Lose');
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    

}

click.forEach(button => {
    button.onclick = clicked;
});
