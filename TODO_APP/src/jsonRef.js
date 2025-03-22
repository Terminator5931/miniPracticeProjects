let jsonData = (() => {
  let centralTable = localStorage.getItem("centralTable") != null
    ? JSON.parse(localStorage.getItem("centralTable"))
    : ["default"];
  if (!localStorage.getItem('default')) {
    localStorage.setItem('default', JSON.stringify([]))
  }
  return {
    getTable: () => centralTable,
    setTable: (newTable) => {
      centralTable = newTable;
      localStorage.setItem('centralTable', JSON.stringify(centralTable))
    },
  };
})();
export default jsonData;
