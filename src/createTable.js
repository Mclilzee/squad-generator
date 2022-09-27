import { accepted, maybe, squads } from "./index";
import { clerics, mystics, blademasters } from "./squadsData";

function createTable() {
  const tableBody = document.createElement("table");
  addTables(tableBody);
  console.log(tableBody.outerHTML);
  console.log(tableBody);
  download(tableBody.outerHTML);
}

function addTables(tableBody) {
  for (let i = 0; i < squads.length; i++) {
    const table = document.createElement("table");
    tableBody.append(generateTable("Squad " + (i + 1), "#ffd966", squads[i]));
  }

  tableBody.append(document.createElement("table"));
  tableBody.append(generateTable("Accepted", "#93c47d", accepted))
  tableBody.append(generateTable("Maybe", "#e06666", maybe))
}

function generateTable(name, headColor, data) {
  const table = document.createElement("table");
  table.style.display = "inline";
  table.append(generateHeader(name, headColor));
  fillColumns(table, data);

  return table;
}

function fillColumns(table, data) {
  let cell;
  for (let name of data) {
    if (clerics.has(name)) {
      cell = generateCell(name, "green");
    } else if (mystics.has(name)) {
      cell = generateCell(name, "cyan");
    } else {
      cell = generateCell(name);
    }

  table.append(cell);
  }
}

function generateHeader(text, color) {
  return generateCell(text, color, "bolder", "1.5rem");
}

function generateCell(text, color, weight, size) {
  const cell = document.createElement("td");
  cell.style.backgroundColor = color ? color : "";
  cell.style.fontWeight = weight ? weight : "";
  cell.style.fontSize = size ? size : "";
  cell.style.border = "solid black";
  cell.textContent = text ? text : "";

  const row = document.createElement("tr");
  row.append(cell);

  return row;
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