let jsonData = (() => {
  let centralTable = localStorage.getItem("centralTable")
      ? JSON.parse(localStorage.getItem("centralTable"))
      : ["default"],
    lastClicked = {
      name: "default",
    };
  if (!localStorage.getItem("default")) {
    localStorage.setItem("default", JSON.stringify([]));
  }
  return {
    getTable: () => centralTable,
    setTable: (newTable = "centralTable", actualTable) => {
      localStorage.setItem(newTable, JSON.stringify(actualTable));
    },
    lastClicked,
  };
})();
export default jsonData;
