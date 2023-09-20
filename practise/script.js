
let cars = ['Spark🚙', 'Damas🚐', 'Labo🚚', 'Gentra🚐', 'Cobolt🚕', 'Onix🚔', 'Traker🚙', 'Captiva🚓',
    'Malibu🚖',
    'Tahoe🚗'];

let carList = ['spark', 'damas', 'labo', 'gentra', 'cobalt', 'onix', 'tracker', 'captiva', 'malibu', 'tahoe']
let output = document.querySelector('.cars')
let bought = document.getElementById('buy')
let cart = document.getElementById('cart')
output.innerHTML = `<h1> ${cars.join('')} </h1>`

function searchCars() {
    let input = document.querySelector('input')
    input = input.value.toLowerCase();
    let index = carList.indexOf(input);

    if (carList.includes(input)) {
        let a = cars.splice(index, 1)
        carList.splice(index, 1)
        bought.innerHTML = `salonda bunday mashina topildi: ${a}`;
        cart.innerHTML += `<p>${a}</p>`;
        output.innerHTML = `<h1> ${cars.join('')} </h1>`
    } else {
        bought.innerHTML = `salonda bunday mashina topilmadi 😕`
    }
}