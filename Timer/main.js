const timer = () => {
    let time = 0;
    return () => {
        setInterval(() => {
            time++;
            document.body.textContent = `Active time: ${time} sec`;

        }, 1000)
    }
}

let add = timer();

this.addEventListener('focus', add);
this.addEventListener('blur', function () {
    for (let i = 0; i < 9999; i++) {
        clearInterval(i)
    }
})