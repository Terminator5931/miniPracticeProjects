let a = document.querySelector("ul .a"),
  numA,
  numB;
let decision = true;
let numsButton = document.querySelectorAll(".num");
document.getElementById("clear").addEventListener("click", () => {
  a.textContent = "";
});
// taking first input
numsButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("num"))
      a.textContent += e.target.textContent;
  });
});
// taking operator input
let opr = document.querySelectorAll(".opr"),
  sign = "";
opr.forEach((button) => {
  button.addEventListener("click", (e) => {
    numA = a.textContent;
    a.textContent = "";
    sign = e.target.textContent;
  });
});
// finale
function operate() {
  numB = a.textContent;
  switch (sign) {
    case "+":
      a.textContent = Number(numA) + Number(numB);
      console.log(numA);
      console.log(numB);
      break;
    case "-":
      a.textContent = numA - numB;
      console.log(`${numA} ${numB}`);
      break;
    case "*":
      a.textContent = numA * numB;
      break;
    case "/":
      a.textContent = (numA / numB).toFixed(2);
      break;
  }
  numA = a.textContent;
}
