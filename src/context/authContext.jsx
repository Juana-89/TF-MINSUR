/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { signInUser, onAuthStateChanged, auth } from '../services/auth';

// createContext devuelve un objeto
export const authContext = createContext();

// hook personalizado que devuelve un objeto
export const useAuth = () => {
	const context = useContext(authContext);
	if (!context) throw new Error('no hay un auth provider');
	return context;
};

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const signIn = (email, password) => signInUser(email, password);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		});
	}, []);

	return (
		// los comp hijos podrán acceder a todo los datos q esta en provider
		<authContext.Provider value={{ signIn, user }}>
			{children}
		</authContext.Provider>
	);
}
