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


const recipes1 = [
    {
        title: 'Fruit and Nut Bowl',
        ingredients: ['apple', 'banana', 'orange', 'blueberry', 'strawberry', 'almonds', 'walnuts'],
        ingredientServings: {
            'apple': '1 medium, sliced', 
            'banana': '1 medium, sliced', 
            'orange': '1 medium, sliced', 
            'blueberry': '1/2 cup', 
            'strawberry': '1/2 cup, sliced', 
            'almonds': '1/8 cup, sliced', 
            'walnuts': '1/8 cup, chopped'
        },
        preparation: [
            'Combine fruit and berries. Add nuts and toss gently. Enjoy!'
        ],
        mealImg: '/public/images/meals/fruitsandnuts.jpg'
    },
    {
        title: 'Poached Salmon',
        ingredients: ['salmon', 'onion','carrot','lemon'],
        ingredientServings: {
            'salmon': '4 to 6oz', 
            'onion': '1 medium, sliced',
            'carrot': '1 large, sliced',
            'lemon': '1, sliced'
        },
        preparation: [
            'Add the onion, carrots and lemon slices to a pot of boiling water. Reduce the heat and simmer for 5 minutes.',
            'Gently add the fillets. Cook fillets for 7 or 8 minutes.',
            'A bit more lemon juice drizzled over the fillets tastes great.',
            'Add one or two lemon slices to the top of the fillet before serving for great presentation.'
        ],
        mealImg: '/public/images/meals/poachedsalmon.jpg'
    },
    {
        title: 'Roast duck and vegetables',
        ingredients: ['duck', 'potato', 'carrot', 'parsnip'],
        ingredientServings: {
            'duck': '1 whole', 
            'water': '2 cups',
            'salt': '2 tsp',
            'pepper': '1 tsp', 
            'potato': '4 medium', 
            'carrot': '2 medium', 
            'parsnip': '2 small'
        },
        preparation: [
            'Preheat the oven to 425F/220C.',
            'Clean out the duck completely and remove any excess far around the neck etc. Prick the skin all over with a fork.',
            'Rub salt and pepper all over the ducks skin, particularly the breast.',
            'Turn the duck breast side up, then roast in the middle of the oven for 45 minutes.',
            'After the first 45min, carefully drain out the cavity into the baking pan and turn the duck over to be back up then put back in the oven.',
            'Peel and cut the potatoes and carrots into large chunks. After the duck has cooked around 20-30 minutes on the second side, carefully add the potatoes and carrots in the oven',
            'Once the duck has been in for 45 minutes on the second side, remove from the oven and turn again back to breast side up. Return to the oven for a final 45 minutes',
            'Peel the parsnip and cut into large chunks. Around 30 minutes before the end of cooking , carefully turn the potatoes and carrots in the bottom of the pan and add the parsnips.',
            'Take out duck and vegetables out of the oven, let duck rest for around 5-10minutes and keep the vegetables warm',
        ],
        mealImg: '/public/images/meals/roastedduck.jpg'
    },
    {
        title: 'Grilled lobster',
        ingredients: ['lobster','butter','lemon'],
        ingredientServings: {
            'lobster': '2, ~2pounds each', 
            'butter': '1/3 unsalted', 
            'lemon': '1, quartered'
        },
        preparation: [
            'In a large pot boil about 2 gallons of water.',
            'Add one live lobster, cover and cook for 3 minutes',
            'Remove lobster with tongs and return water to boiling',
            'Add 2nd lobster, cook for 3 minutes and remove with tongs',
            'Turn lobsters upside down and cut lengthwise from the tip of the tail through the head (you may need to use poultry sheers to cut the tail portion of the shell).',
            'Place lobster halves, shell side down, on a medium hot grill and baste with butter and sprinkle with salt and pepper.',
            'Cover grill and cook for about 8-9 minutes or until the meat in the thickest part of the tail turns opaque.',
            'Serve with melted butter in dunking bowls and lemon wedges.'
        ],
        mealImg: '/public/images/meals/grilledlobster.jpg'
    },
    {
        title: 'Wild Alaskan Cod in the Instant Pot',
        ingredients: ['cod', 'butter'],
        ingredientServings: {
            'cod': '2 filets', 
            'butter': '2 tbsp',
            'salt': '1/4 tsp',
            'ground pepper': '1/8 tsp'
        },
        preparation: [
            'Lay the trivet inside your Instant Pot. Pour in 1 C. water.',
            'Place a piece of aluminum foil on the trivet. Top with Cod filets. If you are using a larger filet, cut into 2-3 pieces.',
            'Season with salt/pepper & miscellaneous seasoning. Top with butter.',
            'Place the lid on the Instant Pot. Seal the valve.',
            'Push manual (high) and set the timer for 5 minutes (thawed) or, 9 minutes (frozen).',
            'Once it beeps, release the pressure manually. Enjoy!'
        ],
        mealImg: '/public/images/meals/instantpotcod.jpg'
    },
    {
        title: 'Hamburger & Cabbage Casserole',
        ingredients: ['beef', 'onion', 'celery', 'butter', 'cabbage'],
        ingredientServings: {
            'beef': '1 lb ground', 
            'onion': '1 large', 
            'celery': '1 cup, diced', 
            'butter': '1/4 cup', 
            'cabbage': '1 head'
        },
        preparation: [
            'Make patties using ground beef and layer onto bottom of casserole dish.',
            'Layer cabbage, onion, celery over top of patties.',
            'Slice butter over top, then add salt and pepper to taste.',
            'Pour water over mixture, cover with foil and bake at 350°F for 45 minutes to one hour, or until cabbage is tender.'
        ],
        mealImg: '/public/images/meals/hamburgercabbage.jpg'
    },
    {
        title: 'Old Fashioned Cod Fish Cakes',
        ingredients: ['cod', 'potato', 'onion', 'egg'],
        ingredientServings: {
            'cod': '1 pound', 
            'potato': '4 medium', 
            'onion': '1 medium', 
            'egg': '2 large'
        },
        preparation: [
            'Boil codfish until tender and flaky.',
            'Crumble in medium bowl; let cool.',
            'Boil potatoes and mash.',
            'Chop onion finely and add to cod fish.',
            'Add all other ingredients; mix thoroughly.',
            'Form into cakes and fry in hot oil until golden brown.',
            'Serve immediately.'
        ],
        mealImg: '/public/images/meals/codcakes.jpg'
    },
    {
        title: 'Pressure Cooker chicken',
        ingredients: ['chicken', 'lemon', 'tomato', 'broccoli'],
        ingredientServings: {
            'chicken': '3-4 boneless skinless breasts', 
            'lemon': '1', 
            'tomato': '2',
            'broccoli': '2 heads',
            'black pepper': '1 tsp',
            'water': '3/4 cup'
        },
        preparation: [
            'Place water in your pressure cooker.',
            'Cut the ends off the lemon and then cut it into slices. Place the slices in the water.',
            'Add pepper to water. Place chicken in the pot and put the lid on and lock it.',
            'Push the meat button and then add time button. You want the total cook time to 25 minutes.',
            'Allow to cook and when done release pressure (quick release).',
            'When pressure is out, remove chicken and lemons from pot. You can toss the lemons.',
            'Then using a fork shred the chicken.',
            'Place the steam rack/trivet in the pot. You can leave the water from the chicken in.',
            'Then add your broccoli on the steam rack/ trivet. Put the lid on and lock.',
            'Press the steam button (depending on your cooker you may need to add time) You want the total cook time to be 3 minutes.',
            'Add some of the cooked chicken and broccoli on a plate. Then dice your tomatoes and add some of those to the plate as well.',
            'Enjoy!'
        ],
        mealImg: '/public/images/meals/pressurechicken.jpg'
    },
    {
        title: 'Almond Baked Cod',
        ingredients: ['cod','almonds','butter','lemon','scallion'],
        ingredientServings: {
            'cod': '2 pounds',
            'almonds': '1/4 cup',
            'butter': '1/2 cup',
            'lemon': '1',
            'scallion': '1/4 cup',
            'salt': '1 tsp',
            'flour': '1/3 cup',
        },
        preparation: [
            'Cut fish into serving size pieces.',
            'Spray 12 x 8-inch ovenproof pan with non-stick spray.',
            'Coat fish with flour and salt mixture; place in single layer in pan.',
            'Pour butter, lemon juice and peel over fish; bake 20 to 25 minutes in 350℉ (180℃) oven.',
            'Sprinkle with slivered roasted almonds and chopped green onion.'
        ],
        mealImg: '/public/images/meals/almondbakedcod.jpg'
    },
    {
        title: 'Creamed Cod',
        ingredients: ['cod','butter','milk'],
        ingredientServings: {
            'cod': '2 pounds',
            'butter': '2 tbsp',
            'milk': '1 cup',
            'flour': '2 tbsp',
            'salt': '1/4 tsp',
            'pepper': '1/4 tsp'
        },
        preparation: [
            'Preheat oven to 350℉ (180℃).',
            'Butter aluminum foil. Place fish on the foil, dot with small knobs of butter and loosely wrap.',
            'Place foil packet of fish on a baking sheet and bake for 5 to 7 minutes until the cod is cooked through.',
            'Heat a saucepan over medium-high heat.',
            'Add butter, when sizzling add the flour and whisk in to make a roux.',
            'Whisking constantly, pour in the milk. Whisk to prevent the formation of lumps. Add the salt and black pepper to taste.',
            'Bring to the boil for 2 minutes to cook the flour and thicken the sauce. Remove from heat. Taste and adjust seasoning if needed.',
            'Place the fish in serving the appropriate baking dish and pour on the white sauce.',
            'Heat in oven until ready to serve.'
        ],
        mealImg: '/public/images/meals/creamedcod.jpg'
    }
]

