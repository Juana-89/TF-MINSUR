/* eslint-disable react/prop-types */
import { CardMedia, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import btnImg from '../iconsHome/btn1.png';
import btnImg2 from '../iconsHome/btn2.png';
import iconPr from '../iconsHome/iconPr.png';
import iconPr2 from '../iconsHome/iconPr2.png';
import styles from '../Home.module.css';

const HomeBtn = props => {
	return (
		<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
			<Button
				onClick={props.navigateHandler}
				style={{ textTransform: 'none' }}
				variant='contained'
				sx={{
					backgroundColor: '#41B6E6',
					borderRadius: '24px',
					width: '70%',
					height: '40px',
					fontWeight: '700',
					marginTop: '20px',
				}}
			>
				{props.actionBtn}
			</Button>
		</Stack>
	);
};

const HomeBtns = props => {
	return (
		<Stack
			direction='row'
			sx={{
				justifyContent: 'space-around',
				alignItems: 'right',
				marginTop: '8px',
			}}
		>
		<div className={styles.divButtons}>
		<div className={styles.button}>
			<button
				onClick={props.navigateHandlerTimecoupon}
				className={`${styles.BenefitBtns} ${styles.btnColor}`}
			>
				<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={btnImg}
						sx={{ width: '45px', height: '45px', marginBottom: '9px' }}
					/>
					<p>Solicita aquí tu cupón de medio día libre</p>
				</Stack>
			</button>
			</div>
			<div className={styles.button}>
			<button
				onClick={props.navigateHandlerBirthday}
				className={`${styles.BenefitBtns} ${styles.btnColor2}`}
			>
				<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={btnImg2}
						sx={{ width: '45px', height: '45px', marginBottom: '9px' }}
					/>
					<p>Solicita aquí tu cupón de día libre por cumpleaños</p>
				</Stack>
			</button>
			</div>
			</div>
		</Stack>
	);
};

const HomeBtnsBeca = props => {
	return (
		<Stack
			direction='row'
			sx={{
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: '8px',
			}}
		>
			<button
				onClick={props.navigateHandlerTimecoupon}
				className={`${styles.BenefitBtns} ${styles.btnColor}`}
			>
				<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={iconPr}
						sx={{ width: '55px', height: '55px', marginBottom: '9px' }}
					/>
					<p>Educación Básica</p>
				</Stack>
			</button>
			<button
				onClick={props.navigateHandlerBirthday}
				className={`${styles.BenefitBtns} ${styles.btnColor2}`}
			>
				<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={iconPr2}
						sx={{ width: '55px', height: '55px', marginBottom: '9px' }}
					/>
					<p>Mi beca</p>
				</Stack>
			</button>
		</Stack>
	);
};

export { HomeBtn, HomeBtns, HomeBtnsBeca };