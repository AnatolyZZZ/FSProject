import './App.scss';
import AppRouter from 'router/AppRouter'
import CSRFToken from '@components/CSRFToken'
import AlertMessage from '@components/AlertMessage';

function App() {
  return (
    <div className="App">
      <CSRFToken/>
      <AlertMessage/>
      <AppRouter/>
    </div>
  );
}

export default App;
