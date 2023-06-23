import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import Header from "./components/Header";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './components/context/CartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/Cart"} element={<Cart />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;


