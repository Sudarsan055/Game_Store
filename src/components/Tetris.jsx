// src/TetrisGame.js
import React, { useState, useEffect, useCallback } from "react";
// import "./TetrisGame.css";

// Define the shapes of the Tetris pieces
const TETROMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  I: { shape: [[1, 1, 1, 1]], color: "80, 227, 230" },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: "36, 95, 223",
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: "223, 173, 36",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "223, 217, 36",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "48, 211, 56",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "132, 61, 198",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "227, 78, 78",
  },
};

// Create the game grid
const createGrid = () => {
  const rows = 20;
  const cols = 10;
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));
  return grid;
};

// Create the TetrisGame component
const Tetris = () => {
  const [grid, setGrid] = useState(createGrid());
  const [currentPiece, setCurrentPiece] = useState(TETROMINOS["T"]);

  // Render the grid with pieces
  const renderGrid = () => {
    return grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className={`cell ${cell !== 0 ? "filled" : ""}`}
          style={{
            backgroundColor:
              cell !== 0
                ? `rgba(${TETROMINOS[cell].color}, 0.8)`
                : "transparent",
          }}
        />
      ))
    );
  };

  // Handle key press events
  const handleKeyPress = useCallback((event) => {
    if (event.key === "ArrowLeft") {
      // Move piece left
    } else if (event.key === "ArrowRight") {
      // Move piece right
    } else if (event.key === "ArrowDown") {
      // Move piece down
    } else if (event.key === "ArrowUp") {
      // Rotate piece
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="tetris-container">
      <div className="grid">{renderGrid()}</div>
    </div>
  );
};

export default Tetris;
