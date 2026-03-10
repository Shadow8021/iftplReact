// backend/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes API
const galerieRouter = require('./routers/galerie.router')
const formationsRouter = require('./routers/formations.router')
app.use('/api/galerie', galerieRouter)
app.use('/api/formations', formationsRouter)

app.get("/", (req, res) => {
    res.send("Bonjour depuis le backend");
});


app.listen(PORT, () => {
    console.log(`Le serveur backend tourne sur le port ${PORT}`);
});