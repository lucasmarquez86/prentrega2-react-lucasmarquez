import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import  CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './firebaseConfig/services/Checkout';

function App() {
  return (
    <div className="App">
     <CartProvider>
      <BrowserRouter>
      
        <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/inicio' element={<Home/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
      </BrowserRouter>
      </CartProvider>
      <Footer />
    </div>
  )
}

export default App;
