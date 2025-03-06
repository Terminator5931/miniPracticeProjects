import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import contact from "./contact.js";
const dynamicPages = {
  home,
  menu,
  about,
  contact,
}
const eventL = (() => {
  let lastPressed = '';
  const nav = document.querySelector("nav");
  for (let i = 1; i <= nav.children.length; i++) {
    nav.querySelector(`:nth-child(${i})`).addEventListener("click", (e) => {
      if (lastPressed != e.target.textContent.toLowerCase()) {
        dynamicPages[e.target.textContent.toLowerCase()]();
        lastPressed = e.target.textContent.toLowerCase();
      }
    });
  }
})();
dynamicPages['home']();
export default eventL;
