// SELECTORS
const whatToBuy = document.querySelector(".whatToBuy");

const submitBtn = document.querySelector(".submitBtn");

const shoppingListItems = document.querySelector(".shoppingListItems");


// EVENT LISTENER 
submitBtn.addEventListener("click", addShoppingItem);
shoppingListItems.addEventListener("click", deleteCheck);

// FUNCTIONS
let itemInputValue = whatToBuy.value; 

function addShoppingItem(event) {
  //prevent form from submitting
  event.preventDefault();
  // shopping list item div 
  const listContainer = document.createElement('div');
  listContainer.classList.add("listItem");
  // Creat LI
  const newListItem = document.createElement("li");
  newListItem.innerText = whatToBuy.value;
  newListItem.classList.add('listItem2');
  listContainer.appendChild(newListItem);
 
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "<button>Delete</button>";
  deleteBtn.classList.add("deleteBtn");
  listContainer.appendChild(deleteBtn);

   //append list
   shoppingListItems.appendChild(listContainer);
   //clear input value
   whatToBuy.value = "";
   // console.log("hello!!");
 
}

// function deleteCheck(event){
//   console.log(event.target)
// }

