// Card Component
export function createCard({ content, imageUrl, className = '' }) {
    const card = document.createElement('div');
    card.className = `bg-white shadow-md rounded-lg p-6 mb-8 ${className}`;
    card.innerHTML = `
        ${content}
       ${imageUrl ? `<div class="flex justify-center mt-4"><img src="${imageUrl}" alt="Card Image" class="w-1/2 h-auto rounded-lg"></div>` : ''}
    `;
    return card;
}

export function createCardContent({ content, className }) {
    const cardContent = document.createElement('div');
    cardContent.className = `p-4 ${className}`;
    cardContent.innerHTML = content;
    return cardContent;
}

export function createCardHeader({ title, className = " " }) {
    const cardHeader = document.createElement('div');
    cardHeader.className = `p-4 border-b ${className}`;
    const headerTitle = document.createElement('h3');
    headerTitle.className = 'text-lg font-semibold';
    headerTitle.textContent = title;
    cardHeader.appendChild(headerTitle);
    return cardHeader;
}

