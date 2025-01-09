const loginInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const userMessage = document.querySelector('#userMessage');

loginInput.addEventListener('keyup',()=>{ 
 // Ajoute un écouteur d'événements pour détecter les frappes de touches sur le champ de saisie de l'email
 const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
 // Définit une expression régulière pour valider le format de l'email
 if(regexMail.test(loginInput.value)){ 
   loginInput.style.backgroundColor = 'lightgreen'; 
   // Change la couleur de fond en rouge si l'email est invalide
 }
 else{  // Vérifie si la valeur saisie ne correspond pas à l'expression régulière
   loginInput.style.backgroundColor = 'red'; // Change la couleur de fond en vert
 }
})

// passwordInput.addEventListener('keyup',()=>{
//     const charDecimal = /\d/;
//     const charSpecial = /[$&@!]/;
//     let errorMessage ='';
    
//     if(passwordInput.value.length<6){
//       errorMessage+='<li>Le Mot de passe trop COURT</li>'
//     }
//     else if(passwordInput.value.length>8){
//       errorMessage+='<li>Le Mot de passe trop LONG</li>'
//     }
  
//     if(!passwordInput.value.match(charDecimal)){
//       errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
//     }
//     if(!passwordInput.value.match(charSpecial)){
//       errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
//     }
//     if(errorMessage!==''){
//       userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
//       userMessage.style.border ='5px solid red'
//     }
//     else{
//       userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
//       userMessage.style.border ='5px solid green'
//     }
// });

passwordInput.addEventListener('keyup', () => {
    const errors = [];
    if (passwordInput.value.length < 6) errors.push('trop COURT');
    if (passwordInput.value.length > 8) errors.push('trop LONG');
    if (!/\d/.test(passwordInput.value)) errors.push('doit contenir 1 chiffre');
    if (!/[$&@!]/.test(passwordInput.value)) errors.push('doit contenir 1 caractère spécial (@,&,!,$)');
  
    userMessage.innerHTML = errors.length 
      ? `Le mot de passe : <ul><li>${errors.join('</li><li>')}</li></ul>` 
      : 'Le mot de passe est valide ! 👍';
    userMessage.style.border = `5px solid ${errors.length ? 'red' : 'green'}`;
  });
