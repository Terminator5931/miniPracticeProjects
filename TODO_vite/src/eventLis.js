import jsonData from "./jsonRef";
import logic from "./logic";
import dialogFunc from "./dialog";
import mainPageCompeonents from "./home";

let div = document.createElement("div");
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#left").addEventListener("click", (e) => {
    if (e.target.matches("#left .down button")) {
      dialogFunc.leftSidebarProjectPopulate();
    }
    if (e.target.matches("#left p")) {
      jsonData.lastClicked.name = e.target.textContent;
      mainPageCompeonents.populateTasks(e.target.textContent);
    }
    if (e.target.matches("#left .up button")) {
      let leftUpperSidebarButtons = Array.from(
          document.querySelectorAll("#left .up button"),
        ),
        idx = leftUpperSidebarButtons.indexOf(e.target),
        currentTable = jsonData.getTable();
      currentTable.splice(idx + 1, 1);
      jsonData.setTable("centralTable", currentTable);
      mainPageCompeonents.populateSidebar();
    }
  });
  document.querySelector("#right").addEventListener("click", (e) => {
    // completed tasks default addon
    if (
      jsonData.lastClicked == "completed" &&
      e.target.matches("#right input")
    ) {
      console.log("successful");
      let completedTasks = JSON.parse(localStorage.getItem("completed")),
        checkBoxes = Array.from(document.querySelectorAll("#right input")),
        tickBoxIdx = checkBoxes.indexOf(e.target);
      // now removing the completed tasks from the completed json array from localstorage
      let tempUncheckedItem = completedTasks.splice(tickBoxIdx + 1)[0];
      console.log(tempUncheckedItem);
    }
    // console.log(e.target);
    if (e.target.matches("#right .buttonContainer button")) {
      e.target.addEventListener("click", dialogFunc.rightContentPopulate);
    }
    if (e.target.matches("#right .content input")) {
      logic.checkboxLogic(e.target);
    }
  });
});
window.addEventListener("beforeunload", () => {
  jsonData.setTable("centralTable", jsonData.getTable());
});
