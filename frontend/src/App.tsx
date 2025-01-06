import { useEffect } from 'react'
import { postData, getData } from '@api'
import { Dispatch, RootState } from '@store/store';
import Button from '@mui/material/Button';
import { showAlert } from '@store/actions/app';
import {  useDispatch, useSelector } from 'react-redux';
import AlertMessage from '@components/AlertMessage';
import './App.scss';
import { useCookies } from 'react-cookie';
import { api } from './plugins/axios'


function App() {
  const be_url = useSelector<RootState>(state => state.app.be_url)
  const dispatch = useDispatch<Dispatch>();
  const [cookies, setCookie, removeCookie] = useCookies(['XSRF-TOKEN']);

  const fetchAndMessage = async () => {
    const moment = Date.now();
    const { data, error } = await postData<{message: string, total_milliseconds : number}>('/test', {moment});
    if (data) {
      dispatch(showAlert({ message: data.message }))
    } else {   
      dispatch(showAlert({ type: 'error', message: error}))
    }
  }

  useEffect (()=> {
    const controller = new AbortController();
    const signal = controller.signal;
  
    const getCSRF = async () => {
      const {error} = await getData(`${be_url}/sanctum/csrf-cookie`, {}, signal);
      if (error) return  dispatch(showAlert({ type: 'error', message: error}));
    }
    getCSRF();
    return () => controller.abort();
  }, 
    [be_url, dispatch]
  )

  useEffect (()=> {
    if (!cookies) return
    const token = cookies['XSRF-TOKEN'] as string
    if (!token) return
    api.defaults.headers.common['X-CSRF-TOKEN'] = token;
  }, [cookies])
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
