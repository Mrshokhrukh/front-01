


// let obj1 = { loc: 'samarqand', num: 25, id: 1 };

// let obj2 = structuredClone(obj1);

// obj2.founded = 1900;

// console.log(obj1);
// console.log(obj2);

// murojat qilish yo'llari

// car.name
// car['name']

// let car = { id: 1, name: 'BMW', hp: 200, price: 1200, major: 'sport car' };

// let key = 'major';

// console.log(car[key]);

// for in

// let car = { id: 1, name: 'BMW', hp: 200, price: 1200, major: 'sport car' };
// let car2 = { id: 2, name: 'Audi', hp: 300, price: 1500, major: 'sport car' };

// for (x in car) {
//     car[x] = car2[x];
// }
// console.log(car2);


// -------- object methods ------

// let obj = {
//     id: "1",
//     firstName: 'John ',
//     lastName: ' Doe',
//     lang: ['english', 'uzbek', 'russian'],
//     run() {
//         return this.firstName;
//     }
// }
// console.log(`${obj.run()} is running`);



// let obj = {
//     id: "1",
//     firstName: 'John ',
//     lastName: ' Doe',
//     lang: ['english', 'uzbek', 'russian'],
//     run() {
//         return this;
//     }
// }

// console.log(obj.run());




// let std1 = {
//     name: 'eshmat',
//     surname: 'toshmatov',
//     age: 54
// }

// let std2 = {
//     name: 'John',
//     surname: 'Doe',
//     age: 24
// }

// let std3 = {
//     name: 'tesha',
//     surname: 'ketmon',
//     age: 76
// }



// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// let std1 = new Person('eshmat', 'toshmatov', 54);
// let std2 = new Person('john', 'doe', 24);
// let std3 = new Person('ketmon', 'doe', 24);




// let nums = [10, 20, 30, 40, 50, 60];

// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
// }
// console.log(sum);

// -------------------------------

// let sum = nums.reduce((acc, val) => acc + val, 0);

// console.log(sum);



// let arr = [
//     {
//         id: 1,
//         name: 'Johongir',
//         grade: 60
//     }, {
//         id: 2,
//         name: 'Shohjahon',
//         grade: 50
//     },
//     {
//         id: 3,
//         name: 'Akobir',
//         grade: 40
//     },
//     {
//         id: 4,
//         name: 'Alijon',
//         grade: 70
//     },
//     {
//         id: 5,
//         name: 'Jasur',
//         grade: 55
//     }
// ]


// -----------------sort by alpha-------------------


// arr.sort((a, b) => {
//     return a.name.localeCompare(b.name)
// })

// console.log(arr);


// -----------------sort by num-------------------


// arr.sort((a, b) => {
//     return a.grade - b.grade
// })

// console.log(arr);

// ------------------------------------------------

// let arr = [
//     {
//         id: 1,
//         name: 'Johongir',
//         grade: 60
//     }, {
//         id: 2,
//         name: 'Shohjahon',
//         grade: 50
//     },
//     {
//         id: 3,
//         name: 'Akobir',
//         grade: 40
//     },
//     {
//         id: 4,
//         name: 'Alijon',
//         grade: 70
//     },
//     {
//         id: 5,
//         name: 'Jasur',
//         grade: 55
//     }
// ]


// let tableBody = document.querySelector('tbody');


// arr.map((v, i, a) => {
//     return (
//         tableBody.innerHTML += `
//         <tr>
//         <td>${v.id}</td>
//         <td>${v.name}</td>
//         <td>${v.grade}</td>
//         </tr>
//         `
//     )
// })