/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import {
	getBenefitsQuerySnapshot,
	getProgramsQuerySnapshot,
} from '../services/firestore';

// createContext devuelve un objeto
export const benefitsContext = createContext();

// hook personalizado que devuelve un objeto

export const useBenefits = () => {
	const context = useContext(benefitsContext);
	if (!context) throw new Error('no hay un benefits provider');
	return context;
};

export function BenefitsProvider({ children }) {
	const [benefitsData, setBenefitsData] = useState([]);
	const [programsData, setProgramsData] = useState([]);

	const getBenefitDataCtx = () => getBenefitsQuerySnapshot();
	const getProgramsDataCtx = () => getProgramsQuerySnapshot();

	useEffect(() => {
		const getBenefitsAndPrograms = async () => {
			try {
				const querySnapshotBenefits = await getBenefitsQuerySnapshot();
				const querySnapshotPrograms = await getProgramsQuerySnapshot();
				const benefits = [];
				const programs = [];
				querySnapshotBenefits.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setBenefitsData(benefits);
				querySnapshotPrograms.forEach(doc => {
					programs.push({ ...doc.data(), id: doc.id });
				});
				setProgramsData(programs);
				// console.log(benefits);
				// console.log(programs);
			} catch (error) {
				console.log(error);
			}
		};
		getBenefitsAndPrograms();
	}, []);

	return (
		// los comp hijos podrán acceder a todo los datos q esta en provider
		<benefitsContext.Provider
			value={{
				getBenefitDataCtx,
				getProgramsDataCtx,
				benefitsData,
				programsData,
			}}
		>
			{children}
		</benefitsContext.Provider>
	);
}
