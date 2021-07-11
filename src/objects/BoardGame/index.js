import { CardGame } from "../../components/CardGame";

import "./style.css";

export function BoardGame(pairs = 3) {
  const totalPairs = pairs * 2;

  const cardGame = CardGame();
  const boardGame = cardGame.repeat(totalPairs);

  return `
    <section class="board-game">
      ${boardGame}
    </section>
  `;
}
