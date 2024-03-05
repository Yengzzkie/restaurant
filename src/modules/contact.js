export default function contactContent() {
    const content = document.createElement('div');
    const form = document.createElement('form');

    content.classList.add('content');

    content.innerHTML = `<h2>We look forward hearing from you</h2>`;
    form.innerHTML = `
    <div class="input-wrapper">
        <input type="text" id="username" required>
        <label for="username">Username</label>
    </div>
        
    <div class="input-wrapper">
        <input type="email" id="email" required>
        <label for="email">Email</label>
    </div>

    <div class="input-wrapper">
        <input type="number" id="tel" required>
        <label for="tel">Phone #</label>
    </div>

    <div class="input-wrapper">
        <textarea id="concerns" name="concerns" rows="10" cols="50"></textarea>
        <label for="comment">Comment:</label>
    </div>

    <button>Submit</button>
    `;

    content.appendChild(form);

    return content;
}