const showText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const text = 'The Frieza Force, also referred to as the Galactic Frieza Army, Planet Trade Organization, and previously the Cold Force, is the organization run by Frieza, that at the peak of its power controlled a majority of Universe 7, who through the Frieza Force acts as emperor of the universe. King Cold was the leader of the Cold Force, prior to passing control over to his son causing it to be renamed the Frieza Force. The army employs and enslaves powerful races, such as the Saiyans, to take over suitable planets so that they can be sold to the highest bidders. Frieza himself does not really consider his soldiers as an army, looking at them more as a convenient group of followers. In reality, the soldiers follow him and his relatives out of fear though some soldiers are known to be fiercely loyal to Frieza such as the Ginyu Force. Frieza runs the Frieza Force as a meritocracy.'
let number = 0;

function typing() {
    showText.textContent += text[number]
    number++
    if (number === text.length) {
        clearInterval(interval);
    }
};

const interval = setInterval(typing, 1);
setInterval(function () {
    cursor.classList.toggle('textRemove');
}, 300)