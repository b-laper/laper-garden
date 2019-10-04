const endTime = new Date('2019-12-01 11:00:00').getTime();

const spanD = document.querySelector('span.d')
const spanH = document.querySelector('span.h')
const spanM = document.querySelector('span.m')
const spanS = document.querySelector('span.s')

setInterval(() => {
    const nowTime = new Date().getTime();
    let days = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24))
    days = days < 10 ? '0' + days : days;

    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24)
    hours = hours < 10 ? '0' + hours : hours;

    let min = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60)
    min = min < 10 ? '0' + min : min;

    let sec = Math.floor((endTime / 1000 - nowTime / 1000) % 60)
    sec = sec < 10 ? '0' + sec : sec;

    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = min;
    spanS.textContent = sec;

}, 1000)