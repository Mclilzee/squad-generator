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



function fillColumns(table, squad) {
  let cell;
  for (let name of squad) {
    if (clerics.has(name)) {
      cell = generateCell(name, "green");
    } else if (mystics.has(name)) {
      cell = generateCell(name, "cyan");
    } else {
      cell = generateCell(name);
    }
  }

  table.append(cell);
}

function generateHeader(text) {
  return generateCell(text, "#ffd966", "bolder", "1.5rem");
}

function generateCell(text, color, weight, size) {
  const cell = document.createElement("td");
  cell.style.backgroundcolor = color ? color : "";
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