const gameBoard = document.querySelector(".game_board");
const messageTurn = document.querySelector(".game_turn");
const endGame = document.querySelector(".endgame");
const endGameResult = document.querySelector(".endgame_result");
const buttonReset = document.querySelector(".endgame_button");

let isTurnX = true;
let turn = 0;
let maxTurn = 9;
let players = {
  x: "cross",
  o: "circle",
};

const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2], // Un arreglo dentro de otro arreglo para las posiciones ganadoras
];

messageTurn.textContent = isTurnX ? "X" : "O"; // Si es turno de x entonces muestre la x si no tendra que mostrar el O
createBoard();

startGame();

function startGame() {
  createBoard();
  messageTurn.textContent = isTurnX ? "X" : "O";
  isTurnX = true;
  turn = 0;

  endGame.classList.remove("show");
}

function createBoard() {
  const cell = 9;

  while (gameBoard.firstElementChild) {
    gameBoard.firstElementChild.remove();
  }

  for (let i = 0; i < cell; i++) {
    const div = document.createElement("div");
    // div.textContent = i; // Solo era para ver los numeros que tiene cada celda
    div.classList.add("cell");
    div.addEventListener(
      "click",
      handleGame,
      { once: true } //Esto es para que le podamos dar click una vez y salga la alerta y cuando quieran volver a hacer click en la misma celda no salga la alerta y asi funcionara con cada una de las celdas
    );

    gameBoard.append(div);
  }
}

function handleGame(e) {
  const currentCell = e.currentTarget;
  const currentTurn = isTurnX ? players.x : players.o; // Si turnX es positivo se pintara de este color, si es falso se pintara un circulo

  drawShape(currentCell, currentTurn);
  turn++; //Esta variable se va incrementando con cada turno que pase

  //   checkWinner(currentTurn);

  if (checkWinner(currentTurn)) {
    return;
  }

  if (turn === maxTurn) {
    showEndGame(false);
  }

  changeTurn();
  //   currentCell.style.backgroundColor = "blue"; // Con esto deberia de pintase el fondo de color azul cuando ya le hayamos hecho un click a la casilla
  //   console.log(currentCell); // Lo que hara es cuando le demos click a la celda en consola saldra lo de click
}

function drawShape(element, newClass) {
  element.classList.add(newClass);
}

function changeTurn() {
  isTurnX = !isTurnX; //Si yo niego a true se hara false y viceversa
  messageTurn.textContent = isTurnX ? "X" : "O";
}

function checkWinner(currentPlayer) {
  const cells = document.querySelectorAll(".cell");

  const winner = winningPosition.some((array) => {
    return array.every((position) => {
      return cells[position].classList.contains(currentPlayer);
    });
  });

  //   console.log(cells);

  //   console.log(winner); //Si completa uno de los array que hice con las posiciones dara un true, esto debido a que si cumplio, en caso de que no cumpla dara un false

  if (!winner) {
    // Si winner es false no quiero que nada se ejecute
    return;
  }

  showEndGame(true); // Si en un punto yo gano ya no se cambia el turno del jugador
  return true;
}

function showEndGame(winner) {
  endGame.classList.add("show");

  if (winner) {
    endGameResult.textContent = `¡El jugador ${
      isTurnX ? "X" : "O"
    } ha ganado el juego!`;
  } else {
    endGameResult.textContent = `¡El juego se ha empatado!`;
  }
}

buttonReset.addEventListener("click", startGame);
