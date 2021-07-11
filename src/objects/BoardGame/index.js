import { CardGame } from "../../components/CardGame";

export function BoardGame(pairs = 3) {
  const totalPairs = pairs * 2;

  const htmlCardGame = CardGame();
  const $htmlBoardGame = htmlCardGame.repeat(totalPairs);

  return $htmlBoardGame;
}
