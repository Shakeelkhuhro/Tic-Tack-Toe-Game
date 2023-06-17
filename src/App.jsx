import { useState } from "react";
import "./App.css";
import Board from "./TicTacToeGame/Board";

function App() {
  const [continueClkd, setcontinueClkd] = useState(false);

  const handleContinueBtn = () => {
    setcontinueClkd(true);
  };

  return (
    <>
      <div className="App">
        <h5>Tic Tac Toe Game</h5>
        {!continueClkd ? (
          <>
            <p>Well Come to Tic Tac Toe Game by Shakeel Khuhro</p>
            <small>First Player is Considered as X Player</small>
            <p>Click Continue to Play Game</p>
            <button onClick={handleContinueBtn}>Continue</button>
          </>
        ) : (
          <Board />
        )}
      </div>
    </>
  );
}

export default App;
