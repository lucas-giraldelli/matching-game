import { getCSSVars } from "../../utils";

import "./style.css";

export function CardGame(bgColor, imgPath) {
  const defaultBgColor = getCSSVars("--color-alura");
  const defaultImg = "./src/assets/images/alura-logo.svg";

  return /*html*/ `
    <article class="card-game" style="background-color: ${
      bgColor || defaultBgColor
    }">
      <img src="${imgPath || defaultImg}" alt="Logo da alura">
    </article>
  `;
}
