import homeContent from './modules/home.js';
import menuContent from './modules/menu.js';
import contactContent from './modules/contact.js';
import headerContent from './modules/header.js';
import './styles.css';

// main content module
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

// header module
function headerComponent() {
    const header = document.querySelector('header');
    header.innerHTML = '';
    header.appendChild(headerContent());
};

headerComponent();

// tab highlighter
document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });

            // Add 'active' class to the clicked item
            item.classList.add('active');
        });
    });
});
