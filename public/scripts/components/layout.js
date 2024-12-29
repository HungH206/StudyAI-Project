// Layout Component
export function createLayout({ header, children, footer }) {
    const layout = document.createElement('div');
    layout.className = 'min-h-screen flex flex-col bg-custom-green';

    const headerElement = document.createElement('header');
    headerElement.innerHTML = header;
    headerElement.className = 'bg-white shadow-md';

    const main = document.createElement('main');
    main.className = 'flex-grow';
    main.innerHTML = children;

    const footerElement = document.createElement('footer');
    footerElement.innerHTML = footer;
    footerElement.className = 'bg-gray-800 text-white py-4 text-center';

    layout.appendChild(headerElement);
    layout.appendChild(main);
    layout.appendChild(footerElement);

    return layout;
}

