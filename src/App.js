import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import TimeCoupon from './components/timeCoupon/TimeCoupon';
import BirthdayCoupon from './components/birthdayCoupon/BirthdayCoupon';
import { AuthProvider } from './context/authContext';
// import DetailBenefit from './components/detailBenefit/DetailBenefit';
import BenefitsInformation from './components/benefitsInformation/benefitsInformation';
import { BenefitsProvider } from './context/benefitContext';
import DescriptionBenefit from './components/DescriptionBenefit/DescriptionBenefit';
import {
	Convenios,
	HomeOffice,
	HorarioFlexible,
	HorarioVerano,
	LicenciaPaternidad,
	LicenciaPorDuelo,
	SeguroSalud,
} from './components/detailBenefit/benefitsPages';
function App() {
	return (
		<>
			<AuthProvider>
				<BenefitsProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Login />} />
							<Route path='/home' element={<Home />} />
							<Route path='/benefits' element={<Convenios />} />
							<Route path='/timecoupon' element={<TimeCoupon />} />
							<Route path='/birthdaycoupon' element={<BirthdayCoupon />} />
							<Route
								path='/benefitsInformation/:id'
								element={<BenefitsInformation />}
							/>
							<Route path='/couponbenefits' element={<DescriptionBenefit />} />
							<Route path='/salud' element={<SeguroSalud />} />
							<Route path='/homeoffice' element={<HomeOffice />} />
							<Route path='/horarioverano' element={<HorarioVerano />} />
							<Route path='/horarioflex' element={<HorarioFlexible />} />
							<Route path='/licencia' element={<LicenciaPorDuelo />} />
							<Route
								path='/licenciapaternidad'
								element={<LicenciaPaternidad />}
							/>
						</Routes>
					</BrowserRouter>
				</BenefitsProvider>
			</AuthProvider>
		</>
	);
}

export default App;