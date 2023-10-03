import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
     <CartProvider>
      <BrowserRouter>
      
        <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/inicio' element={<Home/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;
