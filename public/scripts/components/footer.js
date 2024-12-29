export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer bg-gray-800 text-white py-4 text-center';
    footer.innerHTML = `
        <p>&copy; 2024 Studiwell. All rights reserved.</p>
    `;
    return footer;
}