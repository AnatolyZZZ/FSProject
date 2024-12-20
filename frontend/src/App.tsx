import logo from '@assets/logo.svg';
import './App.css';
import { useEffect } from 'react'
import { postData } from '@api'
import { Dispatch, ActionsType } from '@store/store';
import {  useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch<Dispatch>();
  useEffect (()=> {
    const fetchAndMessage = async () => {
      const timestamp = Date.now();

      const {data, error} = await postData('/test', {timestamp});
      if (data) {
        dispatch({type: ActionsType.SHOW_ALERT, payload: {message: data}})
      } else {
        dispatch({type: ActionsType.SHOW_ALERT, payload: {alert_type: 'error', message: error}})
      }
    }
  fetchAndMessage()
  }, [])
  return (
    <div className="App">
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
