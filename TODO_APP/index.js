const content = document.getElementById("content");
let jsonData = [];
window.addEventListener("DOMContentLoaded", () => {
  jsonData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  for (let i = 0; i < jsonData.length; i++) {
    const obj = jsonData[i];
    getData(obj, i);
    flipCheckboxlogic(content.lastChild.children[0]);
  }
});
window.addEventListener("beforeunload", () => {
  localStorage.setItem("data", JSON.stringify(jsonData));
});

const modal = document.querySelector("dialog");
const form = document.querySelector("form");

document.querySelector("#rightSection button").addEventListener("click", () => {
  modal.showModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.close();
  let obj = {
    title: form.querySelector("label input.title").value,
    description: form.querySelector("label textarea.description").value,
    priority: form.querySelector("label select.priority").value,
    checked: false,
  };
  jsonData.push(obj);
  getData(obj);
});
function getData(obj = {}, i = null) {
  let wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("class", "checkbox");
  wrapperDiv.innerHTML = `
    <input type="checkbox" ${i != null && jsonData[i]["checked"] ? "checked" : ""}>
  <p>
    <span style="width: 20%; display: inline-block">${obj.title}</span>
    ${obj.description}
    ${obj.priority}
  </p>
  <button>Delete</button>
`;
  content.appendChild(wrapperDiv);
}
function flipCheckboxlogic(checkboxReference) {
  let parentReferences = checkboxReference.parentElement.children[1];
  let span = parentReferences.children[0];
  if (checkboxReference.checked) {
    parentReferences.hasAttribute("class")
      ? null
      : parentReferences.setAttribute("class", "checkedBox");
    span.hasAttribute("class")
      ? null
      : span.setAttribute("class", "checkedBox");
  } else {
    parentReferences.hasAttribute("class")
      ? parentReferences.removeAttribute("class")
      : null;
    span.hasAttribute("class") ? span.removeAttribute("class") : null;
  }
}
content.addEventListener("click", (e) => {
  // deletion logic
  if (e.target.tagName == "BUTTON") {
    const arr = Array.from(document.querySelectorAll("#content button"));
    jsonData.splice(arr.indexOf(e.target), 1);
    e.target.parentNode.remove();
  }
  // checkbox logic on finishing task!
  if (e.target.tagName == "INPUT") {
    const arr = Array.from(document.querySelectorAll("#content input"));
    jsonData[arr.indexOf(e.target)]["checked"] =
      !jsonData[arr.indexOf(e.target)]["checked"];
    flipCheckboxlogic(e.target);
  }
});