const recipes2 = [
    {
        title: 'Grilled Cod',
        ingredients: ['cod','butter','lemon','scallion'],
        ingredientServings: {
            'cod': '2 pounds',
            'butter': '4 tbsp',
            'lemon': '1 large',
            'scallion': '3 tsp, chopped',
            'salt': '1/2 tsp',
            'garlic_powder': '1/2 tsp',
            'pepper': '1/4 tsp'
        },
        preparation: [
            'Prepare to grill over a hot fire. Clean and oil grill grates.',
            'Combine butter, lemon juice and onions in a small bowl. Whisk vigorously to combine and allow to rest on the counter while you prepare the fish.',
            'Pat the cod dry with paper towels, then rub with salt, garlic powder and black pepper.',
            'Place cod directly on oiled grates over a hot fire. Grill for 4-5 minutes per side, basting occasionally with butter and lemon mixture.',
            'If flare-ups occur, place the lid on the grill to cover with closed vents.',
            'Remove from grill when the fish begins to flake. If fully cooked, fish should not stick to the grill.',
            'Serve with any leftover basting liquid, and garnish with (optional) lemon slices and herbs.'
        ],
        mealImg: '/public/images/meals/grilledcod.jpg'
    },
    {
        title: 'Crispy duck & baked apples',
        ingredients: ['duck','apple'],
        ingredientServings: {
            'duck': '1 large',
            'apple': '4 medium'
        },
        preparation: [
            'Heat oven to 120C/fan 100C/gas ½. Pull any excess fat from the duck’s cavity and use a roasting fork or skewer to prick the skin of the duck all over – do this lightly as you don’t want to pierce the meat.',
            'Rub the duck generously inside and out with flaky sea salt, then lay, breast-side down, on a rack over a roasting tray.',
            'Roast the duck for 3 hrs, pricking again every now and then should you happen to pass by. While the duck is cooking, score a line gently around the middle of each apple and set aside (this stops them exploding when they cook).',
            'After 3 hrs, remove duck from the oven and turn the heat to 180C/fan 160C/gas 4. Sit the duck on a plate and carefully pour away most of the fat from the tin.',
            'Return the duck to the rack, right way up, and continue to roast for 30 mins. Put the apples in under the duck or around the side and roast for a final 30 mins. ',
            'By now you should have the crispiest duck and apples on the verge of collapse. Leave the duck to rest for 10 mins, then carve and serve with the apples.'
        ],
        mealImg: '/public/images/meals/duckandapples.jpg'
    },
    {
        title: 'Roasted Wild Duck',
        ingredients: ['duck','lemon','celery'],
        ingredientServings: {
            'duck': '4 small',
            'lemon': '1 medium',
            'celery': '3 stalks',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Preheat oven to 450°F or higher. I often cook ducks at 500°F, and small ducks are best cooked at these high temperatures. (You can get away with 425°F if thats as high as your oven will go.) ',
            'If the duck is reasonably fat, use a needle to pierce the skin where there is a lot of fat under it: The front of the breast, between the breast and legs, at the flanks, and all over the back of the bird.',
            'Be careful not to pierce the meat of the breast. Rub lemon over the bird and dust it with a good salt. Stuff the spent lemon or orange wedge inside the duck.',
            'Place a few celery stalks onto an oven-proof pan (I use a cast-iron frying pan), arranging them so you can rest the ducks on top. This prevents the ducks from sitting in their own juices.',
            'Roast in the oven as follows: About 10 to 15 minutes for teal or other small ducks, 13 to 20 minutes for anything up to the size of a gadwall, 18 to 25 minutes for a mallard or canvasback.',
            'The key here is an internal temperature of about 140 to 145°F at the deepest part of the breast meat, which is in the front third of the breast. Dont have an instant read thermometer? Get one.',
            'Ducks need to be cooked medium-rare to medium. An overcooked duck is a sad thing.',
            'Take the duck out, move it to a cutting board and rest it. Let small ducks rest about 5 minutes. Large ducks need to rest closer to 10 minutes, and geese up to 15 minutes.',
            'If you want a simple pan sauce, remove the celery and stir a tablespoon or two of flour into the drippings. Let this cook on the stove (you might be able to do this solely with the residual heat in the hot pan until this roux is the color of coffee-with-cream. ',
            'Add a tablespoon of Worcestershire sauce, some wine or brandy and the juice of a lemon. If the sauce is too thick, add a little water or stock. Whisk everything to combine and add salt to taste.',
            'Turn off the heat, add a tablespoon of minced parsley and a knob of butter. Swirl to combine and serve.'
        ],
        mealImg: '/public/images/meals/roastedwildduck.jpg'
    },
    {
        title: 'Cheaters Duck Confit',
        ingredients: ['duck','butter'],
        ingredientServings: {
            'duck': '4 legs',
            'butter': '2 cups',
            'salt': '1 tbsp'
        },
        preparation: [
            'Preheat the oven to 325 degrees F (160 degrees C).',
            'Place Duck Legs (4) in a smallish baking pan, fitting them somewhat snuggly.',
            'Sprinkle with Kosher Salt (1 Tbsp) .',
            'Cover legs with Butter (2 cups) , breaking the sticks in half if necessary. Cover pan tightly with aluminum foil. Be sure to wrap tightly.',
            'Bake for 2 1/2 hours.',
            'Remove pan from oven. Let cool briefly, then remove foil to cool completely. Once cool enough to handle, transfer legs to a plate if serving immediately or within the next few hours or a storage container if serving on subsequent days.',
            'Transfer fat to a storage container. Store in fridge indefinitely. When you make confit again, use this fat in place of butter.',
            'If possible, bring the cooked duck legs to room temperature an hour before cooking.',
            'If you feel like being fancy, use the heel of your knife to whack off the top half of the bone nub at the end of each duck leg. Also, trim off any fat extending up the bone.',
            'Heat a cast iron skillet over medium heat. Once hot, add duck legs skin side down. Let them crisp undisturbed for 1-2 minutes.',
            'Shake the pan to make sure the skin isnt sticking. If it is, use a spatula to gently separate the legs from the pan, being careful not to tear the skin. Continue crisping, repositioning the legs if necessary to ensure the skin is browning evenly, about 5-8 minutes total.',
            'If the legs have been refrigerated, once the skin is nicely crisped, transfer pan to the oven for 7-10 minutes or until the meat is nicely heated through.',
            'If the legs have not been refrigerated, you probably can get away with just flipping the legs over and cooking for 1 minute skin side up. You dont want to cook the legs too much on the flesh side or the meat will get too tough.'
        ],
        mealImg: '/public/images/meals/cheatersduck.jpg'
    },
    {
        title: 'Skillet Chicken Thighs',
        ingredients: ['chicken','cauliflower','pear'],
        ingredientServings: {
            'chicken': '3 large thighs',
            'cauliflower': '1 large head',
            'pear': '1 large',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Heat oven to 400°.',
            'Season chicken liberally with salt and pepper.',
            'Heat a large, oven-safe skillet over medium heat. Add chicken, skin side down, and cook until skin crisps slightly and some fat is rendered, 3 minutes.',
            'Add cauliflower and pear. Toss to coat and arrange cauliflower and pear around pan, making sure chicken is skin side down.',
            'Transfer to oven and roast 15 minutes. Flip chicken, then roast 10 minutes more, until cauliflower and pear are soft and chicken is cooked through with no pink in the middle.',
            'Let rest 5 minutes before serving.'
        ],
        mealImg: '/public/images/meals/skilletchickenthigs.jpg'
    },
    {
        title: 'Fried Chicken and Broccoli',
        ingredients: ['chicken', 'butter', 'broccoli'],
        ingredientServings: {
            'chicken': '10 ounces of thighs', 
            'butter': '3.5 ounces', 
            'broccoli': '9 ounces', 
            'salt': 'x', 
            'pepper': 'x'
        },
        preparation: [
            'Rinse broccoli and trim into smaller, bite-size pieces. Include the stems in your meal.',
            'Add half of the butter to a pan (that can fit all ingredients) over medium-high heat.',
            'Season the chicken with salt and pepper. Once the pan is hot, add chicken to the pan and cook until golden brown – about 5 minutes per side.',
            'Add the broccoli and remaining butter to the pan and sautee for a few more minutes. Season with additional salt and pepper if desired.',
            'Serve in a small bowl with all of the pan drippings. Use the broccoli to soak up the pan drippings.'
        ],
        mealImg: '/public/images/meals/friedchickenandbroccoli.jpg'
    },
    {
        title: 'Pan Fried Chicken',
        ingredients: ['chicken','butter'],
        ingredientServings: {
            'chicken': '4-6 thighs',
            'butter': '1/2 cup', 
            'salt': 'x', 
            'pepper': 'x'
        },
        preparation: [
            'Rinse your chicken thighs and pat dry with a paper towel.',
            'Use your fingers to pull away as much of the meat as you can from the bone and then use your kitchen shears to cut away the remaining meat underneath the bone.',
            'Trim off any large pieces of skin that extend beyond the thigh. Be sure and leave the skin that is attached to the thigh there.  Trust me, you want as much of that yummy crispy skin as you can get.',
            'The bone is removed, heat up your cast iron skillet and get it nice and hot. ',
            'Add in 1 tablespoon of butter and let it melt.  Dont let it brown or burn.',
            'While the pan is heating up, salt and pepper your chicken. Be generous.  The salt makes the crispy skin even better.',
            'Place your chicken into your hot pan with the skin side down.',
            'Reduce your heat to medium hot and allow the chicken to cook for about 9-10 minutes or until the skin is nice and crispy, golden brown.',
            'About half way through the cooking process (skin side down) rotate the chicken 180 degrees in the pan.',
            'Flip the chicken and cook the other side for about 7 minutes or until meat is cooked through.',
            'You are now ready for a yummy, delicious, crispy chicken dinner.'
        ],
        mealImg: '/public/images/meals/panfriedchicken.jpg'
    },
    {
        title: 'Fruity Chicken',
        ingredients: ['chicken', 'onion', 'lemon', 'orange', 'grapefruit'],
        ingredientServings: {
            'chicken': '2 raw', 
            'onion': '2 medium', 
            'lemon': '2', 
            'orange': '1 cup juice', 
            'grapefruit': '1',
            'water': '3-4 tbsp',
            'salt': 'x'
        },
        preparation: [
            'Place chickens in pan or Dutch oven. Dice onions and sprinkle over chicken. Squeeze fruit juices and mix together.',
            'Add water and salt and pour over chickens.',
            'Bake at 350° for 2 hours. If cooking on top of stove, bring to boil and lower flame to simmer for 1 1/2 hours.',
            'Variation: Sauce can also be used over meat, meatballs, roasts.'
        ],
        mealImg: '/public/images/meals/fruitychicken.jpg'
    },
    {
        title: 'Clear Chicken Soup',
        ingredients: ['chicken','onion','butter','egg'],
        ingredientServings: {
            'chicken': '2 cup',
            'onion': '2 spring',
            'butter': '1 tbsp',
            'egg': '2',
            'salt': 'x',
            'pepper': 'x',
            'water': 'x'
        },
        preparation: [
            'To make this hearty soup, first put a large pan on medium flame. Add and melt the butter in the pan.',
            'Chop the spring onions finely and add them into the pan. Cook them till they are brown.',
            'Also, add the chicken meat to the butter and spring onion mix and let it fry till the meat gets brown too.',
            'Meanwhile, put a heavy-bottomed pan on high flame and boil water in it. Transfer the boiling water to the pan and let the meat to get cooked and the juices to get released in the soup.',
            'When it is cooked, strain the soup into a big bowl or pan and remove the fat from it after cooling it and straining it again.',
            'Put the pan on medium flame again and add soup into it. Let it boil. Break and separate egg whites in a bowl. Now, slowly pour the egg whites in a thin stream to the soup while stirring it continuously.',
            'Add the seasoning of salt and black pepper to the soup mix and let it boil again for around 2 minutes.',
            'After the soup is ready, strain it again and serve hot in the serving bowls with a garnish of any green herb.'
        ],
        mealImg: '/public/images/meals/clearchickensoup.jpg'
    },
    {
        title: 'Berry Grape Chicken Salad',
        ingredients: ['grapes','blueberry','raspberry','apple','chicken','yogurt','walnuts','celery'],
        ingredientServings: {
            'grapes': '2 cups, sliced',
            'blueberry': '1/2 cup',
            'raspberry': '1/2 cup',
            'apple': '1, sliced',
            'chicken': '2 cups',
            'yogurt': '1 1/2 vanilla',
            'walnuts': '1 cup, chopped',
            'celery': '3 stalks, chopped'
        },
        preparation: [
            'Cook the chicken.',
            'In a large bowl, combine all ingredients; mix gently until well combined and everything is evenly coated.',
            'Serve on individual plates or a serving platter.'
        ],
        mealImg: '/public/images/meals/berrygrapechickensalad.jpg'
    }
]

