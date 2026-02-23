// backend/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bonjour depuis le backend");
});

app.get("/formations", (req, res) => {
    res.send("voici la liste des formations");
});


app.listen(PORT, () => {
    console.log(`Le serveur backend tourne sur le port ${PORT}`);
});