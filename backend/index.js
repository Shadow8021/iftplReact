// backend/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes API
function banner() {
    console.log('/api/galerie');
    console.log('/api/formations');
    console.log('/api/commentaire');
    console.log('/api/actualites');
    console.log('/api/auth/login');
    console.log('/api/auth/me');
    console.log('/api/auth/logout');
}
const authRouter = require('./routers/auth.router')
const galerieRouter = require('./routers/galerie.router')
const formationsRouter = require('./routers/formations.router')
const temoignageRouter = require('./routers/temoignage.router')
const actualitesRouter = require('./routers/actualites.router')

app.use('/api/auth', authRouter)
app.use('/api/commentaire', temoignageRouter)
app.use('/api/galerie', galerieRouter)
app.use('/api/formations', formationsRouter)
app.use('/api/actualites', actualitesRouter)

app.get("/", (req, res) => {
    res.send("server is running on localhost:" + PORT);
});

app.listen(PORT, () => {
    console.log(`Le serveur backend tourne sur le port ${PORT}`);
    banner()

});