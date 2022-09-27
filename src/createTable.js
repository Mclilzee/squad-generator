import { accepted, maybe, squads } from "./index";
import { clerics, mystics } from "./squadsData";

function createTable() {
  const table = document.createElement("div");
  addTables(table);

  console.log(table.outerHTML);
  console.log(table);
  download(table.outerHTML);
}


function addTables(tableBody) {
  for (let i = 0; i < squads.length; i++) {
    tableBody.appendChild(generateTable("Squad " + (i + 1), "#ffd966", squads[i]));
  }

  tableBody.appendChild(generateTable());
  tableBody.appendChild(generateTable("Accepted", "#93c47d", accepted))
  tableBody.appendChild(generateTable("Maybe", "#e06666", maybe))
}

function generateTable(name, headColor, data) {
  if (data === undefined) {
    data = [];
  }

  const table = document.createElement("table");
  table.style.display = "inline";
  table.appendChild(generateHeader(name, headColor));
  fillColumns(table, data);

  return table;
}

function fillColumns(table, data) {
  let cell;
  for (let name of data) {
    if (clerics.has(name.replaceAll(" (mb)", ""))) {
      cell = generateCell(name, "#00ff00", "bold");
    } else if (mystics.has(name.replaceAll(" (mb)", ""))) {
      cell = generateCell(name, "cyan", "bold");
    } else {
      cell = generateCell(name, null, "bold");
    }

    table.appendChild(cell);
  }
}

function generateHeader(text, color) {
  const head = document.createElement("thead");
  head.appendChild(generateCell(text, color, "bolder", "1.5rem"));
  return head;
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