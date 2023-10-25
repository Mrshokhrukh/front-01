
let fruits = ['appl 🍏', 'banana 🍌', 'peach 🍑', 'orange 🍊', 'kiwi 🥝', 'pineapple 🍍', 'strawberry 🍓', 'avocado 🥑', 'melon 🍈', 'watermelon 🍉', 'cherry 🍒', 'lemon 🥭', 'mango 🍐', 'grape 🍇']
let table = document.getElementById('table');
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let productVal = document.getElementById('product');
let edit_val_input = document.querySelector('.edit_val');


display()
function display() {
    tbody.innerHTML = ''
    for (let i = 0; i < fruits.length; i++) {
        tbody.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${fruits[i]} <input style="display:none" value="${fruits[i]}"  class="edit_val" /></td>
        <td>
        <button class="edit" onclick="editItem(${i})">edit</button>
        </td>
        <td> 
        <button class="delete" onclick="deleteItem(${i})">delete</button>
        </td>
        </tr>`
    }
}

function deleteItem(id) {
    fruits.splice(0, 1)
    display()
}


let getAllItems = document.querySelectorAll('tbody tr td input')
let editTd = document.querySelectorAll('.edit');

let isEdit = false;

function editItem(id) {
    isEdit = !isEdit
    editTd[id].innerText = (isEdit == true ? 'save' : 'edit');
    fruits[id] = getAllItems[id].value;

    if (isEdit) {
        getAllItems[id].style.display = 'inline-block';
    } else {
        getAllItems[id].style.display = 'none';
    }

    if (!isEdit) {
        display()
    }


}


function addProduct(e) {
    e.preventDefault();
    if (productVal.value) {
        fruits.push(productVal.value)
    }
    display()

    productVal.focus()
    productVal.value = '';

}