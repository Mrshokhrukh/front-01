let text = document.querySelector('h2');
let input = document.getElementById('date');

let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// year: ${date.getFullYear()} <br>
// month: ${date.getMonth() + 1} <br>
// day: ${date.getDate()} <br>
// week: ${weekdays[date.getDay() - 1]} <br>

// ${date.getHours()} :
// ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} : 
// ${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()} 

// let counter = 0;

// let interval = setInterval(() => {
//     counter++
//     text.innerHTML = new Date().getSeconds().toLocaleString()
// }, 1000)


function showDate() {
    text.innerHTML = '15:28:34'
};


// let body = document.body;
// let interval = null;

// let intFunc = (para) => {
//     if (para == 'cont') {
//         interval = setInterval(() => {
//             startChanging();
//         }, 1000);
//     }
//     if (para == 'stop') {
//         console.log('stopped');
//         clearInterval(interval);
//     }
// }
// function start() {
//     intFunc('cont');
// }
// function stop() {
//     intFunc('stop')
// }

// function startChanging() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     body.style.backgroundColor = `rgb(${red},${green},${blue})`
// }