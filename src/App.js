import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import TimeCoupon from './components/timeCoupon/TimeCoupon';
import BirthdayCoupon from './components/birthdayCoupon/BirthdayCoupon';
import { AuthProvider } from './context/authContext';
import DetailBenefit from './components/detailBenefit/DetailBenefit.jsx';
function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/home' element={<Home />} />
						<Route path='/benefit' element={<DetailBenefit />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
