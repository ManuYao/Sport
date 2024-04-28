/**
 * Auteur : YAO
 */

const express = require("express");
const mongoose = require("mongoose");
const APIBasketball = require("./APISportBasket");
const APIFitness = require("./APISportFiteness");
const APINatation = require("./APISportNation");
const APISkateboard = require("./APISportSkate");
const APISprint = require("./APISportSprint");
const createSportModel = require("./models/SportModel");

const app = express();

app.use(express.json());

// Connexion à la base de données
mongoose.connect("mongodb://127.0.0.1:27017/ysport", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Connexion à la base de données réussie');
    // Injection des sports dans la base de données

    const injectSports = async (sports, sportName) => {
        try {
            // Crée un modèle spécifique pour chaque sport
            const Sport = createSportModel(sportName);
            const existingSports = await Sport.find();
            if (existingSports.length === 0) {
                for (const sport of sports) {
                    // Convertit la valeur de wheelchair en boolean
                    const wheelchair = sport.wheelchair === "limited" ? true : false;
                    await Sport.create({ ...sport, wheelchair });
                    console.log(`${sportName} injecté`);
                }
                console.log("Injection terminée");
            } else {
                console.log(`Les sports ${sportName} existent déjà dans la base de données`);
            }
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

// // Récupération de tous les sports 🚧
// app.get("/sports", async (req, res) => {
//     const sports = await Promise.all([
//         APIFitness.find(),
//         APIBasketball.find(),
//         APINatation.find(),
//         APISkateboard.find(),
//         APISprint.find(),
//     ]);

//     res.json(sports.flat());
// });

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
