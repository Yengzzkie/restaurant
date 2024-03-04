import croissant from '../assets/croissant.png';

export default function headerContent() {
    const headerContent = document.createElement('div');
    headerContent.classList.add('header-container');

    const logo = new Image();
    logo.src = croissant;
    logo.alt = 'croissant';

    headerContent.innerHTML = `
        <h2>Kwah-song</h2>
    `;

    headerContent.appendChild(logo);

    return headerContent;
};


// header logo
// const logo = new Image();
// logo.src = logoImage;
// logo.alt = 'Logo';
// header.appendChild(logo);