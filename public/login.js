import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Reference to login form and button
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');

// Login event
loginBtn.addEventListener('click', async (e) => {
    e.preventDefault(); // Prevent form submission

    // Get user inputs
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
        // Firebase authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User logged in:', user.email);

        // Redirect to the welcome page
        window.location.href = 'welcomePage.html';
    } catch (error) {
        console.error('Login failed:', error.message);
        alert('Login failed. Please check your credentials.');
    }
});
