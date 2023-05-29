import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


