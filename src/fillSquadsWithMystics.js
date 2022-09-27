import { mystics } from "./squadsData";
import { accepted, maybe, squads, maybeFormatter } from "./index";

function fillSquadsWithMystics() {
  squads.forEach(squad => {
    if (squad.size < 10 && !hasMystic(squad)) {
      addRandomMystic(squad);
    }
  })
}

function hasMystic(squad) {
  for (let name of squad) {
    if (mystics.has(name)) {
      return true;
    }
  }

  return false;
}

function addRandomMystic(squad) {
  let mystic = getMysticFromAccepted();
  if (mystic === null) {
    mystic = getMysticFromMaybe();
    mystic = mystic !== null ? maybeFormatter(mystic) : null;
  }

  if (mystic !== null) {
    squad.add(mystic);
  }
}

function getMysticFromAccepted() {
  for (let name of accepted) {
    if (mystics.has(name)) {
      accepted.delete(name);
      return name;
    }
  }

  return null;
}

function getMysticFromMaybe() {
  for (let name of maybe) {
    if (mystics.has(name)) {
      maybe.delete(name);
      return name;
    }
  }

  return null;
}

export default fillSquadsWithMystics;