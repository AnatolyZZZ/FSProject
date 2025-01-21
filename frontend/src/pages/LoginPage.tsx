
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { isEmail} from '@utils/validationRules';


const rulesVocabulary = {
	email: isEmail,
	password: () => ''
}
const LoginPage: React.FC = () => {
	const [formData, setFormData] = useState({email: '', password: ''});
	const [validation, setValidation] = useState({email: '', password: ''})

	const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormData((prevFormData) => {
			const newFormData = {...prevFormData, [name]: value}
			setValidation((prevValidation) => {
				const newValidation = {...prevValidation, [name]: rulesVocabulary[name](newFormData[name])}
				return newValidation})
			return newFormData}
		)
	}

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault()
	}
	
	return (
		<div className="login-page app-page">
			<Box 
				component="form"
				sx={{
					width: 400,
					flexDirection: 'column',
					gap: 1,
					display: 'flex'
				}}
				onSubmit={onSubmit}
			>
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
				<Button type='submit'>Login</Button>
			</Box>
			
		</div>
	)
}

export default LoginPage