import jsonData from "./jsonRef";
import mainPageCompeonents from "./home";

const dialogFunc = (() => {
  function leftSidebarProjectPopulate() {
    document.querySelector("dialog").innerHTML = `
<form method="dialog">
  <label for="project"
    >Project:
    <input type="text" name="project"/>
  </label>
  <button type="submit">Add New Project</button>
</form>
`;
    document.querySelector("dialog").showModal();
    document
      .querySelector("dialog form")
      .addEventListener("submit", leftSidebarProjectFormHandler);
  }
  function leftSidebarProjectFormHandler(event) {
    let value = document.querySelector("form input[name='project']").value,
      currentTable = jsonData.getTable();
    if (value != "default" && currentTable.indexOf(value) == -1) {
      currentTable.push(value);
      jsonData.setTable(currentTable);
      mainPageCompeonents.populateSidebar();
    }
    document.querySelector("dialog").close();
    event.target.removeEventListener("submit", leftSidebarProjectFormHandler);
  }
  function rightContentPopulate() {
    document.querySelector("dialog").innerHTML = `
<form method="dialog">
<label for="title">
  Title:
  <input type="text" name="title">
</label>
<label for="description">
  Description:
  <input type="text" name="description">
</label>
<label for="priority">
  Priority:
  <select>
    <option value="l" selected>Low</option>
    <option value="m">Medium</option>
    <option value="h">High</option>
  </select>
</label>
<label for="project">
    Choose Project: 
  <select>
  </select>
</label>
<button type="submit">Add</button>
</form>
`;
    // adding projects dynamically
    let projectSelector = document.querySelector(
        'form label[for="project"] select',
      ),
      currentTable = jsonData.getTable();
    for (let i = 0; i < currentTable.length; i++) {
      const element = currentTable[i];
      let option = document.createElement("option");
      option.textContent = element;
      projectSelector.append(option);
    }
    document.querySelector("dialog").showModal();
    document
      .querySelector("dialog form")
      .addEventListener("submit", rightContentFormHandler);
  }
  function rightContentFormHandler(event) {
    let obj = {
        title: document.querySelector('form input[name="title"]').value,
        description: document.querySelector('form input[name="description"]')
          .value,
        priority: document.querySelector("form select").value,
        project: document.querySelector("form label[for='project'] select")
          .value,
      },
      projectCurrentTable = JSON.parse(localStorage.getItem(obj.project)) || [];
    projectCurrentTable.push(obj);
    localStorage.setItem(`${obj.project}`, JSON.stringify(projectCurrentTable));
    event.target.removeEventListener("submit", rightContentFormHandler);
    mainPageCompeonents.populateTasks();
  }
  return {
    leftSidebarProjectPopulate,
    rightContentPopulate,
  };
})();
export default dialogFunc;
