import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/inicio' element={<Home/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
