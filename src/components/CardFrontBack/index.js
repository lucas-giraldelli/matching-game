import { CardGame } from "../CardGame";

import "./style.css";

export function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame()}
    </article>
  `;
}
