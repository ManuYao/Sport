const express = require("express");
const mongoose = require("mongoose");
const APIBasketball = require("./APISportBasket");
const APIFitness = require("./APISportFiteness");
const APINatation = require("./APISportNation");
const APISkateboard = require("./APISportSkate");
const APISprint = require("./APISportSprint");

const app = express();

app.use(express.json());

// Connexion à la base de données
mongoose.connect("mongodb://127.0.0.1:27017/ysport", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connexion à la base de données réussie');
    // Injection des sports dans la base de données
    const Sport = require("./models/SportModel");

    const injectSports = async (sports, sportName) => {
        try {
            for (const sport of sports) {
                const wheelchair = sport.wheelchair === "limited" ? true : false;
                await Sport.create({ ...sport, wheelchair });
                console.log(`${sportName} injecté`);
            }
            console.log("Injection terminée")
            await new Promise((resolve) => setTimeout(resolve, 5000));
        } catch (error) {
            console.error(`Une erreur est survenue lors de l'injection des sports ${sportName}: `, error);
        }
    };

    injectSports(APIFitness, "Fitness");
    injectSports(APIBasketball, "Basketball");
    injectSports(APINatation, "Natation");
    injectSports(APISkateboard, "Skateboard");
    injectSports(APISprint, "Sprint");
}).catch((error) => {
    console.error('Erreur lors de la connexion à la base de données 🟠 :', error);
});

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
