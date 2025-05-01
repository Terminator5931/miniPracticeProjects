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
      // to delete non default projects
      let leftUpperSidebarButtons = Array.from(
        document.querySelectorAll("#left .up button"),
      ),
        idx = leftUpperSidebarButtons.indexOf(e.target),
        currentTable = jsonData.getTable();
      // idx + 1 for adjust with respect "default"
      currentTable.splice(idx + 1, 1);
      jsonData.setTable("centralTable", currentTable);
      mainPageCompeonents.populateSidebar();
    }
  });
  document.querySelector("#right").addEventListener("click", (e) => {
    // completed tasks default addon
    if (
      jsonData.lastClicked.name == "completed" &&
      e.target.matches("#right input")
    ) {
      let completedTasks = JSON.parse(localStorage.getItem("completed")),
        tickBoxIdx = Array.from(document.querySelectorAll("#right input")).indexOf(e.target);
      // now removing the completed tasks from the completed json array from localstorage
      let tempObj = completedTasks.splice(tickBoxIdx, 1)[0],
        untickedProject = JSON.parse(localStorage.getItem(tempObj["project"]));
      untickedProject.push(tempObj);
      jsonData.setTable(tempObj["project"], untickedProject);
      jsonData.setTable('completed', completedTasks);
      // dropping that unticked element from the DOM
      document.querySelector('#right .content').children[tickBoxIdx + 1].remove();
    }
    if (e.target.matches("#right .content input") && jsonData.lastClicked.name != 'completed') {
      logic.checkboxLogic(e.target);
    }
    if (e.target.matches("#right .buttonContainer button")) {
      e.target.addEventListener("click", dialogFunc.rightContentPopulate);
    }
  });
});
window.addEventListener("beforeunload", () => {
  jsonData.setTable("centralTable", jsonData.getTable());
});
