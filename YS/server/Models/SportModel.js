/**
 * Auteur : YAO
 */

const mongoose = require("mongoose");

// Définition du schéma de chaque sport
const SportSchema = new mongoose.Schema({
    geo_point_2d: {
        lon: { type: Number },
        lat: { type: Number }
    },
    name: { type: String, default: null },
    sport: { type: String },
    leisure: { type: String },
    access: { type: String, default: null },
    fee: { type: String, default: null },
    indoor: { type: Boolean, default: null },
    opening_hours_human: { type: String, default: null },
    wheelchair: { type: Boolean, default: null },
    commune: { type: String },
    code_commune: { type: String },
    departement: { type: String },
    code_departement: { type: String },
    region: { type: String },
    code_region: { type: String },
    site_web: { type: String, default: null },
    telephone: { type: String, default: null },
    email: { type: String, default: null },
    note: { type: String, default: null },
    osm_edit: { type: String },
    wikipedia: { type: String, default: null },
    wikidata: { type: String, default: null },
    osm_id: { type: String },
    wikipedia_id: { type: String, default: null },
    wikidata_id: { type: String, default: null }
});

// Création du modèle pour chaque sport avec un nom de collection spécifique
const createSportModel = (sportName) => {
    return mongoose.model(sportName, SportSchema);
};

module.exports = createSportModel;
