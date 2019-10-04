const button = document.querySelector('button');
const section = document.querySelector('section');

const chars = 'ABCDEFGIJKLMN0123456789';

const codesNumber = 1000;
const charsNumber = 10;

const codesGen = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index];
        }
        const div = document.createElement('div');
        section.appendChild(div);
        div.textContent = code;
    }
}
button.addEventListener('click', codesGen);