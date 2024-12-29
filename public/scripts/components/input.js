// Input Component
function createInput({ className, placeholder, onChange }) {
    const input = document.createElement('input');
    input.className = `px-3 py-2 border rounded ${className}`;
    input.placeholder = placeholder || '';
    if (onChange) {
        input.addEventListener('input', onChange);
    }
    return input;
}

