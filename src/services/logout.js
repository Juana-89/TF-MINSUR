import { signOut } from 'firebase/auth';
import { auth, db } from './firebase_config.js';
import { collection, addDoc } from 'firebase/firestore';
// función de cerrar sesión
export const logOutFb = () => signOut(auth);

// Add a new document with a generated id.
export const setDataInFirestore = async form => {
	const docRef = await addDoc(collection(db, 'solicitudes'), form);
	console.log(docRef.id);
};