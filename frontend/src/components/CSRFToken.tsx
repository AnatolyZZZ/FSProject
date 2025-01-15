import { useEffect } from 'react'
import { getData } from '@api'
import {  useDispatch, useSelector } from 'react-redux';
import type { Dispatch, RootState } from '@store/store';
import { showAlert } from '@store/actions/app';
import { useCookies } from 'react-cookie';
import { api } from 'plugins/axios'


const CSRFToken : React.FC = () => {
	const be_url = useSelector<RootState>(state => state.app.be_url);
	const dispatch = useDispatch<Dispatch>();

	const [cookies] = useCookies(['XSRF-TOKEN']);
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
		const encodedToken = encodeURIComponent(token);
		api.defaults.headers.common['X-CSRF-TOKEN'] = encodedToken;
	  }, [cookies])
	return <></>
}

export default CSRFToken