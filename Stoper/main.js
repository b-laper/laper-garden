const div = document.querySelector('div.time div');
const startButton = document.querySelector('button.main')
const resetButton = document.querySelector('button.reset')

let time = 0;
let active = false;
let IdI;
const timer = () => {
    if (!active) {
        active = !active;
        startButton.textContent = "Pause"
        IdI = setInterval(start, 10)
    } else {
        active = !active;
        startButton.textContent = "Start";
        clearInterval(IdI);
    }
}
const start = () => {
    time++;
    div.textContent = (time / 100).toFixed(2);
}
const reset = () => {
    time = 0
    div.textContent = "---"
    active = false;
    startButton.textContent = "Start"
    clearInterval(IdI);
}
startButton.addEventListener('click', timer);
resetButton.addEventListener('click', reset)