const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    ingredientServings: {
        type: Object,
        required: true
    },
    preparation: {
        type: Array,
        required: true
    },
    mealImg: {
        type: String,
        required: true
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;