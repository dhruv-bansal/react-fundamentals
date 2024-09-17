import { useState } from "react";

export default function Player({ name, symbol }) {

  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function startEditing() {
    setIsEditing((editing) => !editing);
    console.log("Edit button clicked " + isEditing);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameDisplay = <span className="player-name">{playerName}</span>;
  // get function call as a variable to control the state passed to the function
  let buttonAction = () => startEditing();
  let buttonName = "Edit";
  if (isEditing) {
    playerNameDisplay = (
      <input
        type="text"
        id="player-new-name"
        className="player-name"
        value={playerName}
        onChange={handleInputChange}
      />
    );
    buttonName = "Done";
    //name = document.getElementById("player-new-name").value;
    buttonAction = () => startEditing();
  }

  return (
    <li>
      <span className="player">
        {playerNameDisplay}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={buttonAction}>{buttonName}</button>
    </li>
  );
}
