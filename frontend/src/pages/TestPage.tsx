import Button from '@mui/material/Button';
import { postData } from '@api'
import { Dispatch } from '@store/store';
import { useDispatch } from 'react-redux';
import { showAlert } from '@store/actions/app';

const TestPage  :  React.FC = () => {
	const dispatch = useDispatch<Dispatch>();
	const fetchAndMessage = async () => {
		const moment = Date.now();
		const { data, error } = await postData<{message: string, total_milliseconds : number}>('/test', {moment});
		if (data) {
		  dispatch(showAlert({ message: data.message }))
		} else {   
		  dispatch(showAlert({ type: 'error', message: error}))
		}
	  }
	return <>
<div className='with-button'>
    <Button variant='contained' onClick={fetchAndMessage}> Make a test</Button>
</div>
</>
	
	
}

export default TestPage