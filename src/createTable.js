import { accepted, maybe, squads } from "./index";

function createTable() {
  const table = document.createElement("table");
  addHeaders(table);
  console.log(table.outerHTML);

  download(table.outerHTML);
}

function addHeaders(table) {
  const row = document.createElement("tr");
  for (let i = 1; i <= squads.length; i++) {
    row.append(generateHeader("Squad " + i));
  }

  row.append(document.createElement("th"));
  row.append(generateHeader("Accepted", "#93c47d"))
  row.append(generateHeader("Maybe", "#e06666"))

  table.append(row);
}

function generateHeader(text, color) {
  const header = document.createElement("th");
  header.textContent = text;
  header.style.backgroundColor = color ? color : "#ffd966";
  header.style.fontWeight = "bolder";
  header.style.width = "50px";
  header.style.border = "solid black";

  return header;
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