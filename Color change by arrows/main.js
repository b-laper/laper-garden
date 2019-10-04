/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


const changeColor = (e) => {
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(red, green, blue, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół
  // if (e.which === 38) {
  //   red < 255 ? red++ : red;
  //   green < 255 ? green++ : green;
  //   blue < 255 ? blue++ : blue;
  // } else if (e.which === 40) {
  //   red >= 1 ? red-- : red;
  //   green >= 1 ? green-- : green;
  //   blue >= 1 ? blue-- : blue;
  // }
  switch (e.which) {
    case 38:
      red < 255 ? red++ : red;
      green < 255 ? green++ : green;
      blue < 255 ? blue++ : blue;
      break;
    case 40:
      red >= 1 ? red-- : red;
      green >= 1 ? green-- : green;
      blue >= 1 ? blue-- : blue;
      break;
  }
  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // wersja 2 - instrukcja switch

}

window.addEventListener('keydown', changeColor)