/**
 * Auteur : YAO
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const APIBasketball = require("./APISportBasket");
const APIFitness = require("./APISportFiteness");
const APINatation = require("./APISportNation");
const APISkateboard = require("./APISportSkate");
const APISprint = require("./APISportSprint");
const createSportModel = require("./models/SportModel");

const app = express();
app.use(cors());

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
                    // Injecte le sport dans la base de données               
                    await Sport.create({ ...sport, wheelchair });
                    console.log(`${sportName} injecté`); 
                }
                console.log("Injection terminée soon:${sportName} 🟢");
            } else {
                console.log('-----------------------------------') 
                console.log(" ")
                console.log(`Les sports ${sportName} existent déjà dans la base de données 🟢`);
                console.log(" ")
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

//Route pour récupérer les sports
app.get("/sports/:filter", async (req, res) => {
    const filter = req.params.filter;
    try {
        const Sport = createSportModel(filter);
        const sports = await Sport.find();
        res.json(sports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Route pour récupérer Fiteness 
app.get("/Fitness", async (req, res) => {
    try {
        const Sport = createSportModel("Fitness");
        const sports = await Sport.find();
        res.json(sports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(225, () => {
    console.log("Serveur démarré sur le port 225");
});
