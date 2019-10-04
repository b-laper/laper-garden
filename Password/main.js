const input = document.getElementById('pass');
const div = document.querySelector('div');
const passwords = ['user', 'password'];
const messages = ['Wygrałeś 25 miliardów', 'Człowiek, który był'];
input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text.toLowerCase()) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
})
input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})