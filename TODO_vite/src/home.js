import jsonData from "./jsonRef";

const mainPageCompeonents = (function () {
  function homePage() {
    let div = document.createElement("div");
    div.innerHTML = `
<dialog>
  <form></form>
</dialog>
<div id="top"></div>
<div id="bottom">
  <div id="left">
    <div class="up"></div>
    <div class="down">
      <button>Add New</button>
      <p>completed</p>
    </div>
  </div>
  <div id="right">
    <div class="buttonContainer">
      <button>Add New</button>
    </div>
    <div class="content">
      
    </div>
  </div>
</div>
`;
    document.body.appendChild(div);
  }
  function topBar() {
    let top = document.getElementById("top");
    top.innerHTML = `TODO APP`;
  }
  function populateSidebar() {
    let leftSideBar = document.querySelector("#left .up"),
      currentTable = jsonData.getTable();
    leftSideBar.innerHTML = ``;
    for (let i = 0; i < currentTable.length; i++) {
      const element = currentTable[i];
      let p = document.createElement("p");
      if (i == 0) {
        p.innerHTML = `${element}`;
        leftSideBar.appendChild(p);
      } else {
        p.innerHTML = `${element}<button>Delete</button>`;
        leftSideBar.appendChild(p);
      }
    }
  }
  function populateTasks(project = "default") {
    let currentTable = JSON.parse(localStorage.getItem(`${project}`)),
      contentDiv = document.querySelector("#right .content");
    // here first p is default heading title
    contentDiv.innerHTML = `
<p><span>title</span><span>description</span><span>priority</span></p>
`;
    if (currentTable) {
      currentTable.forEach((element) => {
        // title description priority
        contentDiv.innerHTML += `<p><input type="checkbox" ${project == "completed" ? "checked" : ""}><span>${element.title}</span>
<span>${element.description}</span>
<span>${element.priority}</span>
</p>
`;
      });
    }
  }

  function render() {
    homePage();
    topBar();
    populateSidebar();
    populateTasks();
  }
  return {
    render,
    populateSidebar,
    populateTasks,
  };
})();
export default mainPageCompeonents;
