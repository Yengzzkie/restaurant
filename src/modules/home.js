export default function homeContent() {
    const content = document.createElement('div');
    content.classList.add('content');

    content.innerHTML = `
    <h1>Our Mission</h1>
    <p>
    "To craft delectable, artisanal baked goods that delight our customers' taste buds, bringing joy to everyday moments through the perfect blend of quality ingredients, passion, and expertise."
    </p>
    <br>
    <h1>Our Vision</h1>
    <p>
    "To craft delectable, artisanal baked goods that delight our customers' taste buds, bringing joy to everyday moments through the perfect blend of quality ingredients, passion, and expertise."
    </p>
    
    
    `;

    return content;
}