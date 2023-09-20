// ==>  splice (+)
// ==>  includes (+)
// ==>  lastIndexOf (+)
// ==>  slice (+)
// ==>  indexOf (+)
// ==>  shift (+)
// ==>  unshift (+)
// ==>  toString (+)
// ==>  pop (+)
// ==>  push (+)
// ==>  concat (+)
// ==>  join (+)
// ==>  split (+)

// -------------------

// ==>  at (+)
// ==>  length (+)
// ==>  reverse (+)
// ==>  sort (+)
// ==>  toLowercase (+)

// -----------------------

// ==>  forEach (-)
// ==>  map (-)
// ==>  filter (-)
// ==>  find (-)
// ==>  findIndex (-)
// ==>  every (-)
// ==>  some (-)
// ==>  reduce (-)



// let a = [2, 4, 3, 5, 7, 8, 9] // -1 oxirgisi

// console.log(a.splice(-1));
// console.log(a.at(-3));


// let str = ['damas', 'tiko', 'matiz', 'spark', 'nexia'];

// console.log(str);
// console.log(str.reverse());


// plans for: 18.09.2023, sort,  for / for in / for of



// -------------------------sort---------------------------

// number
// alpha

// let str = [1, 2, 4, 8, 9, 10, 3, 7];

// str.sort((a, b) => b - a)

// console.log(str);


// loop

// -----------------------for loop------------------------

// let ism = ['eshmat', 'toshmat', 'ketmon', 'tesha', 'qilich', 'ketmon', 'tesha', 'qilich']

// for (let i = 0; i < ism.length; i++) {
//     console.log('salom', ism[i]);
// }


// i = 0
// i = 1
// i = 2
// i = 3


//  task => n gacha bo'lgan sonlarni yig'indisini chiqaring


// function app(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i; // sum = sum + i;
//     }
//     console.log(sum);
// }
// app(10);



// ---------------------------- for in --------------------------------- es6


// let ism = ['eshmat', 'toshmat', 'ketmon', 'tesha', 'qilich', 'ketmon', 'tesha', 'qilich']

// for (let b in ism) {
//     console.log(b);
// }

// for (let b of ism) {
//     console.log(b);
// }


// let arr = ['a', 'b', 'c']

// arr[3] = 'd';

// console.log(arr);


// let ism = ['eshmat', 'toshmat', 'ketmon'];

// let foo = ism;

// foo.pop();

// ------------------

// console.log(ism); // eshmat toshmat ketmon | qilich

// let a = 10;

// let b = a;

// b = 20;

// console.log(a); // 10


// ----------------------toLoweCase------------------


// let str = 'EsHmat Toshmatov'

// console.log(str.toLowerCase());