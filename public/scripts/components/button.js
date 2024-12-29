// Button Component
function createButton({ text, className, asLink, onClick }) {
    const element = document.createElement(asLink ? 'a' : 'button');
    element.textContent = text;
    element.className = `px-4 py-2 rounded font-medium ${className}`;
    if (onClick) {
        element.addEventListener('click', onClick);
    }
    return element;
}

