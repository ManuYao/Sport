// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Import des données sportives
const APIBasketball = require('./APISportBasket');
const APIFitness = require('./APISportFiteness');
const APINatation = require('./APISportNation');
const APISkateboard = require('./APISportSkate');
const APISprint = require('./APISportSprint');
const createSportModel = require('./models/SportModel');

// Configuration des variables d'environnement
const PORT = process.env.PORT || 225;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ysport';
const NODE_ENV = process.env.NODE_ENV || 'development';

// Création de l'application Express
const app = express();

// Middleware de base
app.use(cors());
app.use(express.json());
app.use(morgan('combined')); // Logging

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes par fenêtre
  message: 'Trop de requêtes depuis cette IP, veuillez réessayer plus tard.'
});
app.use('/api/', limiter);

// Documentation Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API YSport',
      version: '1.0.0',
      description: 'Documentation de l\'API YSport'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Serveur de développement'
      }
    ]
  },
  apis: ['./index.js', './routes/swagger.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware de validation des sports
const validateSport = (req, res, next) => {
  const validSports = ['Fitness', 'Basketball', 'Natation', 'Skateboard', 'Sprint'];
  const sport = req.params.filter;
  
  if (!validSports.includes(sport)) {
    return res.status(400).json({
      error: 'Sport invalide',
      message: `Le sport doit être l'un des suivants: ${validSports.join(', ')}`
    });
  }
  next();
};

// Middleware de gestion des erreurs
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      stack: NODE_ENV === 'development' ? err.stack : undefined
    }
  });
};

// Fonction de connexion à MongoDB avec retry
const connectWithRetry = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('✅ Connexion à MongoDB établie');
      return true;
    } catch (err) {
      console.error(`❌ Tentative ${i + 1}/${retries} échouée:`, err.message);
      if (i === retries - 1) throw err;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

// Fonction d'injection des données sportives
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
    throw error;
  }
};

// Routes
// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    uptime: process.uptime(),
    environment: NODE_ENV
  });
});

// Route principale pour récupérer les sports avec pagination
app.get('/sports/:filter', validateSport, async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const Sport = createSportModel(req.params.filter);
    const [sports, total] = await Promise.all([
      Sport.find()
        .skip(skip)
        .limit(limit)
        .select('-__v'),
      Sport.countDocuments()
    ]);

    res.json({
      data: sports,
      pagination: {
        currentPage: page,
        pageSize: limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
});

// Route pour Fitness (pour compatibilité)
app.get('/Fitness', async (req, res, next) => {
  try {
    const Sport = createSportModel('Fitness');
    const sports = await Sport.find().select('-__v');
    res.json(sports);
  } catch (error) {
    next(error);
  }
});

// Démarrage de l'application
const startServer = async () => {
  try {
    await connectWithRetry();
    
    // Injection des données
    await Promise.all([
      injectSports(APIFitness, 'Fitness'),
      injectSports(APIBasketball, 'Basketball'),
      injectSports(APINatation, 'Natation'),
      injectSports(APISkateboard, 'Skateboard'),
      injectSports(APISprint, 'Sprint')
    ]);

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`✅ Serveur démarré sur le port ${PORT}`);
      console.log(`📚 Documentation API disponible sur http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('❌ Erreur au démarrage:', error);
    process.exit(1);
  }
};

startServer();

// Gestion gracieuse de l'arrêt
process.on('SIGTERM', () => {
  console.log('👋 Signal SIGTERM reçu. Arrêt gracieux...');
  mongoose.connection.close();
  process.exit(0);
});

module.exports = app; // Pour les tests