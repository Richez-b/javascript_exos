    // let t=document.querySelector('h1')
    // t.addEventListener('click',()=>t.innerText=t.innerText=='D.O.M EVENTS'?'--🥳--':'D.O.M Events')
    import d from "js2";

d.querySelector('h1').onclick=function(){this.innerText=this.innerText=='D.O.M EVENTS'?'--🥳--':'D.O.M Events'};


document.querySelector('input').onfocus=function(){
   this.style.background = 'red'
   this.style.color = 'white'
}
document.querySelector('input').onblur=function(){
    this.style.background = 'transparent';
 }