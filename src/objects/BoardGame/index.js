import { CardFrontBack } from "../../components/CardFrontBack";

import "./style.css";

/**
 * @param {number} pairs this is the number of pairs (default 3);
 * @returns {TemplateString} returns template string with game cards
 */
export function BoardGame(pairs = 3) {
  const totalPairs = pairs * 2;

  const cardFrontBack = CardFrontBack();
  const boardGame = cardFrontBack.repeat(totalPairs);

  return /*html*/ `
    <section class="board-game">
      ${boardGame}
    </section>
  `;
}
