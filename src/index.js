import "./style.css";
import { concreteSquads, factionBase } from "./squadsData";
import fillSquadsWithClerics from "./fillSquadsWithClerics";
import fillSquadsWithMystics from "./fillSquadsWithMystics";
import fillSquadsWithBlademasters from "./fillSquadsWithBlademasters";
import createTable from "./createTable";

const maybeFormatter = " (mb)";
const accepted = new Set();
const maybe = new Set();
const notComing = new Set();
const didNotSignUp = new Set();;

let acceptedAmount;
let maybeAmount;
let notComingAmount;

let squads = [];

const generateButton = document.querySelector("button");
generateButton.addEventListener("click", () => {
  squads = [];
  factionBase.forEach(name => {
    didNotSignUp.add(name);
  });
  const textarea = document.querySelector("textarea");
  const list = textarea.value.split("\n");

  let fillingList = accepted;

  for (let i = 0; i < list.length; i++) {
    if ((/.*Accepted.*/gmi).test(list[i])) {
      fillingList = accepted;
      continue;
    } else if ((/.*Tentative.*/gmi).test(list[i])) {
      fillingList = maybe;
      continue;
    } else if ((/.*Declined.*/gmi).test(list[i])) {
      fillingList = notComing;
      continue;
    }

    didNotSignUp.delete(list[i]);
    fillingList.add(list[i]);
  }

  acceptedAmount = accepted.size;
  maybeAmount = maybe.size;
  notComingAmount = notComing.size;

  textarea.value = "";
  manipulateData();
  fillSquadsWithClerics();
  fillSquadsWithMystics();
  fillSquadsWithBlademasters();

  fillEmptySquad();
  createTable();
})

function fillEmptySquad() {
  squads.forEach(squad => {
    while (squad.length < 10) {
      squad.push(" ");
    }
  })
}

function manipulateData() {
  concreteSquads.forEach(squad => {
    const newSquad = [];
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
        newSquad.push(format(name));
      } else {
        newSquad.push(name);
      }
    })

    squads.push(newSquad);
  })
}

function format(name) {
  return name + " (mb)";
}

export { accepted, maybe, notComing, didNotSignUp, acceptedAmount, maybeAmount, notComingAmount, squads, maybeFormatter, format };