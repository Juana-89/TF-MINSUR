// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCDwMSfsrDi14Gvr4WcXPd5IE4U1P8QyHM',
	authDomain: 'minsur-fa571.firebaseapp.com',
	projectId: 'minsur-fa571',
	storageBucket: 'minsur-fa571.appspot.com',
	messagingSenderId: '1093305209841',
	appId: '1:1093305209841:web:bb13f7c0705aae169c2a50',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
