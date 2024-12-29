import { auth } from './firebase-config.js';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';

document.addEventListener('DOMContentLoaded', () => {
    const githubLoginBtn = document.getElementById('githubLoginBtn');

    githubLoginBtn.addEventListener('click', async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('GitHub sign-in successful:', user.email);
            
            localStorage.setItem('user', JSON.stringify({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                firstName: user.displayName ? user.displayName.split(' ')[0] : 'User'
            }));

            window.location.href = 'welcomePage.html';
        } catch (error) {
            console.error('GitHub sign-in failed:', error);
            alert('GitHub sign-in failed. Please try again.');
        }
    });
});


