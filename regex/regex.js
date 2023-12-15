
// match

// let str = 'i\'m a devtools developer';

// let res = str.match(/e/g);

// console.log(res);

// search

// let str = 'i\'m a devtools developer';

// let res = str.search(/dev/g);

// console.log(res);

// test

// let str = 'i\'m a devtools developer';

// let regex = /dev/gm;

// console.log(regex.test(str));


// replace

// -----------------------CODE-----------------------------

let form = document.getElementById('form_validate')
let res = document.querySelector('p')
let regEx = /^[a-zA-Z0-9]{6,12}$/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (regEx.test(form.username.value)) {
        res.setAttribute('class', 'success')
        res.textContent = 'muvofaqqiyatli o\'tdi';
    } else {
        res.setAttribute('class', 'error')
        res.textContent = `username a - z oraligida, kamida 6 ta, 12 tagacha bolishi kerak,
        katta harf qatnashishi va son qatnashi majburiy;
        `;
    }
});

form.username.addEventListener('keyup', (e) => {
    if (regEx.test(e.target.value)) {
        form.username.setAttribute('class', 'successInput')
        form.button.removeAttribute('class', 'disabled')
    } else {
        form.username.setAttribute('class', 'errorInput');
        form.button.setAttribute('class', 'disabled')
    }
})