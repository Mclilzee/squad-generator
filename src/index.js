import "./style.css";
import { concreteSquads } from "./squadsData";
import fillSquadsWithClerics from "./fillSquadsWithClerics";
import fillSquadsWithMystics from "./fillSquadsWithMystics";
import fillSquadsWithBlademasters from "./fillSquadsWithBlademasters";
import createTable from "./createTable";

const accepted = new Set();
const maybe = new Set();
let squads = []

const generateButton = document.querySelector("button");
generateButton.addEventListener("click", () => {
  squads = [];
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
  fillSquadsWithClerics();
  fillSquadsWithMystics();
  fillSquadsWithBlademasters();
  createTable();
})

function manipulateData() {
  concreteSquads.forEach(squad => {
    const newSquad = new Set();
    squad = squad.filter(name => {
      if (accepted.has(name) || maybe.has(name)) {
        accepted.delete(name);
        return true;
      } else {
        return false;
      }
    })

    squad.forEach(name => {
      if (maybe.has(name)) {
        maybe.delete(name);
        newSquad.add(name + " (mb)");
      } else {
        newSquad.add(name);
      }
    })

    squads.push(newSquad);
  })
}

export { accepted, maybe, squads };