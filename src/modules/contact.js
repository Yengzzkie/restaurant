export default function contactContent() {
    const content = document.createElement('div');
    content.classList.add('content');

    content.innerHTML = `<h1>We look forward hearing from you</h1>`;

    return content;
}