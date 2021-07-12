import { ScoreBoard } from "./src/objects/ScoreBoard";
import { BoardGame } from "./src/objects/BoardGame";
import { getCSSVars, dupeDeclarations } from "./src/utils";

import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

const fieryRose = getCSSVars("--color-fiery-rose");
const alura = getCSSVars("--color-alura");

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(3);
const $htmlScoreBoard = ScoreBoard("Player one", "Player two");

/**
 * @param {string} action accepts "flip" or "unflip"
 * @param {Element} container ref to parent
 * @param {string} color color string to change between
 * @param {Element} image ref to image itself
 * @param {string} src image path to change between
 */
function toggleStyle(action, container, color, image, src) {
  const flip = {
    flip: true,
    unflip: false,
  };

  container.style.backgroundColor = color;
  image.src = src;
  container.classList.toggle("flipped", flip[action]);
}

function turnCard(container, image) {
  const isCurrentContainerFlipped = container.classList.contains("flipped");

  if (isCurrentContainerFlipped) {
    toggleStyle(
      "unflip",
      container,
      alura,
      image,
      "./src/assets/images/alura-logo.svg"
    );
  } else {
    toggleStyle(
      "flip",
      container,
      fieryRose,
      image,
      "./src/assets/images/logo-css.png"
    );
  }
}

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${$htmlScoreBoard}
    ${$htmlBoardGame}
  `
);

const $htmlBoardGameRef = document.querySelector("section");

$htmlBoardGameRef.addEventListener("click", (event) => {
  const [currentElement, { tagName }] = dupeDeclarations(event.target);

  if (tagName === "ARTICLE") {
    const container = currentElement;
    const image = currentElement.querySelector("img");

    turnCard(container, image);
  } else if (tagName === "IMG") {
    const image = currentElement;
    const container = currentElement.closest("article");

    turnCard(container, image);
  }
});
