const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dataFitness = require('./Import/APISportFiteness.json');
const dataBasket = require('./Import/APISportBasket.json');
const dataNatation = require('./Import/APISportNation.json');
const dataSkate = require('./Import/APISportSkate.json');
const dataSprint = require('./Import/APISportSprint.json');

const B = require('./Models/areaModel');

const app = express();

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/y-sport', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connexion réussie à MongoDB');
        // Une fois connecté à la base de données, insérez les données depuis les fichiers JSON
        insertData();
    })
    .catch((err) => {
        console.log('Erreur de Connexion', err);
    });

// Cors
app.use(cors());

// Permettre d'intéragir avec l'API en JSON et en URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes pour récupérer les données JSON
app.get('/api/basket', (req, res) => {
    res.json(dataFitness);
});
app.get('/api/fitness', (req, res) => {
    res.json(dataFitness);
});
app.get('/api/natation', (req, res) => {
    res.json(dataNatation);
});
app.get('/api/skate', (req, res) => {
    res.json(dataSkate);
});
app.get('/api/sprint', (req, res) => {
    res.json(dataSprint);
});

// Envoie des données vers la base de données MongoDB y-sport
async function insertData() {
    try {
        // Insérez les données pour chaque type de sport
        await insertDataIntoDatabase(dataBasket);
        await insertDataIntoDatabase(dataFitness);
        await insertDataIntoDatabase(dataNatation);
        await insertDataIntoDatabase(dataSkate);
        await insertDataIntoDatabase(dataSprint);
        console.log('Données insérées avec succès dans la base de données.');
    } catch (error) {
        console.error('Erreur lors de l\'insertion des données :', error);
    }
}

// Fonction pour insérer les données dans la base de données
async function insertDataIntoDatabase(data) {
    // Utilisez la méthode create de votre modèle Area
    await B.create(data);
}

// Serveur sur le port 225
app.listen(225, () => {
    console.log('Le serveur est en cours d\'exécution sur le port 225');
});
