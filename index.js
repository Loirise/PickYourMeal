require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');

const Ingredient = require('./models/ingredient');
const Recipe = require('./models/recipe');

const db = mongoose.connection;
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/pickYourMeal'
mongoose.set('strictQuery', false);
mongoose.connect(dbUrl)
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});

app.set('view enginge', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/public', express.static('public'));


app.get('/', async (req, res) => {
    res.render('homeView.ejs')
})

app.get('/helpMe', (req, res) => {
    res.render('helpMeView.ejs')
})

app.get('/pickMyMeal', async (req, res) => {
    const allRecipes = await Recipe.find({})
    const allIngredients = await Ingredient.find({})
    const ingrGroups = groupBy(allIngredients, 'group')
    res.render('mealPickerView.ejs', {ingrGroups, allIngredients, allRecipes})
})

app.get('/allRecipes', async (req, res) => {
    const allRecipes = await Recipe.find({})
    res.render('allRecipesView.ejs', { allRecipes })
})


app.use((req, res) => {
    res.status(404).render('404View.ejs')
})

app.listen(port, () => {
    console.log('LISTENING ON PORT 3000');
})


// taken from the internet
const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };
