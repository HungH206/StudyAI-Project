import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const signupBtn = document.getElementById('signupBtn');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const confirmPassword = signupForm.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Passwords don't match. Please try again.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed up:', user.email);
            
            // Store user info in localStorage
            localStorage.setItem('user', JSON.stringify({
                email: user.email,
                uid: user.uid
            }));

            // Redirect to the welcome page
            window.location.href = 'welcomePage.html';
        } catch (error) {
            console.error('Signup failed:', error.message);
            alert('Signup failed. ' + error.message);
        }
    });
});

