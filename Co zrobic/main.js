const buttonAdd = document.querySelector('button.add');
const buttonReset = document.querySelector('button.clean');
const buttonAdvice = document.querySelector('button.showAdvice');
const buttonOption = document.querySelector('button.showOptions');
const h1 = document.querySelector('h1');
let array = [];
let advices = ['Zrób to!!', "Rzuć monetą", 'Uciekaj!']

const input = document.querySelector('input');

const addToArray = (e) => {
    e.preventDefault();
    const text = input.value;
    for (item of array) {
        if (item === text) {
            alert('To już mamy:)');
            input.value = '';
            return
        }
    }
    if (text.length > 0 && text !== '') {
        array.push(text);
        alert(text);
        console.log(text);
        input.value = ''
    }

}
const cleanArray = (e) => {
    e.preventDefault();
    array = '';
}
buttonAdd.addEventListener('click', addToArray);
buttonReset.addEventListener('click', cleanArray);
buttonOption.addEventListener('click', (e) => {
    e.preventDefault();
    if (array.length > 0) {
        alert(array.join(' | '));
        h1.textContent = '';
    }
})
buttonAdvice.addEventListener('click', (e) => {
    h1.textContent = advices[Math.floor(Math.random() * advices.length)]
})


function random(min, max) {
    return Math.random() * (max - min) + min;
}

function silnia(n) {
    if (n === 1) {
        return 1
    } else {
        return n * silnia(n - 1)
    }
}