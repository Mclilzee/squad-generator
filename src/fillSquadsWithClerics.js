import { clerics } from "./squadsData";
import { accepted, maybe, squads, format, maybeFormatter} from "./index";

function fillSquadsWithClerics() {
  squads.forEach(squad => {
    if (squad.length < 10 && !hasCleric(squad)) {
      addRandomCleric(squad);
    }
  })
}

function hasCleric(squad) {
  for (let name of squad) {
    name = name.replaceAll(maybeFormatter, "");
    if (clerics.has(name)) {
      return true;
    }
  }

  return false;
}

function addRandomCleric(squad) {
  let cleric = getClericFromAccepted();
  if (cleric === null) {
    cleric = getClericFromMaybe();
    cleric = cleric !== null ? format(cleric) : null;
  }

  if (cleric !== null) {
    squad.push(cleric);
  }
}

function getClericFromAccepted() {
  for (let name of accepted) {
    if (clerics.has(name)) {
      accepted.delete(name);
      return name;
    }
  }

  return null;
}

function getClericFromMaybe() {
  for (let name of maybe) {
    if (clerics.has(name)) {
      maybe.delete(name);
      return name;
    }
  }

  return null;
}

export default fillSquadsWithClerics;