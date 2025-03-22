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
  <div class="up">
    </div>
  <div class="down">
      <button>Add New</button>
  </div>
</div>
  <div id="right">
<div class="buttonContainer">
  <button>Add New</button>
</div>
<div class="content"></div>

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
    let leftSideBar = document.querySelector("#left .up");
    leftSideBar.innerHTML = ``;
    jsonData.getTable().forEach((element) => {
      let p = document.createElement("p");
      p.innerHTML = `${element}`;
      leftSideBar.append(p);
    });
  }

  function render() {
    homePage();
    topBar();
    populateSidebar();
  }
  return {
    render,
    populateSidebar,
  };
})();
export default mainPageCompeonents;
