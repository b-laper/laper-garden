const square = document.createElement('div');
document.body.appendChild(square);
let size = 0;
let grow = true;
window.addEventListener('scroll', function () {
    square.style.width = size + 'px';
    square.style.height = size + 'px';

    if (size >= this.innerWidth / 2) {
        grow = false;
    } else if (size == 0) {
        grow = true;
    }

    if (grow) {
        size += 5
    } else {
        size -= 5
    }
})