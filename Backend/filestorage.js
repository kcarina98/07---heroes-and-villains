import fs from "fs/promises";
import fsystem from "fs";
const DB = "storage";
import { v4 } from "uuid";

export function setup() {
  fs.access(`./${DB}/`)
    .then((data) => console.log("gibts schon"))
    .catch(() => fs.mkdir(`./${DB}`));
}

// Als Parameter übergeben wir ein Object welche die Properties unseres Characters erhält
export function saveCharacter(character) {
  character.id = v4();
  fs.writeFile(`./${DB}/${character.id}`, JSON.stringify(character));
}

// lese alle Dateien im Ordner Storage ein und gebe uns diese als array mit objecten zurück
export function getAll() {
  return fs.readdir(`./${DB}`).then((files) => {
    const arr = [];

    for (const file of files) {
      arr.push(JSON.parse(fsystem.readFileSync(`./${DB}/${file}`)));
    }
    return arr;
  });
}

// wir löschen eine Datein anhand der id, die ja auch gleichzeitig der Dateinname ist
export function deleteCharacter(id) {
  return fs.rm(`./${DB}/${id}`);
}
