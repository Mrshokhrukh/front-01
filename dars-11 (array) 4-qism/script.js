
// --------------advance array methods-------------------



// -----------------------FOREACH--------------------
// yangi array qaytarmaydi => return undefined

let array = ['apple', 'mango', 'banana', 'lemon', 'kiwi'];
let table = document.getElementById('tbody')

function ekrangaChiqarish() {
    table.innerHTML = ''
    array.forEach((v, i, a) => {
        table.innerHTML += `
    <tr> 
    <td>${i + 1}.</td>
    <td>${v}</td>
    <td> <button class="btn btn-danger" onclick="remove(${i})">delete</button> </td>
    </tr>`
    })
}
ekrangaChiqarish();


function remove(i) {
    array.splice(i, 1)
    ekrangaChiqarish()
}







// let sum = []
// array.forEach((value, index, array) => {
//     sum.push(value)
// });
// console.log(sum);




// --------------------------map------------------------
// yangi array qaytaradi => return new array


// let resp = array.map((value, index, array) => {
//     return value;
// });

// console.log(resp);

