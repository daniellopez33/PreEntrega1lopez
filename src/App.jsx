

import  Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className='app'>
        <Navbar />
        <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