const recipes3 = [
    {
        title: 'Homemade Chicken Soup',
        ingredients: ['chicken','carrot','celery','onion'],
        ingredientServings: {
            'chicken': '2 1/2 pound',
            'carrot': '4',
            'celery': '3 stalks',
            'onion': '2 medium',
            'salt': '1 tbsp',
            'pepper': '1 1/2 tsp',
            'water': '10 cups'
        },
        preparation: [
            'Combine all the ingredients in a soup pot and bring to a boil over high heat. Reduce the heat to low, then simmer for 2-1/2 to 3 hours, or until the chicken easily falls off the bones.',
            'Serve the soup with the chicken (bones and all) or, if desired, use tongs to remove the chicken from the soup, allow the chicken to cool slightly, then bone and skin the chicken, cut it into small pieces, and return it to the soup.',
            'Serve as is or with cooked noodles, rice, or matzo balls.',
            'Store any leftover soup in the refrigerator. Before reheating, remove and discard any fat that has risen to the surface.'
        ],
        mealImg: '/public/images/meals/homemadechickensoup.jpg'
    },
    {
        title: 'Roast chicken',
        ingredients: ['onion','chicken','lemon','butter'],
        ingredientServings: {
            'onion': '1',
            'chicken': '1-1.5 kg',
            'lemon': '1 1/2',
            'butter': '2 tbsp'
        },
        preparation: [
            'First, find a beautiful chicken - 1.5kg is a good size to serve 4 and still have some left over for the next day.',
            'Set your oven to medium, about 180C.',
            'Rinse the chicken in cold water, dry it with a paper towel and, if you like, stuff it with a whole peeled onion and half a lemon.',
            'Depending on how tidy you want the roast to look, tie or skewer the back legs and the front wings close to the body.',
            'Sit the chicken in a generous roasting pan breast side up. Season with lots of salt and pepper and cover the bottom 1.5cm of the pan with cold water.',
            'Push a good 2 Tbsp butter on to the chicken. If youre avoiding butter use 1 Tbsp olive oil.',
            'Place the chicken in the middle of the oven and baste every 10-15 minutes till cooked and golden. If the water dries out (which it shouldnt) add a little more.',
            'When cooked, remove the chicken from the pan and rest it covered for at least 15 minutes.',
            'The juices/water left in the pan become the "stock" to make your gravy.',
            'Serve with roasted potatoes, kumara and other vegetables that you like, some greens (that may include frozen peas) or just some roasted potatoes and a crisp green salad.'
        ],
        mealImg: '/public/images/meals/roastedchicken.jpg'
    },
    {
        title: 'Crabmeat Omelette',
        ingredients: ['crab','onion','egg','butter','scallion'],
        ingredientServings: {
            'crab': '3/4 cup',
            'onion': '1 small',
            'egg': '3',
            'butter': '4 tbsp',
            'scallion': '2 tbsp',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Heat the frying pan and put-in 2 tbsp of butter then allow to melt.',
            'Add the onion, crab meat, and green onions then cook until half done.',
            'Add salt and pepper to taste then set aside.',
            'Heat the same frying pan (apply low heat) and put-in the remaining butter then allow to melt.',
            'Crack the eggs and place in a bowl then add some salt.',
            'Whisk the eggs and pour on the frying pan.',
            'Tilt the frying pan to allow the uncooked portions of the eggs (liquid form) to occupy the whole surface of the pan.',
            'You can also pull from the middle part of the pan to allow uncooked portions of the egg to occupy the space.',
            'Put the cooked crab meat and onions on top of the half side of the omelette.',
            'Cover the crab meat and onions by folding the other side of the omelette.',
            'Place in a serving plate.'
        ],
        mealImg: '/public/images/meals/crabmeatomelette.jpg'
    },
    {
        title: 'Instant Pot Crab Legs',
        ingredients: ['crab','butter','lemon'],
        ingredientServings: {
            'crab': '1 large package',
            'butter': '1/2 cup',
            'lemon': '1',
            'water': '1 3/4 cup'
        },
        preparation: [
            'Take out your instant pot and put a steamer basket or trivet',
            'Add water to your instant pot',
            'Add snow crabs',
            'Put the lid on and turn it to sealing.',
            'Put on manual for 3 minutes',
            'After the Instant pot finishes cooking and beeps, let it sit for 5 more minutes. Then do a quick release (there will be steam)',
            'Place on a plate, add lemon juice and then serve with melted butter.'
        ],
        mealImg: '/public/images/meals/instantpotcrablegs.jpg'
    },
    {
        title: 'Cooked Crab Claws',
        ingredients: ['crab','butter','lemon'],
        ingredientServings: {
            'crab': '2 pounds',
            'butter': '1/4 cup',
            'lemon': '1'
        },
        preparation: [
            'Thaw the crab claws completely. Either defrost in the refrigerator overnight or place under running water for 30 minutes.',
            'In a small saucepan, melt the butter over medium-low heat.',
            'Skim off the froth on the surface using a spoon. Then stir in 1 teaspoon of fresh lemon juice. Set aside.',
            'Reheat the claws by boiling or steaming for 3-4 minutes',
            'To boil: fill a medium pot halfway with cold water and add a pinch of salt. Bring to a boil and use tongs to add the crab.',
            'To steam: Add an inch of water and a steamer basket to a medium pot. Bring the water to a boil and use tongs to add the crab.',
            'Using kitchen tongs, transfer the claws to a platter and serve with warm lemon butter sauce.'
        ],
        mealImg: '/public/images/meals/cookedcrabclaws.jpg'
    },
    {
        title: 'Tammys Irish Stew',
        ingredients: ['beef','potato','carrot','parsnip','onion'],
        ingredientServings: {
            'beef': '1 pound ground',
            'potato': '5 pounds',
            'carrot': '3 large',
            'parsnip': '2 large',
            'onion': '2',
            'salt': 'x',
            'water': '4 cups',
        },
        preparation: [
            'Crumble the ground beef in a large, deep pot. Pour in 4 cups of water, and season with 1 teaspoon of salt.',
            'Cover and soak beef for about 20 minutes at room temperature. Add whole potatoes, carrots, parsnips, and onions. ',
            'Stir in additional water, if needed, until potatoes are nearly submerged.',
            'Cover and bring to a boil slowly over medium-low heat. Reduce heat to low and simmer until the potatoes begin to fall apart, about 1 hour, adding water one cup at a time, as needed, to keep the potatoes moist.',
            'Stir the stew with a wooden spoon, breaking apart smaller potatoes to create a gravy-like consistency. Season with salt to taste.',
            'Cover, remove from heat, and allow stew to rest for 10 minutes before serving.'
        ],
        mealImg: '/public/images/meals/tammysirishstew.jpg'
    },
    {
        title: 'Hachis parmentier',
        ingredients: ['beef','onion','potato','milk','butter'],
        ingredientServings: {
            'beef': '1/2 kg',
            'onion': '1',
            'potato': '4 pounds',
            'milk': '1 cup',
            'butter': '3 tbsp',
            'vegetable_oil': 'x',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Preheat your Four at 425 °F',
            'Mince the onion.  Heat the milk gently and set aside.',
            'Peel the potatoes and cut them into cubes.',
            'Transfer the potatoes to a pot with salted cold water (10% by volume).  Bring to a boil and cook until a knife easily passes through the potatoes.  Strain the potatoes and then transfer them back to the pot you cooked them in.',
            'Add the warm milk.  With a whisk or potato masher mix until nice and smooth.  Add more milk if necessary.  Add the butter and season to taste with salt and pepper.',
            'In a hot skillet with oil, sweat the onions.  Once translucent, add the minced meat and cook thoroughly.',
            'Transfer the meat and onions to the bottom of your glas square  container and cover with the mashed potatoes.',
            'Sprinkle with little knobs of butter here and there.  Transfer to the oven until you have a nice golden color.'
        ],
        mealImg: '/public/images/meals/hachisparmentier.jpg'
    },
    {
        title: 'Greek stuffed tomatoes and peppers',
        ingredients: ['beef','tomato','rice','onion','pepper'],
        ingredientServings: {
            'beef': '1/2 kg',
            'tomato': '4-5 big',
            'rice': '1 cup',
            'onion': '1',
            'pepper': '1',
            'salt': 'x',
            'pepper': 'x',
            'olive oil': 'x',
            'garlic': '2 cloves'
        },
        preparation: [
            'We need to cut the tomatoes making a little “hat” on top of them and with a spoon to remove all of its inside. Dont throw it away,we will need it!',
            'So go ahead and grab a deep frying pan and add 2 tea spoons of olive oil and in medium heat throw in the onions and the garlic. Let them sizzle a bit and stir them. Be careful not to burn them.',
            'Throw the minced meat in and stir it well until it becomes brownish.',
            'Add Salt, pepper and 2-3 teaspoons of oregano. Pour the tomato juice and the inside juice from the tomatoes you have removed.',
            'Let it cook for 5-6 minutes making sure you stir it in the mean time.',
            'Add the rice and then fill the frying pan with water and let it boil. Let it cook and taste it in the mean time to make sure that the rice is cooked..',
            'As it is being cooked the water will evaporate and a lit bit before its done you should add the chopped parsley removing it from the heat',
            'You need to stuff the tomatoes and the peppers with the mixture.',
            'Take a spoon and simple add the mixture inside but dont over do it because that might crack the tomatoes.',
            'When you fill them, you need to close the tomatoes and peppers with the tops.',
            'Bake it in a preheated oven for around an hour…an hour and a half. Make sure that your pan, has always a bit of water in it.',
            'For the pan i have on the picture i just added a glass. The water evaporates making sure the tomatoes are getting softer.',
            'When the vegetables become slightly blackened on the sides then its ready. Dont serve it immediately but let it “mellow” for some minutes.',
            'It is best done with oven baked potatoes which you can add in the same pan.',
            'This is typically a summer food that you can have even cold. Hope you enjoy it!'
        ],
        mealImg: '/public/images/meals/greekstuffedtomatoandpeppers.jpg'
    },
    {
        title: 'Stuffed Cabbage',
        ingredients: ['cabbage','beef','rice'],
        ingredientServings: {
            'cabbage': '1 head',
            'beef': 'ground',
            'rice': '1 cup'
        },
        preparation: [
            'Bring a pot of water to a boil, and put in the head of cabbage to soften the leaves.',
            'Leave it in the water for about 15 minutes until you can remove each leaf.',
            'With a paring knife, carefully cut half the spline off of the cabbage to allow it to roll without splitting.',
            'The cabbage spline tends to crack due to being too dense.',
            'Pull off the top leaves carefully. Pull from close to where it meets the center, to avoid tearing the leaf.',
            'When you get as many large leaves as you want, set them aside.',
            'Brown ground beef, cook wild rice, and mix both (once cooked) with heated stewed tomatoes and any seasoning of your choice. Salt and pepper are good.',
            'The amount of beef and rice is dependent how many people you intend to feed. One pound of beef, 1/2 cup uncooked rice, and one can of tomatoes should serve a family of three or four.',
            'Fill each cabbage leaf with about 1/3 of a cup of your stuffing.',
            'Place the filling in an oval at the center of the leaf, perpendicular to the line of the stem.',
            'Be careful not to overstuff!',
            'You can use the leaf to sort of pre-roll the filling, by using it to compress it into the shape you want.',
            'Roll the cabbage with the mixture inside, and set aside.',
            'Serve your stuffed cabbage. Youre done!'
        ],
        mealImg: '/public/images/meals/stuffedcabbage.jpg'
    },
    {
        title: 'Silver Dollars',
        ingredients: ['cabbage','beef','onion','carrots','potato'],
        ingredientServings: {
            'cabbage': '8 leaves',
            'beef': '1 pound ground',
            'onion': '1, sliced',
            'carrots': '2, chopped',
            'potato': '1, diced',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Preheat an outdoor grill for medium high heat.',
            'Place a leaf of cabbage on a piece of tin foil. Form ground beef into four equal patties and place a patty on the leaf of cabbage.',
            'Top with onion, carrot and potato and season with salt and pepper to taste. Place a second cabbage leaf over the potatoes. ',
            'Top with another sheet of foil and seal all the edges. Repeat this with the 3 other patties.',
            'Grill over medium high heat for 25 to 35 minutes, or to desired doneness.'
        ],
        mealImg: '/public/images/meals/silverdollars.jpg'
    },
]

