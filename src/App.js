import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Login from './pages/Login';
import RootRouter from './routes/RootRoutes';


function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>

  );
}

export default App;
