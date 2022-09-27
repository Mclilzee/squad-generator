import { accepted, maybe, squads, format, maybeFormatter } from "./index";
import { clerics, mystics } from "./squadsData";

function createTable() {
  const table = document.createElement("table");
  generateHeaders(table);
  generateBody(table);
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
  const acceptedArray = Array.from(accepted);
  const maybeArray = Array.from(maybe);

  const body = document.createElement("tbody");

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 8; j++) {
      row.appendChild(generateCell(squads[j][i]))
    }

    row.appendChild(generateCell());
    row.appendChild(generateCell(acceptedArray[i]));
    row.appendChild(generateCell(maybeArray[i] ? maybeArray[i] + maybeFormatter : undefined));

    body.appendChild(row);
  }

  let i = 10;
  while (acceptedArray[i] || maybeArray[i]) {
    const row = document.createElement("tr");
    for (let i = 0; i < 9; i++) {
      row.appendChild(generateCell());
    }
    row.appendChild(generateCell(acceptedArray[i]));
    row.appendChild(generateCell(maybeArray[i] ? maybeArray[i] + maybeFormatter : undefined));

    body.appendChild(row);

    i++;
  }

  table.appendChild(body);
}

function generateCell(text, color, weight, size) {
  const cell = document.createElement("td");
  cell.style.backgroundColor = color ? color : text ? getColor(text) : "";
  cell.style.fontWeight = weight ? weight : "";
  cell.style.fontSize = size ? size : "";
  cell.style.border = text ? "solid black" : "";
  cell.style.textAlign = "center";
  cell.textContent = text ? text : "";

  return cell;
}

function getColor(text) {
  text = text.replaceAll(maybeFormatter, "");
  if (clerics.has(text)) {
    return "#00ff00";
  } else if (mystics.has(text)) {
    return "cyan";
  } else {
    return "";
  }
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