import muffinPNG from '../assets/muffin.png';
import croissantPNG from '../assets/croissant.png';
import granolaPNG from '../assets/granola.png';
import cakePNG from '../assets/cake.png';
import donutPNG from '../assets/doughnut.png';
import cinnamonRollPNG from '../assets/cinnamon-roll.png';

const menuItemsData = [
  { name: 'Muffin', image: muffinPNG, alt: 'muffin', price: '$4.99 per 6pcs', desc: 'Indulge in the perfect harmony of moist, flavorful goodness with our delectable muffins. Bursting with a variety of delightful flavors, each bite is a taste of pure joy.' },
  { name: 'Croissant', image: croissantPNG, alt: 'croissant', price: '$3.99 per 12pcs', desc: 'Elevate your morning routine with our flaky, buttery croissants. Delight in the golden layers of pastry that envelop a rich, indulgent filling, creating a truly exquisite experience.' },
  { name: 'Granola Bars', image: granolaPNG, alt: 'granola', price: '$6.99 per 24pcs', desc: 'Fuel your day with our wholesome granola bars, crafted with a blend of hearty oats, nuts, and sweet natural ingredients. A nutritious and convenient snack that satisfies both your taste buds and your well-being.' },
  { name: 'Donut', image: donutPNG, alt: 'donut', price: '$12.99 per 12pcs', desc: 'Dive into a world of irresistible sweetness with our freshly baked doughnuts. Glazed to perfection and filled with an array of delightful fillings, these treats are a symphony of flavors that will leave you craving more.' },
  { name: 'Cake', image: cakePNG, alt: 'cake', price: '24.99 per piece', desc: 'Celebrate life\'s sweet moments with our decadent cakes. From classic flavors to innovative creations, our cakes are crafted with passion and precision, ensuring every slice is a celebration in itself.' },
  { name: 'Cinnamon Roll', image: cinnamonRollPNG, alt: 'cinnamon-roll', price: '$7.99 per 6pcs', desc: 'Unwind and savor the comforting warmth of our cinnamon rolls. Soft, doughy layers swirl around a perfect blend of cinnamon and sugar, topped with a luscious glaze for a truly comforting and indulgent experience.' }
];

export default function menuContent() {
  const content = document.createElement('div'); // menu container
  content.classList.add('content');

  content.innerHTML = `<h1>Our Menu</h1>`;

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuItemsData.forEach(itemData => {
    const menuItem = document.createElement('div'); // item container
    const menuDesc = document.createElement('p');
    const menuPrice = document.createElement('span');
    menuItem.classList.add('menu-items');

    const image = new Image(); // image
    image.src = itemData.image;
    image.alt = itemData.alt;
    menuItem.innerHTML = `<h2>${itemData.name}</h2>`;
    menuDesc.textContent = `${itemData.desc}`;
    menuPrice.textContent = `${itemData.price}`;
    menuItem.appendChild(image);
    menuItem.appendChild(menuDesc);
    menuItem.appendChild(menuPrice);

    menuContainer.appendChild(menuItem)
    content.appendChild(menuContainer);
  });

  return content;
}
