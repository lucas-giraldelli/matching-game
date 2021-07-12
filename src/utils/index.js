/**
 * @param {string} string accepts a css var from elements/base.css
 * @returns {string} returns a string representing css color;
 */
export function getCSSVars(string) {
  const $html = document.querySelector("html");

  return getComputedStyle($html).getPropertyValue(string);
}

/**
 * @param {string} HTML representing any number of sibling elements
 * @return {NodeList} nodeList containing all tags converted from string
 */
export function stringToHTML(string) {
  const template = document.createElement("template");
  html = string.trim();
  template.innerHTML = html;

  return template.content.firstChild;
}

/**
 *
 * @param {any} input any variable to dupe destructuring
 * @returns {array[]} returns a dupped array
 */
export function dupeDeclarations(input) {
  return [input, input];
}
