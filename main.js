import { ScoreBoard } from "./src/objects/ScoreBoard";
import { BoardGame } from "./src/objects/BoardGame";

import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

const $html = document.querySelector("html");

const fieryRose =
  getComputedStyle($html).getPropertyValue("--color-fiery-rose");
const alura = getComputedStyle($html).getPropertyValue("--color-alura");

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(3);
const $htmlScoreBoard = ScoreBoard("Player one", "Player two");

function toggleStyle(container, color, image, src) {
  container.style.backgroundColor = color;
  image.src = src;
}

function turnCard(container, image) {
  const isCurrentContainerFlipped = container.classList.contains("flipped");

  if (isCurrentContainerFlipped) {
    //prettier-ignore
    toggleStyle(
      container,
      alura,
      image,
      "./src/assets/images/alura-logo.svg"
    );

    container.classList.toggle("flipped", false);
  } else {
    toggleStyle(
      container,
      fieryRose,
      image,
      "./src/assets/images/logo-css.png"
    );

    container.classList.toggle("flipped", true);
  }
}

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${$htmlScoreBoard}
    ${$htmlBoardGame}
  `
);

$root.addEventListener("click", (event) => {
  const { tagName } = event.target;

  if (tagName === "ARTICLE") {
    const container = event.target;
    const image = event.target.querySelector("img");

    turnCard(container, image);
  } else if (tagName === "IMG") {
    const image = event.target;
    const container = event.target.closest("article");

    turnCard(container, image);
  }
});
