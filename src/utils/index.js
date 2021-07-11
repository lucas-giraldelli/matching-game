export function getCSSVars(string) {
  const $html = document.querySelector("html");

  return getComputedStyle($html).getPropertyValue(string);
}

/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList} nodeList containing all tags converted from string
 */
export function stringToHTML(string) {
  const template = document.createElement("template");
  html = string.trim();
  template.innerHTML = html;

  return template.content.firstChild;
}
