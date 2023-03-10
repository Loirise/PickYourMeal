require('dotenv').config();

const mongoose = require('mongoose');
const Ingredient = require('./models/ingredient');

const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/pickYourMeal'

mongoose.connect(dbUrl)
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log("ERROR!!! CONNECTION FAILED!!!")
        console.log(err)
    })

/* 13 Vegetables & Greens */
const ingr1 = [
    {
        name: 'pepper',
        group: 'Vegetables & Greens'
    },
    {
        name: 'broccoli',
        group: 'Vegetables & Greens'
    },
    {
        name: 'cabbage',
        group: 'Vegetables & Greens'
    },
    {
        name: 'carrot',
        group: 'Vegetables & Greens'
    },
    {
        name: 'cauliflower',
        group: 'Vegetables & Greens'
    },
    {
        name: 'celery',
        group: 'Vegetables & Greens'
    },
    {
        name: 'cucumber',
        group: 'Vegetables & Greens'
    },
    {
        name: 'onion',
        group: 'Vegetables & Greens'
    },
    {
        name: 'parsnip',
        group: 'Vegetables & Greens'
    },
    {
        name: 'potato',
        group: 'Vegetables & Greens'
    },
    {
        name: 'radish',
        group: 'Vegetables & Greens'
    },
    {
        name: 'scallion',
        group: 'Vegetables & Greens'
    },
    {
        name: 'tomato',
        group: 'Vegetables & Greens'
    },
    {
        name: 'turnip',
        group: 'Vegetables & Greens'
    }
]
/* 20 Fruits */
const ingr2 = [
    {
        name: 'apple',
        group: 'Fruits'
    },
    {
        name: 'apricot',
        group: 'Fruits'
    },
    {
        name: 'banana',
        group: 'Fruits'
    },
    {
        name: 'coconut',
        group: 'Fruits'
    },
    {
        name: 'dragon fruit',
        group: 'Fruits'
    },
    {
        name: 'grapes',
        group: 'Fruits'
    },
    {
        name: 'grapefruit',
        group: 'Fruits'
    },
    {
        name: 'kiwi',
        group: 'Fruits'
    },
    {
        name: 'lemon',
        group: 'Fruits'
    },
    {
        name: 'lime',
        group: 'Fruits'
    },
    {
        name: 'mango',
        group: 'Fruits'
    },
    {
        name: 'melon',
        group: 'Fruits'
    },
    {
        name: 'nectarine',
        group: 'Fruits'
    },
    {
        name: 'orange',
        group: 'Fruits'
    },
    {
        name: 'passion fruit',
        group: 'Fruits'
    },
    {
        name: 'peach',
        group: 'Fruits'
    },
    {
        name: 'pear',
        group: 'Fruits'
    },
    {
        name: 'pineapple',
        group: 'Fruits'
    },
    {
        name: 'plums',
        group: 'Fruits'
    },
    {
        name: 'pomegranate',
        group: 'Fruits'
    },
    {
        name: 'watermelon',
        group: 'Fruits'
    }
]
/* 8 Berries */
const ingr3 = [
    {
        name: 'blackberry',
        group: 'Berries'
    },
    {
        name: 'blueberry',
        group: 'Berries'
    },
    {
        name: 'cherry',
        group: 'Berries'
    },
    {
        name: 'cranberry',
        group: 'Berries'
    },
    {
        name: 'elderberry',
        group: 'Berries'
    },
    {
        name: 'dewberry',
        group: 'Berries'
    },
    {
        name: 'strawberry',
        group: 'Berries'
    },
    {
        name: 'raspberry',
        group: 'Berries'
    }
]
/* 9 Nuts & Seeds */
const ingr4 = [
    {
        name: 'almonds',
        group: 'Nuts & Seeds'
    },
    {
        name: 'brazil nut',
        group: 'Nuts & Seeds'
    },
    {
        name: 'chia',
        group: 'Nuts & Seeds'
    },
    {
        name: 'hazelnut',
        group: 'Nuts & Seeds'
    },
    {
        name: 'peanut',
        group: 'Nuts & Seeds'
    },
    {
        name: 'pistachio',
        group: 'Nuts & Seeds'
    },
    {
        name: 'walnuts',
        group: 'Nuts & Seeds'
    },
    {
        name: 'sesame seeds',
        group: 'Nuts & Seeds'
    },
    {
        name: 'pumpkin seeds',
        group: 'Nuts & Seeds'
    }
]
/* 9 Dairy & Eggs */
const ingr5 = [
    {
        name: 'butter',
        group: 'Dairy & Eggs'
    },
    {
        name: 'buttermilk',
        group: 'Dairy & Eggs'
    },
    {
        name: 'greek yogurt',
        group: 'Dairy & Eggs'
    },
    {
        name: 'egg',
        group: 'Dairy & Eggs'
    },
    {
        name: 'kefir',
        group: 'Dairy & Eggs'
    },
    {
        name: 'heavy cream',
        group: 'Dairy & Eggs'
    },
    {
        name: 'sour cream',
        group: 'Dairy & Eggs'
    },
    {
        name: 'milk',
        group: 'Dairy & Eggs'
    },
    {
        name: 'yogurt',
        group: 'Dairy & Eggs'
    }
]
/* 10 Meats */
const ingr6 = [
    {
        name: 'pork',
        group: 'Meats'
    },
    {
        name: 'beef',
        group: 'Meats'
    },
    {
        name: 'chicken',
        group: 'Meats'
    },
    {
        name: 'turkey',
        group: 'Meats'
    },
    {
        name: 'duck',
        group: 'Meats'
    },
    {
        name: 'goat',
        group: 'Meats'
    },
    {
        name: 'sheep',
        group: 'Meats'
    },
    {
        name: 'bison',
        group: 'Meats'
    },
    {
        name: 'rabbit',
        group: 'Meats'
    },
    {
        name: 'frog',
        group: 'Meats'
    }
]
/* 10 Fish */
const ingr7 = [
    {
        name: 'tuna',
        group: 'Fish'
    },
    {
        name: 'salmon',
        group: 'Fish'
    },
    {
        name: 'catfish',
        group: 'Fish'
    },
    {
        name: 'cod',
        group: 'Fish'
    },
    {
        name: 'pollock',
        group: 'Fish'
    },
    {
        name: 'trout',
        group: 'Fish'
    },
    {
        name: 'bass',
        group: 'Fish'
    },
    {
        name: 'sardines',
        group: 'Fish'
    },
    {
        name: 'halibut',
        group: 'Fish'
    },
    {
        name: 'mackerel',
        group: 'Fish'
    }
]
/* 6 Seafood */
const ingr8 = [
    {
        name: 'shrimp',
        group: 'Seafood'
    },
    {
        name: 'crab',
        group: 'Seafood'
    },
    {
        name: 'clams',
        group: 'Seafood'
    },
    {
        name: 'oysters',
        group: 'Seafood'
    },
    {
        name: 'lobster',
        group: 'Seafood'
    },
    {
        name: 'caviar',
        group: 'Seafood'
    }
]
/* 6 Grains */
const ingr9 = [
    {
        name: 'wheat',
        group: 'Grains'
    },
    {
        name: 'rice',
        group: 'Grains'
    },
    {
        name: 'barley',
        group: 'Grains'
    },
    {
        name: 'oats',
        group: 'Grains'
    },
    {
        name: 'quinoa',
        group: 'Grains'
    },
    {
        name: 'rye',
        group: 'Grains'
    }
]
/* 5 Desserts */
const ingr10 = [
    {
        name: 'candy',
        group: 'Desserts'
    },
    {
        name: 'chocolate',
        group: 'Desserts'
    },
    {
        name: 'cookies',
        group: 'Desserts'
    },
    {
        name: 'gummies',
        group: 'Desserts'
    },
    {
        name: 'licorice',
        group: 'Desserts'
    }
]
/* 10 Beverages */
const ingr11 = [
    {
        name: 'water',
        group: 'Beverages'
    },
    {
        name: 'coca cola',
        group: 'Beverages'
    },
    {
        name: 'pepsi',
        group: 'Beverages'
    },
    {
        name: '7up',
        group: 'Beverages'
    },
    {
        name: 'sprite',
        group: 'Beverages'
    },
    {
        name: 'mirinda',
        group: 'Beverages'
    },
    {
        name: 'beer',
        group: 'Beverages'
    },
    {
        name: 'wine',
        group: 'Beverages'
    },
    {
        name: 'spirits',
        group: 'Beverages'
    },
    {
        name: 'energy drink',
        group: 'Beverages'
    },
]


/* could use loop */
Ingredient.insertMany(ingr1);
Ingredient.insertMany(ingr2);
Ingredient.insertMany(ingr3);
Ingredient.insertMany(ingr4);
Ingredient.insertMany(ingr5);
Ingredient.insertMany(ingr6);
Ingredient.insertMany(ingr7);
Ingredient.insertMany(ingr8);
Ingredient.insertMany(ingr9);
Ingredient.insertMany(ingr10);
Ingredient.insertMany(ingr11);