    // let t=document.querySelector('h1')
    // t.addEventListener('click',()=>t.innerText=t.innerText=='D.O.M EVENTS'?'--🥳--':'D.O.M Events')


document.querySelector('h1').onclick=function(){this.innerText=this.innerText=='D.O.M EVENTS'?'--🥳--':'D.O.M Events'};


document.querySelector('input').onfocus=function(){
   if(this.onfocus){
       this.style.background = 'red'

   }
}