
let find = document.getElementById('find')
let textToChange = document.getElementById('change')
let p = document.querySelector('p')

function change() {
    let newRegex = new RegExp(find.value, 'gi');
    let newStr = p.innerText.replace(newRegex, textToChange.value)
    p.innerText = newStr;
}



