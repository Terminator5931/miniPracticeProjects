import jsonData from "./jsonRef";
import dialogFunc from "./dialog";

let div = document.createElement("div");
window.addEventListener("DOMContentLoaded", (e) => {
  //e.target.removeEventListener()
  document
    .querySelector("#left .down button")
    .addEventListener("click", dialogFunc.leftSidebarProjectPopulate);
  document.querySelector("#right").addEventListener("click", (e) => {
    if (e.target.matches("#right .buttonContainer button")) {
      
    }
  });
});
window.addEventListener("beforeunload", () => {
  jsonData.setTable(jsonData.getTable());
});
