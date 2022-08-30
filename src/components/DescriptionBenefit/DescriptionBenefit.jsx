import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import style from './DescriptionBenefit.module.css';
import { getOrder, updateTrue, updateFalse } from '../../services/firestore';
import { useNavigate, Link } from 'react-router-dom';

const DescriptionBenefit = () => {
	const [listDesc, setListDesc] = useState([]);
	const [filter, setFilter] = useState([]);
	const navigate = useNavigate();

	const getCollection = () => {
		getOrder(setListDesc);
		getOrder(setFilter);
	};

	const updateStatus = item => {
		if (item.like === true) {
			updateFalse(item.id);
		} else {
			updateTrue(item.id);
		}
	};
	const redirect = () => {
		navigate('/home');
	};
	useEffect(() => {
		getCollection();
	}, []);

	const filterCategory = category => {
		setFilter(listDesc.filter(x => x.category === category));
	};
	return (
		<section>
			<div className={style.topDescription}>
				<button className={style.btnComeBack} onClick={redirect}>
					<MdKeyboardArrowLeft style={{ fontSize: 20 }} /> Regresar
				</button>
				<select
					className={style.btnSelect}
					onChange={x => filterCategory(x.target.value)}
				>
					<option value='Alimentos'>Alimentos - Parrillas</option>
					<option value='Gimnasio'>Gimnasio</option>
					<option value='Viajes'>Viajes</option>
				</select>
			</div>
			{filter.map(item => (
				<div className={style.container} key={item.id}>
					<div className={style.alcostado}>
						<div className={style.boxFloating}>
							<h4>{item.desc}% Dscto</h4>
							<p>Cuenta sueldo</p>
						</div>
						<img src={item.img} alt='Beneficio' />
					</div>
					<div className={style.descripBenefit}>
						<AiFillHeart
							onClick={() => {
								updateStatus(item);
							}}
							style={
								item.like === true
									? { margin: 20, fontSize: 40, color: '#003DA5' }
									: { margin: 20, fontSize: 40, color: '#A6BBC8' }
							}
						/>
						<div>
							<h3 className={style.benefitName}>{item.name}</h3>
							<p
								style={{
									color: '#4F758B',
									marginRight: 30,
									marginBottom: 10,
									textAlign: 'left',
								}}
							>
								{item.description.slice(0, 40) + '...'}
							</p>
							<Link
								to={`/benefitsInformation/${item.id}`}
								className={style.btnDetaills}
							>
								Ver detalle
							</Link>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default DescriptionBenefit;