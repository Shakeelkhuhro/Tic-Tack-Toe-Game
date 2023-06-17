import React, { useState, useEffect } from "react";
import Square from "./Square";

const Board = () => {
  const initialBoardState = Array(9).fill(null);
  const [boardState, setBoardState] = useState(initialBoardState);
  const [isXTurn, setIsXTurn] = useState(true);
  const [moves, setMoves] = useState(0);
  const [gameResult, setGameResult] = useState(null);

  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let combination of winnerCombinations) {
      const [a, b, c] = combination;
      if (
        boardState[a] !== null &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
    }
    return null;
  };

  const checkDraw = () => {
    return moves === 9 && checkWinner() === null;
  };

  const handleSquareClick = (index) => {
    if (boardState[index] !== null || gameResult) {
      return;
    }

    const updatedBoardState = [...boardState];
    updatedBoardState[index] = isXTurn ? "X" : "O";
    setBoardState(updatedBoardState);
    setIsXTurn(!isXTurn);
    setMoves(moves + 1);
  };

  const handleReset = () => {
    setBoardState(initialBoardState);
    setIsXTurn(true);
    setMoves(0);
    setGameResult(null);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setGameResult(`${winner} won the game!`);
    } else if (checkDraw()) {
      setGameResult("It's a draw!");
    }
  }, [boardState]);

  const renderGameResult = () => {
    if (gameResult) {
      return (
        <>
          <h1>{gameResult}</h1>
          <button onClick={handleReset}>Play Again</button>
        </>
      );
    }
    return (
      <>
        <h4>Player {isXTurn ? "X" : "O"}, Please Move</h4>
        {renderBoard()}
      </>
    );
  };

  const renderBoard = () => {
    return (
      <div className="board">
        {boardState.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
    );
  };

  return <div className="board-container">{renderGameResult()}</div>;
};

export default Board;
