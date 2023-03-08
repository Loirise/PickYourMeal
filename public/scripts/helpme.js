const num = document.querySelector('#helpNum');
const txt = document.querySelector('#helpTxt');
const img = document.querySelector('#helpImg');
const btn1 = document.querySelector('#back');
const btn2 = document.querySelector('#next');

const textOne = 'If you want to see all the available recipes, click "All Recipes" button on the top of the website. \
            If you want to choose ingredients you have and let us pick for you, please continue by clicking "Next" button.';
const textTwo = 'Navigate to PickYourMeal page either by selecting "Pick Your Meal" button on the navigation bar or by completing this short tutorial.';
const textThree = 'Select any number of ingredients, beware you must select all of the ingredients of particular recipes  for that recipe to show up. \
                    e.g. select "butter" and "chicken" for simple chicken recipe';
const textFour = 'To view the recipe, simply click on one. Now lets get cookin!';

const imgOne = "./public/gifs/AllRecipesgif.gif";
const imgTwo = "/public/gifs/PickYourOwngif.gif";
const imgThree = "/public/gifs/ChoosingIngrsgif.gif";
const imgFour = "/public/gifs/ShowRecipesgif.gif";


btn2.addEventListener('click', (e) => {
    switch (num.innerText) {
        case "I":
            txt.innerText = textTwo;
            img.src = imgTwo;
            num.innerText = "II";
            btn1.removeAttribute('hidden');
            break
        case "II":
            txt.innerText = textThree;
            img.src = imgThree;
            num.innerText = "III";
            break
        case "III":
            txt.innerText = textFour;
            img.src = imgFour;
            num.innerText = "IV";
            btn2.innerText = "START"
            btn2.href = "/pickMyMeal";
            e.preventDefault()
            break
    }
})

btn1.addEventListener('click', () => {
    switch (num.innerText) {
        case "II":
            txt.innerText = textOne;
            img.src = imgOne;
            num.innerText = "I";
            btn1.setAttribute('hidden', "");
            break
        case "III":
            txt.innerText = textTwo;
            img.src = imgTwo;
            num.innerText = "II";
            break
        case "IV":
            txt.innerText = textThree;
            img.src = imgThree;
            num.innerText = "III";
            btn2.innerText = "NEXT"
            btn2.href = "#";
            break
    }
})
