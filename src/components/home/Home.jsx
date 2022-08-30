import React, { useState } from 'react';
import styles from './Home.module.css';
import { Stack } from '@mui/material';
import { SimpleAccordion } from '../accordion/accordion';
import Greetings from '../greetings/greetings';
import { useNavigate } from 'react-router-dom';

import { useBenefits } from '../../context/benefitContext';
import Navbar from '../nav/nav2';

const Home = () => {
	// obteniendo data de beneficios y projectos
	const { benefitsData, programsData } = useBenefits();

	const navigate = useNavigate();

	let timeCupons = null;
	let otherBenefits = null;
	let educationPrograms = null;
	let otherPrograms = null;
	if (benefitsData.length) {
		timeCupons = benefitsData.filter(e => e.IdBenef < 2);
		otherBenefits = benefitsData.filter(e => e.IdBenef >= 2);
	}
	if (programsData.length) {
		educationPrograms = programsData.filter(e => e.IdPrograma < 3);
		otherPrograms = programsData.filter(e => e.IdPrograma >= 3);
	}

	const navigateHandler = route => {
		navigate(route);
	};

	// manejando vistas
	const [stateViewOptions, setStateViewOptions] = useState(true);
	const viewOptionsController = () => setStateViewOptions(true);
	return (
		<div className={styles.container}>
			<Stack>
				<Navbar></Navbar>
			</Stack>

			<Greetings></Greetings>
			<Stack
				className={styles.viewport}
				sx={{
					background: '#FFFFFF',
					borderRadius: '20px 20px 0 0',
					paddingBottom: '15px',
					minHeight: '75vh',
					paddingTop: '8px',
				}}
			>
				<Stack
					direction='row'
					sx={{ justifyContent: 'space-around', padding: '5px' }}
				>
					<p
						onClick={viewOptionsController}
						className={
							stateViewOptions ? `${styles.textActive}` : `${styles.proyects}`
						}
					>
						Mis beneficios
					</p>
					<p
						onClick={() => setStateViewOptions(false)}
						className={
							!stateViewOptions ? `${styles.textActive}` : `${styles.proyects}`
						}
					>
						Proyectos y programas
					</p>
				</Stack>
				{stateViewOptions && (
					<Stack sx={{ padding: '10px' }}>
						{timeCupons && (
							<SimpleAccordion
								navigateHandlerTimecoupon={() => navigateHandler('/timecoupon')}
								navigateHandlerBirthday={() =>
									navigateHandler('/birthdaycoupon')
								}
								actionBtns={true}
								src={timeCupons[0].icon}
								title='Cupones de tiempo libre'
								description={timeCupons[0].descBenef}
							></SimpleAccordion>
						)}
						{otherBenefits &&
							otherBenefits.map(e => (
								<SimpleAccordion
									navigateHandler={() => navigateHandler(e.route)}
									actionBtn='Ver detalle'
									src={e.icon}
									title={e.nombreBenef}
									description={e.descBenef}
									key={e.IdBenef}
								></SimpleAccordion>
							))}
					</Stack>
				)}

				{!stateViewOptions && (
					<Stack sx={{ padding: '10px' }}>
						{educationPrograms && (
							<SimpleAccordion
								navigateHandlerTimecoupon={() => navigateHandler('/home')}
								navigateHandlerBirthday={() => navigateHandler('/home')}
								actionBtnsBeca={true}
								src={educationPrograms[0].icon}
								title='Educación'
								description={educationPrograms[0].DescPrograma}
							></SimpleAccordion>
						)}
						{otherPrograms &&
							otherPrograms.map(e => (
								<SimpleAccordion
									navigateHandler={() => navigateHandler(e.route)}
									key={e.IdPrograma}
									actionBtn='Ver detalle'
									src={e.icon}
									title={e.NombPrograma}
									description={e.DescPrograma}
								></SimpleAccordion>
							))}
					</Stack>
				)}
			</Stack>
			<Stack
				sx={{
					color: '#FFFFFF',
					fontWeight: '700',
					margin: '0 auto',
					justifyContent: 'center',
					alignItems: 'center',
					height: '50px',
				}}
			>
				<p>Powered by squad Minsur</p>
			</Stack>
		</div>
	);
};
export default Home;