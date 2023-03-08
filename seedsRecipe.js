const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

mongoose.connect('mongodb://127.0.0.1:27017/pickYourMeal')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log("ERROR!!! CONNECTION FAILED!!!")
        console.log(err)
    })

const seedRecipes = [
    {
        title: 'milk+egg+sugar',
        ingridients: ['milk', 'egg', 'sugar'],
        preparation: 'mix everything',
        desc: 'chaos cooking'
    },
    {
        title: 'egg+sugar+flour',
        ingridients: ['flour', 'egg', 'sugar'],
        preparation: 'mix everything!!',
        desc: 'cake'
    },
    {
        title: 'apple+orange',
        ingridients: ['apple', 'orange'],
        preparation: 'cut into slices',
        desc: 'fruits!'
    },
    {
        title: 'chicken+beef+pork+turkey',
        ingridients: ['beef', 'chicken', 'pork', 'turkey'],
        preparation: 'cut into pieces, cook',
        desc: 'meat plate wtf'
    },
];

Recipe.insertMany(seedRecipes);