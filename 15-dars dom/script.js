
let form = document.querySelector('form')
let inputValue = document.querySelector('form input')
let getListDiv = document.querySelector('.lists')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (inputValue.value) {
        let input = document.createElement('input');
        input.type = "text";
        input.value = inputValue.value;
        input.setAttribute('readonly', 'readonly');

        let editBtn = document.createElement('button');
        editBtn.textContent = 'edit'
        editBtn.classList.add("edit_btn")
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete_btn")
        deleteBtn.textContent = 'delete';

        let todo_item = document.createElement('div')
        todo_item.classList.add('todo_item')

        todo_item.appendChild(input)

        todo_item.appendChild(editBtn)
        todo_item.appendChild(deleteBtn)

        getListDiv.appendChild(todo_item)

        inputValue.value = '';

        deleteBtn.addEventListener('click', () => {
            getListDiv.removeChild(todo_item)
        });

        editBtn.addEventListener('click', () => {
            if (editBtn.textContent == 'edit') {
                input.removeAttribute('readonly', 'readonly');
                input.classList.add('editing')
                editBtn.textContent = 'save';
            } else {
                input.setAttribute('readonly', 'readonly');
                input.classList.remove('editing')
                editBtn.textContent = 'edit';
            }
            input.focus();
        })

    } else {
        alert('type something')
    }

})

