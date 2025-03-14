let jsonData = [];
window.addEventListener("DOMContentLoaded", () => {
  jsonData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  for (const idx of jsonData) {
    getData(idx);
  }
});
window.addEventListener("beforeunload", () => {
  localStorage.setItem("data", JSON.stringify(jsonData));
});

const modal = document.querySelector("dialog");
const form = document.querySelector("form");
const content = document.getElementById("content");

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
  };
  jsonData.push(obj);
  getData(obj);
});
function getData(obj = {}) {
  let wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute('class', `checkbox`)
  wrapperDiv.innerHTML = `
  <p>
    <span style="width: 20%; display: inline-block">${obj.title}</span>
    ${obj.description}
    ${obj.priority}
  </p>
  <button>Delete</button>
`;
  content.appendChild(wrapperDiv);
}
content.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    const arr = Array.from(document.querySelectorAll('#content button'));
    jsonData.splice(arr.indexOf(e.target), 1);
    e.target.parentNode.remove();
  }
});
