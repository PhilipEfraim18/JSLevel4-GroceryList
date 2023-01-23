const form = document.querySelector("#add");
const itemInput = document.querySelector("#item");
const quantityInput = document.querySelector("#quantity");
const list = document.querySelector("#groceryList");
const clearButton = document.querySelector("#clear");

form.addEventListener("submit", event => {
  event.preventDefault();

  const newItem = itemInput.value;
  const newQuantity = quantityInput.value;
  const newLi = document.createElement("li");
  const itemDiv = document.createElement("div");
  itemDiv.textContent = `${newItem} - ${newQuantity}`;
  newLi.appendChild(itemDiv);
  
  const upButton = document.createElement("button");
  upButton.textContent = "↑";
  upButton.addEventListener("click", () => {
    const currentLi = upButton.parentNode;
    const previousLi = currentLi.previousSibling;
    if (previousLi) {
      list.insertBefore(currentLi, previousLi);
    }
  });
  newLi.appendChild(upButton);
  
  const downButton = document.createElement("button");
  downButton.textContent = "↓";
  downButton.addEventListener("click", () => {
    const currentLi = downButton.parentNode;
    const nextLi = currentLi.nextSibling;
    if (nextLi) {
      list.insertBefore(nextLi, currentLi);
    }
  });
  newLi.appendChild(downButton);
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newLi.remove();
  });
  
  newLi.appendChild(deleteButton);
  list.appendChild(newLi);
});

clearButton.addEventListener("click", () => {
    list.innerHTML = "";
});
