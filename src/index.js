import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';  // Tailwind CSS
import './styles/styles.css';
import App from '../public/scripts/app';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Optional: Enable hot module replacement for development
if (module.hot) {
  module.hot.accept();
}

// Optional: Service worker registration for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(err => {
      console.log('Service worker registration failed:', err);
    });
  });
}