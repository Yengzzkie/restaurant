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
    "To be the preferred bakery of choice, recognized for our commitment to exceptional flavor, innovation, and warm customer experiences, as we strive to elevate the art of baking and create a community where every bite tells a story of happiness and indulgence."
    </p>
    
    
    `;

    return content;
}