const mongoose = require('mongoose');
const Ingridient = require('./models/ingridient');

mongoose.connect('mongodb://127.0.0.1:27017/pickYourMeal')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log("ERROR!!! CONNECTION FAILED!!!")
        console.log(err)
    })

const seedPantryEssentialIngridients = [
    {
        name: 'milk',
        group: 'Pantry Essentials'
    },
    {
        name: 'egg',
        group: 'Pantry Essentials'
    },
    {
        name: 'sugar',
        group: 'Pantry Essentials'
    },
    {
        name: 'butter',
        group: 'Pantry Essentials'
    },
    {
        name: 'flour',
        group: 'Pantry Essentials'
    }
];

const seedVegsGreensIngridients = [
    {
        name: 'garlic',
        group: 'Vegetables & Greens'
    },
    {
        name: 'onion',
        group: 'Vegetables & Greens'
    },
    {
        name: 'carrot',
        group: 'Vegetables & Greens'
    },
    {
        name: 'tomato',
        group: 'Vegetables & Greens'
    },
    {
        name: 'potato',
        group: 'Vegetables & Greens'
    }
];

const seedFruitsIngridients = [
    {
        name: 'apple',
        group: 'Fruits'
    },
    {
        name: 'orange',
        group: 'Fruits'
    },
    {
        name: 'banana',
        group: 'Fruits'
    },
    {
        name: 'peach',
        group: 'Fruits'
    },
    {
        name: 'lemon',
        group: 'Fruits'
    }
];

const seedMeatIngridients = [
    {
        name: 'chicken',
        group: 'Meat'
    },
    {
        name: 'beef',
        group: 'Meat'
    },
    {
        name: 'pork',
        group: 'Meat'
    },
    {
        name: 'lamb',
        group: 'Meat'
    },
    {
        name: 'turkey',
        group: 'Meat'
    }
];

const seedFishIngridients = [
    {
        name: 'salmon',
        group: 'Fish'
    },
    {
        name: 'mackerel',
        group: 'Fish'
    },
    {
        name: 'tuna',
        group: 'Fish'
    },
    {
        name: 'cod',
        group: 'Fish'
    },
    {
        name: 'trout',
        group: 'Fish'
    }
];

const seedDiaryIngridients = [
    {
        name: 'heavy cream',
        group: 'Diary'
    },
    {
        name: 'sour cream',
        group: 'Diary'
    },
    {
        name: 'yogurt',
        group: 'Diary'
    },
    {
        name: 'buttermilk',
        group: 'Diary'
    },
    {
        name: 'greek yogurt',
        group: 'Diary'
    }
];

const seedBakingIngridients = [
    {
        name: 'flour',
        group: 'Baking'
    },
    {
        name: 'baking powder',
        group: 'Baking'
    },
    {
        name: 'baking soda',
        group: 'Baking'
    },
    {
        name: 'cornstarch',
        group: 'Baking'
    },
    {
        name: 'yeast',
        group: 'Baking'
    }
];

const allSeedTngridients = [
    seedPantryEssentialIngridients,
    seedVegsGreensIngridients,
    seedFruitsIngridients,
    seedMeatIngridients,
    seedFishIngridients,
    seedDiaryIngridients,
    seedBakingIngridients
];

Ingridient.insertMany(seedPantryEssentialIngridients);

Ingridient.insertMany(seedVegsGreensIngridients);

Ingridient.insertMany(seedFruitsIngridients);

Ingridient.insertMany(seedMeatIngridients);

Ingridient.insertMany(seedFishIngridients);

Ingridient.insertMany(seedDiaryIngridients);

Ingridient.insertMany(seedBakingIngridients);