import  Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className='app'>
        <Navbar />
        <ItemListContainer greeting={'Bienvenidos'}/>
        <ItemCount initial = {1} stock ={10} onAdd = {(quantity) => console.log('Cantidad agregada',quantity)}/>
    </div>
  );
}

export default App;
