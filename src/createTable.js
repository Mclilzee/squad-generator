import { accepted, maybe, squads } from "./index";
import { clerics, mystics, blademasters } from "./squadsData";

function createTable() {
  const tableBody = document.createElement("table");
  addTables(tableBody);
  console.log(tableBody.outerHTML);
  console.log(tableBody);
  // download(table.outerHTML);
}

function addTables(tableBody) {
  for (let i = 1; i <= squads.length; i++) {
    const table = document.createElement("table");
    table.style.display = "inline";
    table.append(generateHeader("Squad " + i));
    fillColumns(table, squads[i]);

    table.append(document.createElement("th"));
    tableBody.append(table);
  }

  tableBody.append(document.createElement("table"));
  table.append(generateHeader("Accepted", "#93c47d"))
  table.append(generateHeader("Maybe", "#e06666"))
}

function generateHeader(text, color) {
  const header = document.createElement("th");
  header.textContent = text;
  header.style.backgroundColor = color ? color : "#ffd966";
  header.style.fontWeight = "bolder";
  header.style.width = "50px";
  header.style.border = "solid black";

  const row = document.createElement("tr");
  row.append(header);
  return row;
}

function fillColumns(table, squad) {
  let cell;
  for (let name of squad) {
    if (clerics.has(name)) {
      cell = generateClericCell(name);
    } else if (mystics.has(name)) {
      cell = generateMysticCell(name);
    } else {
      cell = generateCell(name);
    }
  }

  table.append(cell);

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