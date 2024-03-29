import './App.css';
import './components/MainStyle.css'
import './components/MainStyle_412.css'
import './components/MainStyle_768.css'
import Dices from './components/Dices'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {



  return (
    <Provider store={store} >
    <div className='App grid-container'>
      <Dices />
    </div>
    </Provider>
  );
}

export default App;
