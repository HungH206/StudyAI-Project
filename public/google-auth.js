import { GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase-config.js"; // Use your config file

const provider = new GoogleAuthProvider();

// Sign in function
function signInUser() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User signed in: ", result.user);
      alert(`Welcome, ${result.user.displayName}!`);
    })
    .catch((error) => {
      console.error("Error signing in: ", error);
    });
}

// Sign out function
function signOutUser() {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      alert("Successfully signed out!");
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
}

// Add event listeners to buttons
document.getElementById("signInBtn").addEventListener("click", signInUser);
document.getElementById("signOutBtn").addEventListener("click", signOutUser);
