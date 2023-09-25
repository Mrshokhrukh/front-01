// function changeColor() {
//     let val = document.querySelector('input').value
//     document.querySelector('body').style.backgroundColor = val
// };


// ---------------------ForEach------------------------

// let animDiv = document.querySelector('.animals')


// let animals = ['lion', 'tiger', 'wolve', 'snake', 'shark'];
// let places = ['africa', 'forest', 'mountain', 'lake', 'ocean'];


// let array = animals.forEach((v, i, ar) => {
//     animDiv.innerHTML += `<div class="card">
// <div class="card_top">
//   <h2>${v}</h2>
// </div>
// <div class="card_center">
//   <h3>${places[i]}</h3>
// </div>
// <div class="card_bottom">
//   <button>view more..</button>
// </div>
// </div>
// `
// })


// -----------------------------MAP-----------------------


// let animals = ['lion', 'tiger', 'wolve', 'snake', 'shark'];


// let array = animals.map((v, i, a) => {
//     return v;
// })

// console.log(array);



// ------------------------------Filter-------------------------

// let numbers = ['eshmat', 'tesha', 'qilich', 'ketmon', 'toshmat', 'bolta', 'ronaldo'];

// let newArr = numbers.filter((v, i, ar) => {
//     return v.includes('a'); // true, false
// })

// console.log(newArr);



// ------------------------------Find---------------------------

// let cars = ['damas', 'tiko', 'matiz', 'spark', 'nexia', 'cobalt', 'malibu', 'spark'];

// console.log("find", cars.find((car) => car === "nexia")); // nexia


// ------------------------------FindIndex---------------------------


// let cars = ['damas', 'tiko', 'matiz', 'spark', 'nexia', 'cobalt', 'malibu', 'spark'];

// let arr = cars.findIndex((v, i, ar) => v == 'spark')


// console.log(arr);


// ------------------------------every----------------------------

// let nums = [2, 3, 5, 6, 3, 6, 1, 7, 10, 4];


// console.log(nums.every((v, i, ar) => v > 5));


// ------------------------------some----------------------------

// let nums = [2, 3, 5, 6, 3, 6, 1, 7, 10, 4];


// nums.some((v, i, ar) => v > 5);



// -------------------------------------------

// let arr = [1, 3, 4, [10, 20, 30]]

// console.log(arr.flat());// [1, 3, 4, 10, 20, 30]




