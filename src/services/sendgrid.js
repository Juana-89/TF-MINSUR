import axios from 'axios';

export const SendEmail = async msg => {
	await axios.post('https://us-central1-minsur-fa571.cloudfunctions.net/sendEmail', 
  {msg});
};