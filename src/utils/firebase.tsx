// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import StyledFirebaseAuth from "../components/StyledFirebaseAuth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ! DO NOT CHANGE THIS FILE.

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnYXTrIyou5sVFQYqw1_s1Y3cEb9-0diw",
  authDomain: "t4sg-f22-deliv.firebaseapp.com",
  projectId: "t4sg-f22-deliv",
  storageBucket: "t4sg-f22-deliv.appspot.com",
  messagingSenderId: "507266397052",
  appId: "1:507266397052:web:8b3eefbbf5c6af78bceaf9",
  measurementId: "G-L6H014ZLGT",
};

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Github as auth providers.
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Export FirebaseUI signin screen
export function SignInScreen() {
  return (
    <div>
      <h1>Sign in to Links for Climate Good</h1>
      <p>Please sign-in with your Github account:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}
