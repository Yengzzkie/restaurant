import muffinPNG from '../assets/muffin.png';
import croissantPNG from '../assets/croissant.png';
import granolaPNG from '../assets/granola.png';
import cakePNG from '../assets/cake.png';
import donutPNG from '../assets/doughnut.png';

const menuItemsData = [
  { name: 'Muffin', image: muffinPNG, alt: 'muffin', desc: 'Delicious Muffin!' },
  { name: 'Croissant', image: croissantPNG, alt: 'croissant', desc: 'Delicious Croissant!' },
  { name: 'Granola', image: granolaPNG, alt: 'granola', desc: 'Delicious Granola!' },
  { name: 'Donut', image: donutPNG, alt: 'donut', desc: 'Delicious Doughnut!' },
  { name: 'Cake', image: cakePNG, alt: 'cake', desc: 'Delicious Cake!' }
];

export default function menuContent() {
  const content = document.createElement('div'); // menu container
  content.classList.add('content');

  content.innerHTML = `<h1>Our Menu</h1>`;

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuItemsData.forEach(itemData => {
    const menuItem = document.createElement('div'); // item container
    const menuDesc = document.createElement('p')
    menuItem.classList.add('menu-items');

    const image = new Image(); // image
    image.src = itemData.image;
    image.alt = itemData.alt;
    menuItem.innerHTML = `<h2>${itemData.name}</h2>`;
    menuDesc.textContent = `${itemData.desc}`;
    menuItem.appendChild(image);
    menuItem.appendChild(menuDesc);

    menuContainer.appendChild(menuItem)
    content.appendChild(menuContainer);
  });

  return content;
}
