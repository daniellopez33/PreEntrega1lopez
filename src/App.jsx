import Navbar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import {AsyncMock} from './components/Item/asyncmock';

function App() {
  return (
    <div className='app'>
        <Navbar />
        <AsyncMock/>
    </div>
  );
}

export default App;
