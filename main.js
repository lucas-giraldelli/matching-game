import { CardGame } from "./src/components/CardGame";
import { PlayerName } from "./src/components/PlayerName";
import { BoardGame } from "./src/objects/BoardGame";

import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

const $html = document.querySelector("html");

const fieryRose =
  getComputedStyle($html).getPropertyValue("--color-fiery-rose");

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(3);
const $playerOne = PlayerName("Player 1");
const $playerTwo = PlayerName("Player 2");
const $playersContainer = document.createElement("header");

function flipCard(container, image) {
  container.style.backgroundColor = fieryRose;
  image.src = "./src/assets/images/logo-css.png";
}

$root.insertAdjacentElement("beforebegin", $playersContainer);
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

$playersContainer.insertAdjacentHTML("beforeend", $playerOne);
$playersContainer.insertAdjacentHTML("beforeend", $playerTwo);

$root.addEventListener("click", (event) => {
  const { tagName } = event.target;

  if (tagName === "ARTICLE") {
    const container = event.target;
    const image = event.target.querySelector("img");

    flipCard(container, image);
  } else if (tagName === "IMG") {
    const image = event.target;
    const container = event.target.closest("article");

    flipCard(container, image);
  }
});
