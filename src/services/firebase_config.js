import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Config Minsur 1

// // Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCDwMSfsrDi14Gvr4WcXPd5IE4U1P8QyHM',
	authDomain: 'minsur-fa571.firebaseapp.com',
	projectId: 'minsur-fa571',
	storageBucket: 'minsur-fa571.appspot.com',
	messagingSenderId: '1093305209841',
	appId: '1:1093305209841:web:bb13f7c0705aae169c2a50',
};

// Config Minsur 2

// const firebaseConfig = {
// 	apiKey: 'AIzaSyD4hpSq7Dsut-LlPGGaKNNQR6BWms5ytyE',
// 	authDomain: 'minsur2.firebaseapp.com',
// 	projectId: 'minsur2',
// 	storageBucket: 'minsur2.appspot.com',
// 	messagingSenderId: '678412895264',
// 	appId: '1:678412895264:web:2bd62ea8cf3e1df6306845',

// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);