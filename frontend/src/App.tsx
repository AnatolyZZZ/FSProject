import logo from '@assets/logo.svg';
import './App.css';
import { useEffect } from 'react'
import { postData } from '@api'
import { Dispatch } from '@store/store';
import { showAlert } from '@store/actions/app';
import {  useDispatch } from 'react-redux';
import AlertMessage from '@components/AlertMessage';


function App() {
  const dispatch = useDispatch<Dispatch>();
  useEffect (()=> {
    const fetchAndMessage = async () => {
      const timestamp = Date.now();
      const {data, error} = await postData<string>('/test', {timestamp});
      if (data) {
        dispatch(showAlert({ message: data }))
      } else {
        dispatch(showAlert({ type: 'error', message: error}))
      }
    }
  fetchAndMessage()
  }, [])
  return (
    <div className="App">
      <AlertMessage/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
