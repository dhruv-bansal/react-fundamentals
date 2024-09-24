
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {

  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X");

  // Learning: importance concept setCurrentPlayerSymbol is the state function - so it can't be directly called inside the 
  // component as it would be infinte loop. Triggering this functions re-executes the component
  function handleSelectSymbol() {
    setCurrentPlayerSymbol((previousPlayerSymbol) =>
      previousPlayerSymbol === "X" ? "O" : "X"
    )
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayerSymbol == 'X'} />
          <Player name="Player 2" symbol="O" isActive={currentPlayerSymbol == 'O'} />
        </ol>

       <GameBoard currentPlayerSymbol={currentPlayerSymbol} onSelectSymbol={handleSelectSymbol} />
       
       <Log />
      </div>
    </main>
  );
}

export default App;
