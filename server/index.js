require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const validateEnv = require('./config/validateEnv');

const APIBasketball = require("./APISportBasket");
const APIFitness = require("./APISportFiteness");
const APINatation = require("./APISportNation");
const APISkateboard = require("./APISportSkate");
const APISprint = require("./APISportSprint");
const createSportModel = require("./models/SportModel");

// Valider les variables d'environnement
validateEnv();

const app = express();

// Middleware de base
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Configuration Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API YSport',
            version: process.env.API_VERSION || 'v0.2.8 |🚀',
            description: 'Documentation de l\'API YSport'
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 225}`,
                description: process.env.NODE_ENV === 'production' ? 'Production' : 'Développement'
            }
        ]
    },
    apis: ['./routes/swagger.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ysport", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('✅ Connexion à MongoDB réussie');
    
    // Fonction d'injection des sports
    const injectSports = async (sports, sportName) => {
        try {
            const Sport = createSportModel(sportName);
            const existingSports = await Sport.find();
            
            if (existingSports.length === 0) {
                for (const sport of sports) {
                    const wheelchair = sport.wheelchair === "limited";
                    await Sport.create({ ...sport, wheelchair });
                    console.log(`✅ ${sportName} injecté`);
                }
                console.log(`✅ Injection ${sportName} terminée`);
            } else {
                console.log(`ℹ️ Les sports ${sportName} existent déjà`);
            }
        } catch (error) {
            console.error(`❌ Erreur d'injection ${sportName}:`, error);
        }
    };

    await Promise.all([
        injectSports(APIFitness, "Fitness"),
        injectSports(APIBasketball, "Basketball"),
        injectSports(APINatation, "Natation"),
        injectSports(APISkateboard, "Skateboard"),
        injectSports(APISprint, "Sprint")
    ]);

}).catch((error) => {
    console.error('❌ Erreur MongoDB:', error);
});

// Routes
app.get("/health", (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

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

app.get("/Fitness", async (req, res) => {
    try {
        const Sport = createSportModel("Fitness");
        const sports = await Sport.find();
        res.json(sports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Démarrage du serveur
const PORT = process.env.PORT || 225;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
    console.log(`📚 Documentation API disponible sur http://localhost:${PORT}/api-docs`);
});