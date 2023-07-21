let score = JSON.parse(localStorage.getItem('score')) || {
wins: 0,
losses: 0,
ties: 0
};

update();

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(() => {
        const playerMove = pickCompMove();
        playGame(playerMove);
        }, 1000);
    isAutoPlaying = true;    
    } else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}


function playGame(playerMove) {
const comp = pickCompMove();

let result = "";
if (playerMove === "scissors") {
  if (comp === "rock") {
    result = "You lose";
  } else if (comp === "paper") {
    result = "You win";
  } else {
    result = "Tie";
  }

} else if (playerMove === "paper") {
  if (comp === "rock") {
    result = "You win";
  } else if (comp === "paper") {
    result = "Tie";
  } else {
    result = "You lose";
  }
  
} else if (playerMove === "rock") {
  if (comp === "rock") {
    result = "Tie";
  } else if (comp === "paper") {
    result = "You lose";
  } else {
    result = "You win";
  }
}

if(result === "You win"){
  score.wins++;
}
else if(result === "You lose"){
  score.losses++;
}
else{
  score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

update();

document.querySelector('.js-result').innerHTML = `${result}`;

document.querySelector('.js-moves').innerHTML = ` You
  <img src="images/${playerMove}-emoji.png" class="move-icon" >
  <img src="images/${comp}-emoji.png" class="move-icon">
Computer`;
}

function update()
{
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickCompMove() {
const nums = Math.random();
let comp = "";

if (nums >= 0 && nums < 1 / 3) {
  comp = "rock";
} else if (nums >= 1 / 3 && nums < 2 / 3) {
  comp = "paper";
} else {
  comp = "scissors";
}

return comp;
}
