import { useState } from "react";

const gameBoardArry = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({currentPlayerSymbol, onSelectSymbol }) {
  const [gameBoardState, setGameBoardState] = useState(gameBoardArry);
  //const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X");

  function handSelectSquare(rowIndex, cellIndex) {

    setGameBoardState((previousGameBoardState) => {
      //console.log("rowIndex: " + rowIndex + " cellIndex: " + cellIndex);

      // Create a copy of the previous state
      const newGameBoardState = [...previousGameBoardState.map((row) => [...row])];

      // Update the copy
      newGameBoardState[rowIndex][cellIndex] = currentPlayerSymbol;
      // setCurrentPlayerSymbol((previousPlayerSymbol) =>
      //   previousPlayerSymbol === "X" ? "O" : "X"
      // );
      onSelectSymbol();


      // Return the new state
      console.log(newGameBoardState);
      return newGameBoardState;
    });
  }

  let gameBoardDisplay = (
    <ol id="game-board">
      {gameBoardState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handSelectSquare(rowIndex, cellIndex)}>
                  { console.log("playsymbol" + playSymbol)}
                  {playSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );

  return gameBoardDisplay;
}
