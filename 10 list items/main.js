const button = document.querySelector('button');
const li = document.querySelectorAll('li');
let size = 10;
// const liStart = () => {
//     size++;
//     li.forEach(item => {
//         item.style.display = "block";
//         item.style.fontSize = size + "px"
//     })
// }
const liStart = () => {
    size++
    // for (item of li) {
    //     item.style.display = "block";
    //     item.style.fontSize = size + "px"
    // }
    for (let i = 0; i < 10; i++) {
        li[i].style.display = "block";
        li[i].style.fontSize = size + "px"
    }
}
button.addEventListener('click', liStart);