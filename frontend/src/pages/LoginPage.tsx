
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { isEmail, requiredString} from '@utils/validationRules';
import { postData } from '@api';
import { showAlert } from '@store/actions/app';
import { Dispatch, RootState } from '@store/store';
import { useDispatch, useSelector} from 'react-redux';


const rulesVocabulary = {
	email: isEmail,
	password: requiredString
}
const LoginPage: React.FC = () => {
	const dispatch = useDispatch<Dispatch>();
	const be_url = useSelector<RootState>(state => state.app.be_url);
	const [formData, setFormData] = useState({email: '', password: ''});
	const [validation, setValidation] = useState({email: '', password: ''});
	const [formValid, setFormValid] = useState(false);

	const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormData((prevFormData) => {
			const newFormData = {...prevFormData, [name]: value}
			setValidation((prevValidation) => {
				const newValidation = {...prevValidation, [name]: rulesVocabulary[name](newFormData[name])};
				setFormValid(Object.values(newValidation).every(message => !message));
				return newValidation})
			return newFormData}
		)
	}

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!formValid) return;
		const {data, error} = await postData(`${be_url}/login`, formData);
		if (error) dispatch(showAlert({type: 'error', message: error}))
		console.log('data ->', data);
	}
	
	return (
		<div className="login-page app-page">
			<Box 
				component="form"
				sx={{
					width: 400,
					flexDirection: 'column',
					gap: 0,
					display: 'flex'
				}}
				onSubmit={onSubmit}
			>
				<div className="input-wrap">
					<TextField
						label="email"
						variant="outlined"
						type='email'
						name='email'
						value={formData.email}
						autoComplete='email'
						onChange={handleChange}
						error={!!validation.email}
						helperText={validation.email}
					/>
				</div>
				<div className="input-wrap">
					<TextField
						label="password"
						variant="outlined"
						type='password'
						name='password'
						autoComplete='password'
						value={formData.password}
						onChange={handleChange}
						error={!!validation.password}
						helperText={validation.password}
					/>
				</div>
				<Button 
					type='submit'
					disabled={!formValid}
				>
					Login
				</Button>
			</Box>
			
		</div>
	)
}

export default LoginPage