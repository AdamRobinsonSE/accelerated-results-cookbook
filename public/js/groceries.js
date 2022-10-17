// add/minus grocery item buttons event listeners
// document.querySelector('#addGroceryItemBtn').addEventListener('click', addGroceryItem);
// document.querySelector('#minusGroceryItemBtn').addEventListener('click', minusGroceryItem);

// grocery item++
function addGroceryItem(){
    let groceryItemInput = document.createElement('input')
    groceryItemInput.setAttribute('name', 'groceryItem');
    groceryItemInput.setAttribute('class', 'form-control mt-1');
    groceryItemInput.setAttribute('placeholder', 'new item');
    groceryItemInput.setAttribute('type', 'text');
    document.querySelector('.groceryItemDiv').appendChild(groceryItemInput);
};

// grocery item--
function minusGroceryItem(){
    let input = document.querySelector('.groceryItemDiv');
    input.removeChild(input.lastChild);
};

// mark complete button event listener
document.querySelectorAll('.markCompleteBtn').forEach(item => {
    item.addEventListener('click', MarkComplete);
});

// mark complete
function MarkComplete(){
    let groceryItem = this.parentElement.parentElement;
    groceryItem.classList.toggle('completed');
    if (this.innerText === 'Mark Complete'){
        this.innerText = 'Mark Incomplete';
    } else {
        this.innerText = 'Mark Complete';
    }
};

