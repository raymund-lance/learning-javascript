const unorderedList = document.querySelector("ul");
const inputItem = document.querySelector("#item");
const buttonCreate = document.querySelector("#sub-button");

function addItem() {
    let storeValue = inputItem.value;
    inputItem.value = "";

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    listItem.appendChild(listText);
    listText.textContent = storeValue;
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "Delete"
    unorderedList.appendChild(listItem);

    function deleteList() {
        unorderedList.removeChild(listItem);
    }
    deleteButton.addEventListener("click", deleteList);
}

buttonCreate.addEventListener("click", addItem);