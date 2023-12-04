let containers = document.querySelectorAll('.container')
let cont_first = document.querySelectorAll('.container')[0]
let add = document.getElementById('add_item')
let items = document.querySelectorAll('#item');
let draggedItem = null;

let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let itemDiv = document.createElement('div');
    itemDiv.setAttribute('draggable', 'true');
    itemDiv.id = 'item'
    itemDiv.textContent = add.value
    add.value = '';
    cont_first.appendChild(itemDiv)
    items = document.querySelectorAll('#item')
    render()
})


function render() {
    items.forEach((item) => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            draggedItem.classList.add('dragging');
        })
        item.addEventListener('dragend', (e) => {
            draggedItem = null;
            e.target.classList.remove('dragging')
        })
    })

}

containers.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault()
        box.classList.add('accept');
    })
    box.addEventListener('dragleave', () => {
        box.classList.remove('accept');
    })
    box.addEventListener('drop', () => {
        box.classList.remove('accept');
        box.append(draggedItem)
    })
})