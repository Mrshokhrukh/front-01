let cont_1 = document.querySelectorAll('.container')[0]
let cont_2 = document.querySelectorAll('.container')[1]
let cont_3 = document.querySelectorAll('.container')[2]
let cont_4 = document.querySelectorAll('.container')[3]


let items = document.querySelectorAll('#item');
let draggedItem = null;
items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target
    })

    cont_1.addEventListener('dragover', dragover)
    cont_2.addEventListener('dragover', dragover)
    cont_3.addEventListener('dragover', dragover)
    cont_4.addEventListener('dragover', dragover)
    // ----------------------------
    cont_1.addEventListener('drop', dropItem)
    cont_2.addEventListener('drop', dropItem)
    cont_3.addEventListener('drop', dropItem)
    cont_4.addEventListener('drop', dropItem)


})

function dragover(event) {
    event.preventDefault()
}
function dropItem(event) {
    event.target.appendChild(draggedItem)
}