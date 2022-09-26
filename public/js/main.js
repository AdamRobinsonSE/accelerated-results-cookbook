// add/minus ingredients buttons and functions
document.querySelector('#addIngredientsBtn').addEventListener('click', addIngredients);
document.querySelector('#minusIngredientsBtn').addEventListener('click', minusIngredients);

function addIngredients(){
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'ingredients');
    input.setAttribute('class', 'form-control mt-1');
    document.querySelector('.ingredientDiv').appendChild(input);
}

function minusIngredients(){
    let input = document.querySelector('.ingredientDiv');
    input.removeChild(input.lastChild);
}

// add/minus direction buttons and functions
document.querySelector('#addDirectionsBtn').addEventListener('click', addDirections);
document.querySelector('#minusDirectionsBtn').addEventListener('click', minusDirections);

function addDirections(){
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'directions');
    input.setAttribute('class', 'form-control mt-1');
    document.querySelector('.directionDiv').appendChild(input);
}

function minusDirections(){
    let input = document.querySelector('.directionDiv');
    input.removeChild(input.lastChild);
}