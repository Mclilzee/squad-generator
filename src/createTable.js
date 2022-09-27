import { accepted, maybe, squads } from "./index";

function createTable() {
  const table = document.createElement("table");
  addHeaders(table);
  console.log(table.outerHTML);

  download(table.outerHTML);
}

function addHeaders(table) {
  const row = document.createElement("table");
  for (let i = 1; i <= squads.length; i++) {
    const header = document.createElement("th");
    header.textContent = "Squad" + i;
    header.style.backgroundColor = "brown";
    header.style.fontWeight = "bolder";

    row.append(header);
  }

  table.append(row);
}

function download(file) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));
  element.setAttribute('download', "squads-generated.html");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default createTable;