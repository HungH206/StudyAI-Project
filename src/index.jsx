import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';  // Tailwind CSS
import './styles/styles.css';  // Correct path to the CSS file in the src/styles folder
import App from './components/app';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
