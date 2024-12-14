import { auth } from './firebase-config.js';
import { signOut } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const signOutBtn = document.getElementById('signOutBtn');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.firstName) {
        welcomeMessage.textContent = `Welcome, ${user.firstName}!`;
    } else if (user) {
        welcomeMessage.textContent = `Welcome, ${user.email}!`;
    } else {
        // If no user is logged in, redirect to the login page
        window.location.href = 'login.html';
    }

    signOutBtn.addEventListener('click', async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Sign out error:', error);
            alert('An error occurred while signing out. Please try again.');
        }
    });
});