const recipes4 = [
    {
        title: 'Lobster with lemon slices',
        ingredients: ['lobster','butter','lemon'],
        ingredientServings: {
            'lobster': '650g',
            'butter': '1 cup',
            'lemon': '3'
        },
        preparation: [
            'Fill a pot large enough to hold all your lobsters comfortably with water add sea salt if not using sea water.',
            'Bring water to a rolling boil on high heat.',
            'Add live lobsters one at a time to boiling water. Do not cover. Start timing immediately.',
            'Cook lobsters for 11 to 12 minutes. Stir lobsters halfway through the cooking process.',
            'The lobster shells will be bright red and the the tails will be curled when they are done.',
            'Remove lobsters from pot and allow to rest for 5 minutes.',
            'Meanwhile, melt butter and divide between individual ramekins. Remove elastic bands from claws prior to serving.',
            'Serve lobsters hot with melted butter and lemons.'
        ],
        mealImg: '/public/images/meals/lobsterwithlemonslices.jpg'
    },
    {
        title: 'Pork Chops and Potatoes',
        ingredients: ['pork','potato','onion'],
        ingredientServings: {
            'pork': '8-10 chops',
            'potato': '4-6 pounds',
            'onion': '1-2 pounds',
            'salt': 'x'
        },
        preparation: [
            'Peel and slice potatoes into 1/2-3/4" rounds; peel and slice onions into rings.',
            'Spray a 13x9 inch baking dish with cooking spray. Place potatoes in bottom of baking dish.',
            'Sprinkle both sides of pork chops with seasoning salt (I use Tony Cacheres Cajun Seasoning but regular seasoning salt works well also).',
            'Place chops on top of potatoes. Layer onion ring slices over top of pork chops, then squeeze butter liberally over the chops.',
            'Cover with aluminum foil and bake at 350 degrees for 1 to 1-1/2 hours.'
        ],
        mealImg: '/public/images/meals/porkchopsandpotatoes.jpg'
    },
    {
        title: 'Easy Pork Shoulder',
        ingredients: ['pork'],
        ingredientServings: {
            'pork': '1 bonesless shoulder',
            'water': '1/2 cup',
            'salt': 'x',
            'pepper': 'x',
        },
        preparation: [
            'Preheat oven to 450 degrees. Using a sharp knife, score the fat (but not the meat) on 1 boneless pork shoulder (7 pounds) in a diamond pattern.',
            'Season with coarse salt and ground pepper. Place pork, fat side up, in a roasting pan or large Dutch oven with 1/2 cup water.',
            'Roast until some fat has rendered, about 45 minutes. Remove pan from oven and reduce oven temperature to 350 degrees.',
            'Tightly cover pan with foil or a lid. Cook until meat is very tender, about 4 hours.',
            'When cool enough to handle, remove fat from top of roast. Using two forks, shred meat into bite-size pieces, discarding any large pieces of fat.'
        ],
        mealImg: '/public/images/meals/easyporkshoulder.jpg'
    },
    {
        title: 'Smoked Pork Belly',
        ingredients: ['pork'],
        ingredientServings: {
            'pork': '1 4-5 pound boneless belly',
            'salt': 'x',
            'pepper': 'x',
            'smoking_wood': '3 chunks',
        },
        preparation: [
            'In a small bowl combine pepper and salt to make the rub. Season pork belly all over liberally with the rub.',
            'Fire up smoker or grill to 225°F, adding chunks of smoking wood chunks when at temperature.',
            'When the wood is ignited and producing smoke, place the pork belly in the smoker or grill and smoke until an instant read thermometer registers between 195-203°F when inserted into the thickest section of meat, about 6 to 8 hours.',
            'Wrap pork belly tightly in butcher paper or foil, place in a cooler or oven, and let rest for 1 to 2 hours.',
            'Slice pork belly and serve.'
        ],
        mealImg: '/public/images/meals/smokedporkbelly.jpg'
    },
    {
        title: 'Dublin Parsnip Colcannon',
        ingredients: ['parsnip','potato','cabbage','onion','milk', 'butter'],
        ingredientServings: {
            'parsnip': '1 pound',
            'potato': '1 pound',
            'cabbage': '1 pound',
            'onion': '1 large',
            'milk': '250ml', 
            'butter': '55g',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Peel the potatoes and parsnips, and place them in a saucepan filled with salted, boiling water.',
            'When the potatoes and parsnips are cooked, strain off the water, add the milk and mash.',
            'While they are cooking, bring a pot of well salted water to the boil.',
            'Cook the cabbage until the leaves are tender. Drain and set aside.',
            'Melt the butter in a large frying pan and fry the onions until soft and sweet.',
            'Add the cabbage and stir well to get everything thoroughly coated with butter.',
            'Add the cabbage mixture to the pot with mash and stir well.',
            'Season to taste. Serve immediately.'
        ],
        mealImg: '/public/images/meals/parsnipcolcannon.jpg'
    },
    {
        title: 'Vegetable Whip',
        ingredients: ['turnip','carrot','onion','potato','butter','milk'],
        ingredientServings: {
            'turnip': '1, diced',
            'carrot': '4, diced',
            'onion': '2 large',
            'potato': '6 medium, cubed',
            'butter': '1/4 cup',
            'milk': '1/2 cup',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'To a pot, add turnip, carrots, onion, and potatoes with water.',
            'Bring the pot to a boil over medium-high heat and cook until tender.',
            'Drain the water from the vegetables and stir in the butter until its melted.',
            'Beat with an electric mixer, making sure to gradually add the milk.',
            'Beat until light and fluffy. Do not beat for an extended period of time, just until smooth.',
            'Season to taste with salt and pepper.'
        ],
        mealImg: '/public/images/meals/vegetablewhip.jpg'
    },
    {
        title: 'Simple Smashed Potatoes',
        ingredients: ['potato','butter','milk'],
        ingredientServings: {
            'potato': '2 pounds',
            'butter': '4 tbsp',
            'milk': '1/2 cup',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Place red potatoes in a large pan and cover with water.',
            'Bring to a boil and cook for 20-25 minutes until very tender.',
            'Remove from heat and drain remaining water from the potatoes.',
            'Using a potato masher, begin to mash potatoes, but do not mash until smooth.',
            'Add in butter, salt, pepper, and milk. Stir until all is well-combined.',
            'Serve warm.'
        ],
        mealImg: '/public/images/meals/simplesmashedpotatoes.jpg'
    },
    {
        title: 'Chicken Puree with Carrot and Potato',
        ingredients: ['chicken','potato','carrot'],
        ingredientServings: {
            'chicken': '40g',
            'potato': '80g',
            'carrot': '100g'
        },
        preparation: [
            'Steam the carrot and potato until soft.',
            'Steam the chicken breast until cooked and cut into small pieces.',
            'Peel the carrot and potato and cut into small pieces.',
            'Use the chopper to blend the carrot and potato until smooth.',
            'Put the chicken breast into chopper, blend until pureed.',
            'Combine the carrot and potato mixture with the chicken breast puree, mix well and serve.'
        ],
        mealImg: '/public/images/meals/chickenpureewithcarrotandpotato.jpg'
    },
    {
        title: 'Puré de papa',
        ingredients: ['potato','butter','milk'],
        ingredientServings: {
            'potato': '800g',
            'butter': '50g',
            'milk': '200ml',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Place the potatoes in a pot and cover with cold water, about 3 or 4 centimeters above and add salt.',
            'Put the pot into the fire and once it starts to boil, start counting form 20 to 40 minutes, depending on size of potatoes, until are cooked thoroughly.',
            'As soon as are cooked, drain them, peel them and crush with a masher.',
            'Add cubbed cold butter, along with a pinch of salt and a little ground black pepper and continue mashing.',
            'Gradually add hot milk while crush, until get a soft and smooth puree.'
        ],
        mealImg: '/public/images/meals/puredepapa.jpg'
    },
    {
        title: 'Crispy Potato Pancakes',
        ingredients: ['potato','egg','onion','scallion','carrot'],
        ingredientServings: {
            'potato': '2 medium',
            'egg': '1',
            'onion': '1/4 cup',
            'scallion': '2 tbsp',
            'carrot': '1/2 cup',
            'salt': 'x',
            'pepper': 'x'
        },
        preparation: [
            'Heat up pan with about a 1/4 inch of olive oil. While the oil is heating, add all the ingredients to the bowl and mix together.',
            'Form mixture into balls and place in oil, using the spatula to form them into patties by pressing down lightly on the balls.',
            'Flip after a few minutes or when crispy colored! Pat with paper towel immediately out of the pan.',
            'Garnish with green onions and sour cream.'
        ],
        mealImg: '/public/images/meals/crispypotatopancakes.jpg'
    },
]

Recipe.insertMany(recipes1);
Recipe.insertMany(recipes2);
Recipe.insertMany(recipes3);
Recipe.insertMany(recipes4);