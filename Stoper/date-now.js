// http://websamuraj.pl/examples/js/projekt11/
const div = document.querySelector('div.time div');
const startButton = document.querySelector('button.main')
const resetButton = document.querySelector('button.reset')
let time = Date.now();

const pause = () => {
    startButton.textContent = "Start";
    startButton.removeEventListener('click', pause);
    startButton.addEventListener('click', timer)
    for (let i = 0; i < 9999; i++) {
        clearInterval(i);
    }

}

function timer() {
    for (let i = 0; i < 9999; i++) {
        clearInterval(i);
    }
    startButton.textContent = "Pause";
    startButton.removeEventListener('click', timer)
    setInterval(function () {
        let currentTime = Date.now();
        let stoper = (currentTime - time) / 1000;
        div.textContent = stoper.toFixed(2);
    }, 10)
    if (startButton.textContent === "Pause") {
        startButton.addEventListener('click', pause)
    }
}
startButton.addEventListener('click', timer)
resetButton.addEventListener('click', () => {
    time = Date.now();
    for (let i = 0; i < 9999; i++) {
        clearInterval(i);
    }
    stoper = 0;
    div.textContent = '---';
    startButton.addEventListener('click', timer)
    startButton.textContent = "Start";


})