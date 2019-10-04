const btn = document.querySelector('button');
const btnLosuj = document.getElementById('losowanie')
const div = document.querySelector('div');
let names = [];

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    console.log(newName);
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert('To juz jest');
                input.value = '';
                return;
            }
        }
        names.push(newName);
        div.textContent = names;
        input.value = '';
    }


}
const randomName = (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random() * names.length);
    div.textContent = `Wylosowane imię to ${names[index]}`;
    names = [];
}

btn.addEventListener('click', addName);
btnLosuj.addEventListener('click', randomName);