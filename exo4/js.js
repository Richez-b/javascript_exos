// * Mini test pour capter event du Clavier
let input = document.querySelector('textarea');
let div = document.querySelector('div');

input.addEventListener('keydown',(e)=>{
    console.log(e.key)
    if(e.key=='Enter'){
        saut = document.createElement('br');
        div.append(saut)
    }
})

input.addEventListener('input',(e)=>{
    localStorage.setItem("monSuperTexte",div.innerHTML = e.target.value); 
});

monTexte = localStorage.getItem('monSuperTexte');
input.textContent = monTexte;
div.innerHTML = monTexte;