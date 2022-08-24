import React from 'react';
import styles from './BirthdayCoupon.module.css';
import Nav from '../nav/Nav';
import Stack from '@mui/material/Stack';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { es } from 'date-fns/locale';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';

const BirthdayCoupon = () => {
	const [value, setValue] = React.useState(new Date());
	const submitFormBirthday = e => {
		e.preventDefault();
		console.log(value);
	};
	return (
		<>
			<div className={styles.container}>
				<Stack>
					<Nav></Nav>
				</Stack>
				<Stack
					direction='row'
					sx={{
						height: '90px',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '10px',
					}}
				>
					<p className={styles.greetings}>
						Hola, <span>usuario!</span>
					</p>
					<NotificationsNoneIcon
						fontSize='large'
						sx={{ color: '#FFFFFF', margin: '3px' }}
					/>
				</Stack>

				<Stack sx={{ background: '#FFFFFF', borderRadius: '20px 20px 0 0' }}>
					<h3 className={styles.tittle}> Cupón medio día libre </h3>
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
						</form>
					</Box>
				</Stack>
			</div>
		</>
	);
};

export default BirthdayCoupon;