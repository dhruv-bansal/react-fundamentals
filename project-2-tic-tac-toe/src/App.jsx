
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {

  const [gameTurns, setGameTurn] = useState([]);
  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X");

  // Learning: importance concept setCurrentPlayerSymbol is the state function - so it can't be directly called inside the 
  // component as it would be infinte loop. Triggering this functions re-executes the component
  
  function handleSelectSymbol(rowIndex, colIndex) {
    setCurrentPlayerSymbol((previousPlayerSymbol) =>
      previousPlayerSymbol === "X" ? "O" : "X"
    )

    setGameTurn(preTurns => {

      // Learning: why we needed to calculate state again rather then getting it from the above player state
      let currentPlayer = 'X';
      if(preTurns.length > 0 && preTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      // complex object with
      const turn = {square: {row: rowIndex, col: colIndex}, player: currentPlayer};
      const updatedTurns = [turn, ...preTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayerSymbol == 'X'} />
          <Player name="Player 2" symbol="O" isActive={currentPlayerSymbol == 'O'} />
        </ol>

       <GameBoard turns={gameTurns} onSelectSymbol={handleSelectSymbol} />
      
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
