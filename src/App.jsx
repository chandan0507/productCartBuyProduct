import './App.css'
import AllProducts from './AllProducts'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart';
import { CartProvider } from './CartContext';

function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
