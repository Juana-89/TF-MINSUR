import React from 'react';
import styles from './BirthdayCoupon.module.css';
import Navbar from '../nav/nav2';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { es } from 'date-fns/locale';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import Greetings from '../greetings/greetings';
import Popup from '../../components/popups/Popup';
import { SendEmail } from '../../services/sendgrid';

const BirthdayCoupon = () => {
	const [value, setValue] = React.useState(new Date());
	const [showModal, setShowModal] = React.useState(false);

	const submitFormBirthday = async e => {
		e.preventDefault();

		// email body
		const msg = {
			to: 'nay.trevejo@gmail.com',
			from: 'fparodig@gmail.com', // Use the email address or domain you verified above
			subject: 'Solicitando permiso de Cumpleaños',
			text: `Hola! Estoy solicitando permiso para el día ${value} por motivo de mi cumpleaños. Muchas gracias.`,
			html: `Hola! Estoy solicitando permiso para el día ${value} por motivo de mi cumpleaños. Muchas gracias.`,
		};

		await SendEmail(msg);

		setShowModal(!showModal);
	};

	return (
		<>
			<div className={styles.container}>
				<Stack>
					<Navbar></Navbar>
				</Stack>
				<Stack>
					<Greetings />
				</Stack>
				<Stack sx={{ background: '#FFFFFF', borderRadius: '20px 20px 0 0' }}>
					<h3 className={styles.tittle}> Cupón de cumpleaños </h3>
					<Divider />
					<Box className={styles.formContainer} sx={{ minWidth: 120 }}>
						<p className={styles.subtittle}> Elige fecha </p>
						<form onSubmit={submitFormBirthday}>
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
		</>
	);
};

export default BirthdayCoupon;