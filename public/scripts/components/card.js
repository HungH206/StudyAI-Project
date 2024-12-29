// Card Component
export function createCard({ content, className = '' }) {
    const card = document.createElement('div');
    card.className = `bg-white shadow-md rounded-lg ${className}`;
    card.innerHTML = content;
    return card;
}

function createCardContent({ content, className }) {
    const cardContent = document.createElement('div');
    cardContent.className = `p-4 ${className}`;
    cardContent.innerHTML = content;
    return cardContent;
}

function createCardHeader({ title, className }) {
    const cardHeader = document.createElement('div');
    cardHeader.className = `p-4 border-b ${className}`;
    const headerTitle = document.createElement('h3');
    headerTitle.className = 'text-lg font-semibold';
    headerTitle.textContent = title;
    cardHeader.appendChild(headerTitle);
    return cardHeader;
}

