import express from "express";
import {
  deleteCharacter,
  getAll,
  saveCharacter,
  setup,
} from "./filestorage.js";
import cors from "cors";

const PORT = 9898;
const app = express();
app.use(cors());
app.use(express.json());
setup();

app.get("/api/characters", (req, res) => {
  getAll()
    .then((data) => res.json(data))
    .catch(() => res.status(500).end());
});

app.post("/api/characters", (req, res) => {
  const character = req.body;
  console.log(character);
  saveCharacter(character);
  res.end();
});

app.delete("/api/characters", (req, res) => {
  const id = req.body.id;
  console.log(id);
  deleteCharacter(id)
    .then(() => res.end())
    .catch((err) => res.status(500).end(err));
});

app.listen(PORT, () => console.log(PORT));
