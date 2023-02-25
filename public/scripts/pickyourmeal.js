const allCheckboxes = document.querySelectorAll('.ingrCheckbox');
const allRecipesElements = document.querySelectorAll('.recipe');


/* list of recipe objects */
let allRecipes = [];
allRecipesElements.forEach((i)=>{
    let recipe = {};
    recipe.element = i;
    recipe.id = i.children[0].dataset.bsTarget;
    recipe.ingredients = i.children[1].value.split(',');
    allRecipes.push(recipe);
})


/* list of checked checkboxes - ingredients */
let enabledSettings = [];
allCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        enabledSettings = 
        Array.from(allCheckboxes).filter(i => i.checked).map(i => i.value);
        /* compare lists of ingredients from recipes to list of checked ingredients by user */
        allRecipes.forEach(function(recipe){
            if(recipe.ingredients.every(elem => enabledSettings.includes(elem))){
                recipe.element.classList.remove('d-none')
            }else{
                recipe.element.classList.add('d-none')
            }
            /* could use classList.toggle() */
        })
    })
})