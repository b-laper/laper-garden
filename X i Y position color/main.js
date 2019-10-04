const h1 = document.querySelector('h1')
document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  h1.textContent = `${x}, ${y}`
  const width = window.innerWidth;
  const height = window.innerHeight;
  const red = x / width * 100
  const green = y / height * 100;
  const blue = (red + green);
  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`
})
// client X od lewej krawędzi przeglądarki
// client Y od górnej krawędzi przeglądarki
// screenX i Y od krawędzi ekranu
// page X i Y mierzy od krawędzi strony