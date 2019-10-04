const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h3 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('form input');
const searcher = document.querySelector('.searcher');
let ulHtml;

const addTask = (e) => {
    e.preventDefault()
    const task = input.value;
    if (task == '') return
    const li = document.createElement('li');
    li.innerHTML = task + ' <button>Delete</button>';
    li.classList = 'task';
    ul.appendChild(li);
    input.value = '';
    taskNumber.textContent = listItems.length;
    li.querySelector('button').addEventListener('click', removeTask);
    ulHtml = ul.innerHTML;

}
const searchTask = (e) => {
    const search = e.target.value.toLowerCase();
    let searchLi = [...listItems];
    ul.textContent = '';
    searchLi = searchLi.filter(li =>
        li.textContent.toLowerCase().includes(search))
    searchLi.forEach(li => ul.appendChild(li));
    if (search.length < 1) {
        ul.innerHTML = ulHtml;
    }
    document.querySelectorAll('li').forEach(li => li.addEventListener('click', removeTask))

}


const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

form.addEventListener('submit', addTask);
searcher.addEventListener('input', searchTask);