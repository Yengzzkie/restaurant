import homeContent from './modules/home.js';
import menuContent from './modules/menu.js';
import contactContent from './modules/contact.js';
import './styles.css';

function component(newContent) {
    const mainContent = document.getElementById('app');

    mainContent.innerHTML = '';

    mainContent.appendChild(newContent);

    return mainContent;
}

component(homeContent());

document.getElementById('home').addEventListener('click', () => component(homeContent()));
document.getElementById('menu').addEventListener('click', () => component(menuContent()));
document.getElementById('contact').addEventListener('click', () => component(contactContent()));
