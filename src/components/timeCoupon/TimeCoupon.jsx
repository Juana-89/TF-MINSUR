import React, { useState } from 'react';
import styles from './TimeCoupon.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../nav/nav2';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import isWeekend from 'date-fns/isWeekend';
import Divider from '@mui/material/Divider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TextField from '@mui/material/TextField';
import { es } from 'date-fns/locale';
import Greetings from '../greetings/greetings';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Popup from '../../components/popups/Popup';
import { SendEmail } from '../../services/sendgrid';

const TimeCoupon = () => {
	const [value, setValue] = React.useState(null);
	const [turn, setTurn] = React.useState('');
	const [textReq, setTextReq] = React.useState('');
	const [showModal, setShowModal] = React.useState(false);

	const handleMessageChange = event => {
		setTextReq(event.target.value);
		console.log(event.target.value);
	};
	const handleChange = event => {
		setTurn(event.target.value);
	};

	const submitForm = async e => {
		e.preventDefault();

		// sendgrid body email

		const msg = {
			to: 'nay.trevejo@gmail.com',
			from: 'fparodig@gmail.com', // Use the email address or domain you verified above
			subject: 'Solicitando permiso de medio día',
			text: `Hola! Estoy solicitando permiso para ${value} en el turno ${turn}. Muchas gracias.`,
			html: `Hola! Estoy solicitando permiso para ${value} 
			en el turno ${turn}. Muchas gracias.
			Motivo: ${textReq}`,
		};
		await SendEmail(msg);

		setShowModal(!showModal);
	};

	return (
		<div className={styles.container}>
			<Stack>
				<Navbar></Navbar>
			</Stack>
			<Stack>
				<Greetings />
			</Stack>

			<div className={styles.container}>
				<Stack sx={{ background: '#FFFFFF', borderRadius: '20px 20px 0 0' }}>
					<h3 className={styles.tittle}> Cupón medio día libre </h3>
					<Divider />
					<Box className={styles.formContainer} sx={{ minWidth: 120 }}>
						<p className={styles.subtittle}> Elige fecha y horario </p>

						<form onSubmit={submitForm}>
							<div className={styles.internalContainers}>
								<LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
									<StaticDatePicker
										displayStaticWrapperAs='desktop'
										orientation='portrait'
										openTo='day'
										value={value}
										shouldDisableDate={isWeekend}
										onChange={newValue => {
											setValue(newValue);
										}}
										renderInput={params => <TextField {...params} />}
									/>
								</LocalizationProvider>
								<div className={styles.turnContainer}>
									<InputLabel>Turno</InputLabel>
									<Select
										sx={{
											width: '350px',
											color: '#003da5',
											fontWeight: 'bold',
										}}
										id='selectYourTurn'
										className={styles.selectInput}
										value={turn}
										onChange={handleChange}
									>
										<MenuItem
											sx={{
												color: '#003da5',
												fontWeight: 'bold',
											}}
											value={'Turno: 9:00 am - 1:00 pm'}
										>
											Turno: 9:00 am - 1:00 pm
										</MenuItem>
										<MenuItem
											sx={{
												color: '#003da5',
												fontWeight: 'bold',
											}}
											value={'Turno: 2:00 pm - 6:00 pm'}
										>
											Turno: 2:00 pm - 6:00 pm
										</MenuItem>
									</Select>

									<div className={styles.accordion}>
										<Accordion>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls='panel1a-content'
												id='panel1a-header'
											>
												<Typography className={styles.motive}>
													Motivo de la solicitud (opcional)
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<TextareaAutosize
													id='textReq'
													name='textReq'
													value={textReq}
													onChange={handleMessageChange}
													aria-label='minimum height'
													minRows={3}
													placeholder='Explica tu motivo'
													style={{ width: 250 }}
												/>
											</AccordionDetails>
										</Accordion>
									</div>
								</div>
							</div>
							<button className={styles.submitBtn} type='submit'>
								{' '}
								Enviar solicitud{' '}
							</button>
							{showModal && (
								<Popup>
									{'¡Tu solicitud fue enviada con éxito al jefe de tu área!'}{' '}
								</Popup>
							)}
						</form>
					</Box>
				</Stack>
			</div>
		</div>
	);
};

export default TimeCoupon;