import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase_config.js';
export { onAuthStateChanged, auth };

export const signInUser = (email, password) =>
	signInWithEmailAndPassword(auth, email, password);
