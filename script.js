'use strict';

/*console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 5;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    console.log(guess);

    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '❌ No Number';
        displayMessage('❌ No Number');

        //when player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#4DE95C';
        document.querySelector('.number').style.padding = '0 50px 0 50px';
        document.querySelector('.result').style.color = '#ffff';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    //when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 2) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low!');
            score = score - 2;
            // document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            document.querySelector('.message').textContent = '😭 You Lost the game';
            // document.querySelector('.score').textContent = 0;
            displayScore('0');
        }
    }
    // //when guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 2) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score = score - 2;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😭 You Lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', function () {

    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...🤔';
    displayMessage('Start guessing...🤔');

    // document.querySelector('.score').textContent = score;
    displayScore(score);
    document.querySelector('.number').innerHTML = '&#65110';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.padding = '0 20px 0 20px';
    document.querySelector('body').style.backgroundColor = '#17202A';
    document.querySelector('.result').style.color = '#16E316';

});
