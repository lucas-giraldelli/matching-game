import { PlayerName } from "../../components/PlayerName";

import "./style.css";

export function ScoreBoard(...players) {
  const playerOne = players[0];
  const playerTwo = players[1];

  return /*html*/ `
    <header class="score-board">
      ${PlayerName(playerOne)}
      ${PlayerName(playerTwo)}
    </header>
  `;
}
