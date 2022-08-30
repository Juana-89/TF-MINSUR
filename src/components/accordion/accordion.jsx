/* eslint-disable react/prop-types */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardMedia } from '@mui/material';
import { HomeBtn, HomeBtns, HomeBtnsBeca } from '../home/homeBtn/homeBtns';

export function SimpleAccordion({
	src,
	title,
	description,
	actionBtn,
	actionBtns,
	actionBtnsBeca,
	navigateHandler,
	navigateHandlerTimecoupon,
	navigateHandlerBirthday,
}) {
	return (
		<Accordion sx={{ padding: '10px' }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<CardMedia
					component='img'
					image={src}
					sx={{ width: '40px', height: '40px' }}
				/>
				<Typography
					sx={{ color: '#003DA5', fontWeight: '700', marginLeft: '15px' }}
				>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography
					sx={{ color: '#4F758B', fontWeight: '400' }}
					align='justify'
				>
					{description}
				</Typography>
				{actionBtn && (
					<HomeBtn
						actionBtn={actionBtn}
						navigateHandler={navigateHandler}
					></HomeBtn>
				)}
				{actionBtns && (
					<HomeBtns
						navigateHandlerTimecoupon={navigateHandlerTimecoupon}
						navigateHandlerBirthday={navigateHandlerBirthday}
					></HomeBtns>
				)}
				{actionBtnsBeca && (
					<HomeBtnsBeca
						navigateHandlerTimecoupon={navigateHandlerTimecoupon}
						navigateHandlerBirthday={navigateHandlerBirthday}
					></HomeBtnsBeca>
				)}
			</AccordionDetails>
		</Accordion>
	);
}