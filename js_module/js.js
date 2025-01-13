import { moduleHello } from './module.js';
import { changeTitle } from './module.js';
import { footer } from './footerService.js';

moduleHello('jojo');

let divFooter = document.querySelector('footer')
footer(divFooter,'2025');

console.log('test')
let title = document.querySelector('h1')
if(window.location.pathname === '/js_module/' || window.location.pathname === './js_module/index.html'){
    changeTitle(title,);
}

let dark = document.querySelector('html');
let darkButton = document.querySelector('#dark')
darkButton.addEventListener('click', () => {
    let currentTheme = dark.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        dark.setAttribute('data-bs-theme', 'light'); // Retour au mode clair
    } else {
        dark.setAttribute('data-bs-theme', 'dark'); // Passage au mode sombre
    }
});