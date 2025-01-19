import './App.scss';
import AppRouter from 'router/AppRouter'
import CSRFToken from '@components/CSRFToken'

function App() {
  return (
    <div className="App">
      <CSRFToken/>
      <AppRouter/>
    </div>
  );
}

export default App;
