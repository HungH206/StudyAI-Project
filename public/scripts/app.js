
import { createCard } from './components/card.js';
import { createLayout } from './components/layout.js';
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';

// Main application logic
function initializeApp() {
    const appRoot = document.getElementById('app');

    // Create the header, footer, and main content
    const header = createHeader({
        toggleSlideout: () => console.log('Toggle Slideout'),
    });

    const footer = createFooter();

    const mainContent = `
     <div class="hero-content text-center p-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to Studiwell</h1>
            <p class="text-xl text-gray-700 mb-8">
                A Study Companion With Mental Health Tracking Functionality,<br>
                Powered by Azure software with AI integration.
            </p>
            <p class="text-xl text-gray-700 mb-8">
                This app is currently operate in the demo version.
            </p>
            <a href="login.html" class="btn bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Try out now</a>
            <p class="text-gray-700 mt-4" style="margin-top: 0.75rem; margin-bottom: 0.75rem;">Or<br></p>
            <a href="welcomePage.html" class="btn bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">View Demo Here!</a>
        </div>
`;
    const card = createCard({
         content: mainContent,
        imageUrl: 'images/Group 33.png',
    });
    // Create the layout
    const layout = createLayout({
        header: header.outerHTML,
        children: card.outerHTML,
        footer: footer.outerHTML,
    });

    // Append the layout to the app root
    appRoot.appendChild(layout);
}

// Initialize the app when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
