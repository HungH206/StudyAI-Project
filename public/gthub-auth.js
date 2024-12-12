import { getAuth, signInWithPopup, signOut, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase-config.js"; // Use your existing config file

const provider = new GithubAuthProvider();

// Function to handle GitHub sign-in
const signInWithGitHub = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log('User Info:', user);
        console.log('GitHub Access Token:', token);
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.error('Error during sign-in:', errorCode, errorMessage, email, credential);
    }
};

// Function to handle sign-out
const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log("User signed out");
        alert("Successfully signed out!");
    } catch (error) {
        console.error("Error signing out: ", error);
    }
};

// Add event listeners to buttons
document.getElementById("signInBtn").addEventListener("click", signInWithGitHub);
document.getElementById("signOutBtn").addEventListener("click", signOutUser);