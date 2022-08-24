import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	OAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase_config.js';
export { onAuthStateChanged, auth };

export const provider = new OAuthProvider('microsoft.com');
export const signInUser = (email, password) =>
	signInWithEmailAndPassword(auth, email, password);

export const loginMicrosoft = () => {
	return signInWithPopup(auth, provider)
		.then(result => {
			console.log('funcionaaa');
			// User is signed in.
			// IdP data available in result.additionalUserInfo.profile.

			// Get the OAuth access token and ID Token
			const credential = OAuthProvider.credentialFromResult(result);
			const accessToken = credential.accessToken;
			const idToken = credential.idToken;
		})
		.catch(error => {
			// Handle error.
			console.log(error);
		});
};