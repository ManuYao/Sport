//Crée un model basket
const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({});

module.exports = mongoose.model("Basket", BasketSchema);
