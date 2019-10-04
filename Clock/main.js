const clock = () => {
    const time = new Date();
    console.log(time.toLocaleString());
    console.log(time.toLocaleDateString());
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    document.querySelector('.clock span').textContent = `${hours < 10 ? '0'+ hours : hours} : ${minutes < 10 ? '0'+minutes : minutes} : ${seconds < 10 ? '0'+ seconds : seconds}`;
}

setInterval(clock, 1000);