// * Mini test pour capter event du Clavier
let input = document.querySelector('textarea');
let div = document.querySelector('div');

input.addEventListener('input',(e)=>{
    localStorage.setItem("monSuperTexte",div.innerHTML = e.target.value); 
});

monTexte = localStorage.getItem('monSuperTexte');
input.textContent = monTexte;
div.innerHTML = monTexte;


VANTA.GLOBE({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xf0eeee,
    color2: 0xc0b0b,
    size: 0.60,
    backgroundColor: 0xb69b91});