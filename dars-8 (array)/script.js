'use strict';
// let h1 = document.querySelector('h1');
// 13.09.2023
//  -----------------------------ARRAY METHODS---------------------------------------




// 1) ----------------------------------toString-----------------------------'



// let array = ['BMW', 'AUDI', 'TAYOTTA', 'NISSAN', 'CHEVROLET'];

// console.log(array);

// document.querySelector('h1').innerHTML = array.toString()




// 2) ----------------------------------Join-------------------------------



// let students = ['alijon', 'akobir', 'asilbek', 'muhammadjon', 'johongir', 'shohjahon (1)', 'shohjahon (2)', 'jasur', ''];


// document.querySelector('h1').innerHTML = students.join(' - ')





// 3) ----------------------------------POP-------------------------------


// let students = ['alijon', 'akobir', 'asilbek', 'muhammadjon'];

// students.pop()

// ------------task-------------

// h1.innerHTML = students.join('  ')

// function change() {
//     students.pop()
//     h1.innerHTML = students.join('  ')
// }




// 3) ----------------------------------PUSH-------------------------------



// let students = ['alijon', 'akobir', 'asilbek', 'muhammadjon', 'johongir', 'shohjahon (1)', 'shohjahon (2)', 'jasur',];

// h1.innerHTML = students.join(' ')
// function change() {
//     let input = document.querySelector('input')
//     students.push(input.value)

//     h1.innerHTML = students.join(' ')

//     input.value = ''
//     input.focus()
// }



// ----------------------------------------SHIFT---------------------------------

// let students = ['alijon', 'akobir', 'asilbek', 'muhammadjon', 'johongir', 'shohjahon (1)', 'shohjahon (2)', 'jasur',];

// students.shift() // arrayning birinchi elementini olib tashlaydi

// console.log(students);





// ----------------------------------------UNSHIFT---------------------------------


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.unshift('watermelon');

// console.log(fruits);



// ----------------------------------CONCAT------------------------------------



let team1 = ['alijon', 'akobir', 'asilbek']
let team2 = ['shohjahon', 'jasur', 'johongir']
let team3 = ['eshmat', 'toshmat', 'tesha']

let students = team1.concat(team2, team3)

// sttudents = ['alijon', 'akobir', 'asilbek', 'shohjahon', 'jasur', 'johongir']

console.log(students);





//---------------------------------------------------------------------------------------


