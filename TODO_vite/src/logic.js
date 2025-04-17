import jsonData from "./jsonRef";
const logic = (() => {
  function checkboxLogic(target) {
    let inputBox = document.querySelector("#right .content"),
      checkboxes = Array.from(inputBox.querySelectorAll("input")),
      idx = checkboxes.indexOf(target),
      completedTasksData = localStorage.getItem("completed") != null
        ? JSON.parse(localStorage.getItem("completed"))
        : [],
      currentTable = localStorage.getItem("default")
        ? JSON.parse(localStorage.getItem("default"))
        : [];
    inputBox.removeChild(inputBox.children[idx + 1]);
    // let temp = 
    completedTasksData.push(currentTable.splice(idx, 1)[0]);
    jsonData.setTable("completed", completedTasksData);
    jsonData.setTable("default", currentTable);
  }
  return {
    checkboxLogic,
  };
})();
export default logic;
