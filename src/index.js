import "./style.css";
import { clerics, mystics, blademasters, squads } from "./squadsData";

const accepted = new Set();
const maybe = new Set();

const generateButton = document.querySelector("button");
generateButton.addEventListener("click", () => {
  const list = document.querySelector("textarea").value.split("\n");

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
  
  manipulateData();
})

function manipulateData() {
  squads.forEach(squad => {
    squad = squad.filter(name => {
      if (accepted.has(name)) {
        accepted.delete(name);
        return true;
      } else if (maybe.has(name)) {
        maybe.delete(name);
        return true;
      } else {
        return false;
      }
    })

    squad = squad.map(name => {
      return maybe.has(name) ? "*" + name : name;
    })
  })
}