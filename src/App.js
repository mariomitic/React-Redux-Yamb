import './App.css';
import './components/MainStyle.css'
import Dices from './components/Dices'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {



  return (
    <Provider store={store} >
    <div className='App grid-container'>
      <div className='title'>Yamb Game</div>
      <Dices />
    </div>
    </Provider>
  );
}

export default App;
