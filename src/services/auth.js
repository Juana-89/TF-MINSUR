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

export const loginMicrosoft = (e) => {
	e.preventDefault();
	return signInWithPopup(auth, provider)
		.then(result => {
			console.log('funcionaaa');
			const credential = OAuthProvider.credentialFromResult(result);
			const accessToken = credential.accessToken;
			const idToken = credential.idToken;
		})
		.catch(error => {
			console.log(error);
			console.log(error.stack);
			console.loge(error.message);
		});
};
