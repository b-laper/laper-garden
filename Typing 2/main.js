
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['text 1', 'text 2', 'text 3']
let word = 0
let letter = 0;
// Implementacja
const addLetter = () => {
    if (letter >= 0) {
        spnText.textContent += txt[word][letter]
    }
    if (letter <= txt[word].length) {
        letter++
    }
    if (letter === txt[word].length + 1) {
        word += 1
        letter = -15;
        spnText.textContent = ''
    }
    if (word === txt.length) {
        return 
    }

    setTimeout(addLetter, 100)
    // Użyj w środku setTimeout
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);