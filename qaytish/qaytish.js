let count = 0;
let btn = document.querySelector('button')
let body = document.querySelector('body')
btn.addEventListener('click', () => {
    count++
    let div = document.createElement('div');
    div.classList.add('text');
    body.appendChild(div);
    let h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.textContent = `text ${count}`;
    h2.addEventListener('click', () => {
        h2.parentNode.remove()
    });

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'dodgerblue'
        div.style.color = 'black'
    })
    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = 'orange'
        div.style.color = 'dodgerblue'
    })
})
