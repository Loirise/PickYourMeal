const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    group: {
        type: String,
        enum: ['Vegetables & Greens','Fruits','Berries','Nuts & Seeds',
        'Dairy & Eggs','Meats','Fish','Seafood','Grains','Desserts','Beverages'],
        required: true
    }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;