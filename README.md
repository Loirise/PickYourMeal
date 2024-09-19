# PickYourMeal
A site where you can choose a recipe from a list or choose what ingredients are available to you and see what recipes you can cook.


## How to install
* Install MongoDB if you don't have it already - check [MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/)
* Download the repo
* Go to the downloaded folder, open the terminal and run the command:
* ``` npm install ```
* Seed the database using these scripts **(check if the *mongoose.connection* path is correct)**
* ``` node populateIngr.js ```
* ``` node populateRecipe.js ```
* Finally run the index.js:
* ``` nodemon index.js ```
* Enjoy

## Project Screenshots
![Project screenshot 1](/public/images/pickyourmeal-home.JPG)
![Project screenshot 2](/public/images/pickyourmeal-choosing.JPG)
![Project screenshot 3](/public/images/pickyourmeal-recipe.JPG)
