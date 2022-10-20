// add/minus ingredients button event listeners
document.querySelector('#addIngredientsBtn').addEventListener('click', addIngredients);
document.querySelector('#minusIngredientsBtn').addEventListener('click', minusIngredients);

// ingredients++
function addIngredients(){
    // create the ingredientAmount input (ie: 1)
    let ingredientAmountInput = document.createElement('input')
    ingredientAmountInput.setAttribute('name', 'ingredientAmount');
    ingredientAmountInput.setAttribute('class', 'form-control mt-1 bg-light');
    ingredientAmountInput.setAttribute('placeholder', 'new amount');
    ingredientAmountInput.setAttribute('type', 'text');
    document.querySelector('.ingredientAmountDiv').appendChild(ingredientAmountInput);

    // create the ingredientUnit input (ie: large)
    let ingredientUnitInput = document.createElement('input')
    ingredientUnitInput.setAttribute('name', 'ingredientUnit');
    ingredientUnitInput.setAttribute('class', 'form-control mt-1 bg-light');
    ingredientUnitInput.setAttribute('placeholder', 'new unit');
    ingredientUnitInput.setAttribute('type', 'text');
    document.querySelector('.ingredientUnitDiv').appendChild(ingredientUnitInput);

    // create the ingredient type input (ie: onion)
    let ingredientNameInput = document.createElement('input');
    ingredientNameInput.setAttribute('name', 'ingredientName');
    ingredientNameInput.setAttribute('class', 'form-control mt-1 bg-light');
    ingredientNameInput.setAttribute('placeholder', 'new name');
    ingredientNameInput.setAttribute('type', 'text');
    document.querySelector('.ingredientNameDiv').appendChild(ingredientNameInput);

    // create the ingredient instructions input (ie: diced)
    let ingredientInstructionsInput = document.createElement('input');
    ingredientInstructionsInput.setAttribute('name', 'ingredientInstructions');
    ingredientInstructionsInput.setAttribute('class', 'form-control mt-1 bg-light');
    ingredientInstructionsInput.setAttribute('placeholder', 'new instructions');
    ingredientInstructionsInput.setAttribute('type', 'text');
    document.querySelector('.ingredientInstructionsDiv').appendChild(ingredientInstructionsInput);
};

// ingredients-- 
function minusIngredients(){
    let input1 = document.querySelector('.ingredientAmountDiv');
    let input2 = document.querySelector('.ingredientUnitDiv');
    let input3 = document.querySelector('.ingredientNameDiv');
    let input4 = document.querySelector('.ingredientInstructionsDiv');
    input1.removeChild(input1.lastChild);
    input2.removeChild(input2.lastChild);
    input3.removeChild(input3.lastChild);
    input4.removeChild(input4.lastChild);
};

// Add/minus direction buttons event listeners
document.querySelector('#addDirectionsBtn').addEventListener('click', addDirections);
document.querySelector('#minusDirectionsBtn').addEventListener('click', minusDirections);

// directions++
function addDirections(){
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'directions');
    input.setAttribute('class', 'form-control mt-1 bg-light');
    document.querySelector('.directionDiv').appendChild(input);
};

// directions--
function minusDirections(){
    let input = document.querySelector('.directionDiv');
    input.removeChild(input.lastChild);
};
