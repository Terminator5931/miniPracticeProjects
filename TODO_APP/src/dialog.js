import jsonData from "./jsonRef";
import mainPageCompeonents from "./home.js";

const dialogFunc = (() => {
  function leftSidebarProjectPopulate() {
    let dialog = document.querySelector("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <label for="project"
    >Project:
    <input type="text" name="project"/>
  </label>
  <button type="submit">Add New Project</button>
</form>
`;
    dialog.showModal();
    document
      .querySelector("dialog form")
      .addEventListener("submit", leftSidebarProjectFormPopulate);
  }
  function leftSidebarProjectFormPopulate(event) {
    let value = document.querySelector("form input[name='project']").value,
      currentTable = jsonData.getTable();
    if (value != "default" && currentTable.indexOf(value) == -1) {
      currentTable.push(value);
      jsonData.setTable(currentTable);
      mainPageCompeonents.populateSidebar();
    }
    document.querySelector("dialog").close();
    event.target.removeEventListener("submit", leftSidebarProjectFormPopulate);
  }
  return {
    leftSidebarProjectPopulate,
  };
})();
export default dialogFunc;
