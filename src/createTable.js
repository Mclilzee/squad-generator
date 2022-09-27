import { accepted, maybe, squads } from "./index";
import { clerics, mystics } from "./squadsData";

function createTable() {
  const table = document.createElement("table");
  generateHeaders(table);
  generateBody(table);

  console.log(table.outerHTML);
  console.log(table);
  download(table.outerHTML);
}

function generateHeaders(table) {
  const head = document.createElement("thead");
  const row = document.createElement("tr");

  for (let i = 0; i < squads.length; i++) {
    row.appendChild(generateHeader("Squad " + (i + 1), "#ffd966"));
  }

  row.appendChild(generateHeader());
  row.appendChild(generateHeader("Accepted", "#93c47d"))
  row.appendChild(generateHeader("Maybe", "#e06666"))

  head.appendChild(row);
  table.appendChild(head);
}

function generateHeader(text, color) {
  return generateCell(text, color, "bolder", "1.5rem");
}

function generateBody(table) {

}

function generateCell(text, color, weight, size) {
  const cell = document.createElement("td");
  cell.style.backgroundColor = color ? color : "";
  cell.style.fontWeight = weight ? weight : "";
  cell.style.fontSize = size ? size : "";
  cell.style.border = "solid black";
  cell.textContent = text ? text : "";

  return cell;
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