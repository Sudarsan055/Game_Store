import React, { useState } from "react";

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [gameMode, setGameMode] = useState("one-player");

  // Function to handle cell click
  const handleClick = (index) => {
    if (gameOver || cells[index] !== "") return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    if (checkWin(newCells)) {
      setGameOver(true);
      setTimeout(() => alert(currentPlayer + " wins!"), 100);
      return;
    }

    if (checkDraw(newCells)) {
      setGameOver(true);
      setTimeout(() => alert("It is a draw!"), 100);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    // if (gameMode === 'one-player' && currentPlayer === 'X') {
    //   makeComputerMove();
    // }
  };

  // Function to check for a win
  const checkWin = (cells) => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let combination of winCombinations) {
      const [a, b, c] = combination;
      if (cells[a] !== "" && cells[a] === cells[b] && cells[a] === cells[c]) {
        return true;
      }
    }

    return false;
  };

  // Function to check for a draw
  const checkDraw = (cells) => {
    return cells.every((cell) => cell !== "");
  };

  // Function to start a new game
  const startNewGame = () => {
    setCells(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameOver(false);
  };

  // Function to handle game mode change
  const handleGameModeChange = (event) => {
    setGameMode(event.target.value);
    startNewGame();
  };

  // Function to make a move for the computer
  const makeComputerMove = () => {
    const emptyCells = cells
      .map((cell, index) => (cell === "" ? index : null))
      .filter((index) => index !== null);
    const randomIndex = Math.floor(Math.random() * emptyCells.length);

    if (emptyCells.length > 0) {
      setTimeout(() => handleClick(emptyCells[randomIndex]), 500);
    }
  };

  return (
    <div className="TikTacToe">
      <h1
        style={{
          fontWeight: "400",
          background: "linear-gradient(transparent,rgba(0,0,0,1))",
        }}
      >
        Tic Tac Toe
      </h1>
      <div className="turn">It's player {currentPlayer}'s turn.</div>

      <div>
        <label
          style={{ background: "linear-gradient(transparent,rgba(0,0,0,1))" }}
        >
          Game Mode :{" "}
        </label>
        <select
          id="game-mode"
          value={gameMode}
          onChange={handleGameModeChange}
          style={{ color: "black" }}
        >
          {/* <option value="one-player">One Player</option> */}
          <option value="two-player">Two Players</option>
        </select>
      </div>

      <button className="new-game" onClick={startNewGame}>
        New Game
      </button>

      <div className="board">
        {cells.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
