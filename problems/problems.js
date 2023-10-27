
let table = document.getElementById('table');
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let productVal = document.getElementById('product');
let edit_val_input = document.querySelector('.edit_val');

let fruits = ['apple 🍏', 'banana 🍌', 'peach 🍑', 'orange 🍊', 'kiwi 🥝', 'pineapple 🍍', 'strawberry 🍓', 'avocado 🥑', 'melon 🍈', 'watermelon 🍉', 'cherry 🍒', 'lemon 🥭', 'mango 🍐', 'grape 🍇']
let removedElements = []
let newTableElements = ['samsung', 'iphone', 'vivo', 'redMe'];

display(fruits)
function display(array) {
    tbody.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        tbody.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${array[i]} <input style="display:none" value="${array[i]}"  class="edit_val" /></td>
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
    removedElements.push(fruits[id])
    fruits.splice(id, 1)
    display(fruits)
    showRemovedEl()
}
let abs = document.querySelector('.removedTableBody')
function showRemovedEl() {
    abs.innerHTML = ''
    for (let i = 0; i < removedElements.length; i++) {
        abs.innerHTML += `
        <tr> 
        <td>${i + 1}</td>
        <td>${removedElements[i]}</td>
        </tr>
        `
    }
}

// let getAllItems = document.querySelectorAll('tbody tr td input')
// let editTd = document.querySelectorAll('.edit');

// let isEdit = true;
// function editItem(id) {

//     editTd[id].innerText = (isEdit == true ? 'save' : 'edit');
//     fruits[id] = getAllItems[id].value;

//     if (getAllItems[id]) {
//         getAllItems[id].style.display = 'flex';
//     } else {
//         getAllItems[id].style.display = 'none';
//     }
//     display()

//     // console.log(fruits[id]);
//     // console.log(getAllItems[id]);
// }


function addProduct(e) {
    e.preventDefault();
    if (productVal.value) {
        fruits.push(productVal.value)
    }
    display(fruits)

    productVal.focus()
    productVal.value = '';

}

function sortEl() {
    fruits.sort()
    display(fruits)
}

let newTableBody = document.querySelector('.newTableBody')
showNewEl();

function showNewEl() {
    newTableBody.innerHTML = '';

    for (let i = 0; i < newTableElements.length; i++) {
        newTableBody.innerHTML += `
     <tr>
    <td>${i + 1}</td>
    <td>${newTableElements[i]}</td>
    </tr>`
    }
}

function concatEl() {
    let newArr = fruits.concat(newTableElements);
    newTableElements = [];
    showNewEl()
    display(newArr)
}

function filterEl() {
    let newArr = fruits.filter((check) => {
        return check.length <= 8;
    })
    display(newArr)
}


let input = document.querySelector('.search_el');
function searchInput() {
    input.style.display = 'flex'
}

function handleChange() {
    let searchedItem = fruits.filter((item) => item.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()))
    display(searchedItem);
}


function findEl() {

}













/**
 * sort
 * filter
 * splice
 * concat
 * push 
 * toLowerCase
 * includes
 * for
 * if else
 */