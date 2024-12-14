import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User logged in:', user.email);
            
            // Store user info in localStorage
            localStorage.setItem('user', JSON.stringify({
                email: user.email,
                uid: user.uid,
                firstName: user.displayName ? user.displayName.split(' ')[0] : 'User'
            }));

            // Redirect to the welcome page
            window.location.href = 'welcomePage.html';
        } catch (error) {
            console.error('Login failed:', error.message);
            alert('Login failed. Please check your credentials.');
        }
    });
});

