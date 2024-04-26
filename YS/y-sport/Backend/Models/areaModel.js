//Model Lieu sportif
const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    log: Number,
    lat: Number,
    name: String,
    sport: String,
    leisure: String,
    access: String,
    fee: String,
    indoor: String,
    opening_hours_human: String,
    wheelchair: String,
    commune: String,
    code_commune: String,
    departement: String,
    code_departement: String,
    region: String,
    code_region: String,
    site_web: String,
    telephone: String,
    email: String,
    note: String,
    osm_edit: String,
    wikipedia: String,
    wikidata: String,
    osm_id: String,
    wikipedia_id: String,
    wikidata_id: String,
})

const B = mongoose.model('basketball', areaSchema);
const Areaa = mongoose.model('fitness', areaSchema);
const Areaaa = mongoose.model('natation', areaSchema);
const Areaaaa = mongoose.model('Skate', areaSchema);
const Areaaaaa = mongoose.model('Sprint', areaSchema);

module.exports = Area;