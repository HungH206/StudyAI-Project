import { auth } from './firebase-config.js';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const googleLoginBtn = document.getElementById('googleLoginBtn');

    googleLoginBtn.addEventListener('click', async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google sign-in successful:', user.email);
            
            localStorage.setItem('user', JSON.stringify({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                firstName: user.displayName ? user.displayName.split(' ')[0] : 'User'
            }));

            window.location.href = 'welcomePage.html';
        } catch (error) {
            console.error('Google sign-in failed:', error);
            alert('Google sign-in failed. Please try again.');
        }
    });
});

