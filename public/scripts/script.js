/*import App from './index.html';*/
import { auth } from './firebase-config.js';
import { signOut } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.getElementById('accountBtn');
    const accountSlideout = document.getElementById('accountSlideout');
    const closeSlideout = document.getElementById('closeSlideout');
    const signInBtn = document.getElementById('signInBtn');
    const signOutBtn = document.getElementById('signOutBtn');

    accountBtn.addEventListener('click', function() {
        accountSlideout.classList.add('open');
    });

    closeSlideout.addEventListener('click', function() {
        accountSlideout.classList.remove('open');
    });

    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'login.html';
    });

    signOutBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        try {
            await signOut(auth);
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Sign out error:', error);
        }
    });

    // Check if user is signed in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        signInBtn.classList.add('hidden');
        signOutBtn.classList.remove('hidden');
    } else {
        signInBtn.classList.remove('hidden');
        signOutBtn.classList.add('hidden');
    }
});

