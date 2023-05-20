const squares = document.querySelectorAll(".square");
const mole = document.getElementsByClassName(".mole");
const score = document.getElementById("score");
const time = document.querySelector("#time");

let randomId;
let result = 0;
let overTime =60;
let timeId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  randomId = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == randomId) {
      result++;
      score.textContent = result;
      randomId = null;
    }
  });
});

function moveMole() {
  timeId = setInterval(randomSquare, 1000);
}

moveMole();
function countDown() {

  overTime--;
  time.textContent = overTime;
  if (overTime == 0) {
    clearInterval(coundownTimerId)
    clearInterval(timeId);
    alert(`GAME OVER , SCORE : ${result}`);
  }
}
let coundownTimerId=setInterval(countDown, 1000);
