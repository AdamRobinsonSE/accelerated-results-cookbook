// Add ingredientName to grocery list button event listener
document.querySelectorAll('.addIngredientBtn').forEach(item => {
    item.addEventListener('click', AddIngredient);
});

// add ingredientName to grocery list
function AddIngredient(){
    this.classList.add('disabled');
    if (this.innerText === '+ item'){
        this.innerText = 'item added';
    } else {
        this.innerText = '+ item';
    }
};
