import React, { useState } from 'react';
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { MdLockOutline } from 'react-icons/md';
import Logo from '../../assets/Logo_Minsur.png';
import { useAuth } from '../../context/authContext';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const { signIn } = useAuth();
	const onSubmit = async e => {
		e.preventDefault();

		try {
			await signIn(email, password);
			navigate('/');
			console.log('inicio de sesión exitoso');
		} catch (error) {
			console.log(error.code, error.message);
			switch (error.code) {
				case '':
					setError('Campos vacíos.Ingrese correo y contraseña');
					break;
				case 'auth/user-not-found':
					setError('Usuario no registrado');
					break;
				case 'auth/wrong-password':
					setError('Contraseña inválida.Intente nuevamente');
					break;
				case 'auth/invalid-email':
					setError('Ingrese un correo válido');
					break;
				case 'auth/internal-error':
					setError('Ingrese su contraseña');
					break;
				default:
					setError('Otro error');
			}
		}
	};

	const [popupActive, setPopupActive] = useState(false);

	const handleClose = () => {
		setPopupActive(false);
	};

	return (
		<section>
			<form onSubmit={onSubmit}>
				<img className={style.logo} src={Logo} alt='Logo' />
				<h1>Ingresar</h1>
				<BiUserCircle />
				<input
					type='email'
					placeholder='Ingresa tu correo electrónico'
					onChange={e => {
						setEmail(e.target.value);
					}}
				/>
				<MdLockOutline />
				<input
					type='password'
					placeholder='Ingresa tu contraseña'
					onChange={e => {
						setPassword(e.target.value);
					}}
				/>

				<Link to='#'>¿Olvidaste tu contraseña?</Link>
				<button type='submit'>Ingresar</button>
			</form>

			<div id={style.container}>
				<div id={style.modal}>
					<h2>Aviso</h2>
					<p>{error}</p>
					<button onClick={handleClose}>Aceptar</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
