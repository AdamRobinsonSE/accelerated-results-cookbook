let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv');

addIngredientsBtn.addEventListener('click', function(){
    let newIngredientDiv = ingredientDiv[0].cloneNode(true);
    let input = newIngredientDiv.querySelector('input');
    input.value = '';
    ingredientList.appendChild(newIngredientDiv);
});
 
minusIngredientsBtn.addEventListener('click', function(){
    let ingredientDiv = document.querySelectorAll('.ingredientDiv');
    if(ingredientDiv.length > 1){
        ingredientList.removeChild(ingredientDiv[ingredientDiv.length - 1]);
    }
});

let addDirectionsBtn = document.getElementById('addDirectionsBtn');
let directionList = document.querySelector('.directionList');
let directionDiv = document.querySelectorAll('.directionDiv')[0];

addDirectionsBtn.addEventListener('click', function(){
    let newDirections = directionDiv.cloneNode(true);
    let input = newDirections.getElementsByTagName('input')[0];
    input.value = '';
    directionList.appendChild(newDirections);
});

minusDirectionsBtn.addEventListener('click', function(){
    let directionDiv = document.querySelectorAll('.directionDiv');
    if(directionDiv.length > 1){
        directionList.removeChild(directionDiv[directionDiv.length - 1]);
    }
});



