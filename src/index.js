import "./style.css";
import { clerics, mystics, blademasters } from "./squadsData";

const text = document.querySelector("textarea");
const generateButton = document.querySelector("button");

const accepted = new Set();
const maybe = new Set();

generateButton.addEventListener("click", () => {
  const list = text.value.split("\n");

  let fillingList = accepted;

  for (let i = 0; i < list.length; i++) {
    if ((/.*Accepted.*/gmi).test(list[i])) {
      fillingList = accepted;
      continue;
    } else if ((/.*Tentative.*/gmi).test(list[i])) {
      fillingList = maybe;
      continue;
    } else if ((/.*Declined.*/gmi).test(list[i])) {
      fillingList = new Set();
      continue;
    }

    fillingList.add(list[i]);
  }

})

console.log(clerics);

