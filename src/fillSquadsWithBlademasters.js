import { blademasters } from "./squadsData";
import { accepted, maybe, squads, format } from "./index";

function fillSquadsWithBlademasters() {
  squads.forEach(squad => {
    if (squad.size < 10 && !hasBlademaster(squad)) {
      addRandomBlademaster(squad);
    }
  })
}

function hasBlademaster(squad) {
  for (let name of squad.values()) {
    if (blademasters.has(name)) {
      return true;
    }
  }

  return false;
}

function addRandomBlademaster(squad) {
  let blademaster = getBlademasterFromAccepted();
  if (blademaster === null) {
    blademaster = getBlademasterFromMaybe();
    blademaster = blademaster !== null ? format(blademaster) : null;
  }

  if (blademaster !== null) {
    squad.push(blademaster);
  }
}

function getBlademasterFromAccepted() {
  for (let name of accepted) {
    if (blademasters.has(name)) {
      accepted.delete(name);
      return name;
    }
  }

  return null;
}

function getBlademasterFromMaybe() {
  for (let name of maybe) {
    if (blademasters.has(name)) {
      maybe.delete(name);
      return name;
    }
  }

  return null;
}

export default fillSquadsWithBlademasters;