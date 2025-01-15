import { postData } from '@api'
import { Dispatch } from '@store/store';
import Button from '@mui/material/Button';
import { showAlert } from '@store/actions/app';
import {  useDispatch } from 'react-redux';
import AlertMessage from '@components/AlertMessage';
import './App.scss';


function App() {
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


  return (
    <div className="App">
      <AlertMessage/>
      
      <div className='with-button'>
        <Button variant='contained' onClick={fetchAndMessage}> Make a test</Button>
      </div>
    </div>
  );
}

export default App;
